import SeoHead from "@/components/seoHead";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "@ts-stack/markdown";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { getAllBlogs, getBlogFromSlug } from "@/actions/blogs";

export async function generateStaticParams() {
  const posts = await getAllBlogs();
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
  const { frontmatter } = await getBlogFromSlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Blog - " + frontmatter.title,
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

const BlogDetailsPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const {
    frontmatter: { title, date, cover_image, excerpt },
    content,
  } = await getBlogFromSlug(slug);

  return (
    <div>
      <div className="post container mx-auto mt-12 p-8">
        {/* <h1 className='text-4xl font-bold mb-5'>{title}</h1> */}
        <div className="markdown prose prose-a:bg-accent prose-a:p-3 prose-a:rounded prose-a:shadow prose-a:no-underline dark:text-white prose-headings:text-accent prose-h1:text-accent dark:prose-a:text-blue-400 max-w-full" dangerouslySetInnerHTML={{ __html: Marked.parse(content) }}></div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
