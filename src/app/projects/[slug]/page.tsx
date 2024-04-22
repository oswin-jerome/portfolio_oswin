import SeoHead from "@/components/seoHead";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "@ts-stack/markdown";
import { Metadata, ResolvingMetadata } from "next";

const getData = (slug: string) => {
  const markdownWithMeta = fs.readFileSync(path.join(path.resolve(__dirname.split(".next")[0]), "/md/works", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    slug,
    content,
  };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(path.resolve(__dirname.split(".next")[0]), "md/works"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("md/works", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const { frontmatter } = await getData(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Project - " + frontmatter.title,
    description: frontmatter.excerpt,
    authors: [
      {
        name: "Oswin",
        url: "https://oswinjerome.in",
      },
    ],

    openGraph: {
      images: [frontmatter.cover_image, ...previousImages],
    },
  };
}

const ProjectDetailsPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const {
    frontmatter: { title, date, cover_image, excerpt },
    // slug,
    content,
  } = getData(slug);

  return (
    <div>
      <SeoHead image={cover_image} title={"Project - " + title} description={excerpt} url={`https://oswinjerome.in/projects/${slug}`} />

      <div className="post container mx-auto mt-16 p-8">
        {/* <h1 className='text-4xl font-bold mb-5'>{title}</h1> */}
        <div className="markdown prose prose-a:bg-accent prose-a:p-3 prose-a:rounded prose-a:shadow prose-a:no-underline dark:text-white prose-headings:text-accent prose-h1:text-accent dark:prose-a:text-blue-400 max-w-full" dangerouslySetInnerHTML={{ __html: Marked.parse(content) }}></div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
