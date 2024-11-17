import SeoHead from "@/components/seoHead";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "@ts-stack/markdown";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

const getData = (slug: string) => {
  if (!fs.existsSync(path.join(path.resolve(__dirname.split(".next")[0]), "/md/works", slug + ".md"))) {
    return redirect("/404");
  }
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
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
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

const ProjectDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;

  const {
    slug
  } = params;

  const {
    frontmatter: { title, date, cover_image, excerpt },
    // slug,
    content,
  } = getData(slug);

  return (
    <div>
      <div className="post container mx-auto mt-12 p-8">
        {/* <h1 className='text-4xl font-bold mb-5'>{title}</h1> */}
        <div className="markdown prose prose-a:bg-accent prose-a:p-3 prose-a:rounded prose-a:shadow prose-a:no-underline dark:text-white prose-headings:text-accent prose-h1:text-accent dark:prose-a:text-blue-400 max-w-full" dangerouslySetInnerHTML={{ __html: Marked.parse(content) }}></div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
