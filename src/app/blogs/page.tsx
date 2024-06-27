import SeoHead from "@/components/seoHead";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { getAllBlogs } from "@/actions/blogs";

export const metadata: Metadata = {
  title: "Blogs - Oswin Jerome",
  description: "Explore my blog posts where I share detailed insights on how I built various projects. From initial concepts to final implementations, follow my journey through problem-solving, coding techniques, and the lessons learned along the way.",
  openGraph: {
    images: ["/oswin.jpg"],
  },

  keywords: ["Oswin Jerome", "Oswin", "Jerome", "Flutter", "Laravel", "Php", "JavaScript"],
};

const BlogsPage = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="min-h-[75vh] container mx-auto relative pt-12  mb-24 lg:mb-60">
      <h1 className="text-accent  text-3xl font-bold">Blogs</h1>
      <p className="opacity-40 mt-2">Explore my blog posts where I share detailed insights on how I built various projects. From initial concepts to final implementations, follow my journey through problem-solving, coding techniques, and the lessons learned along the way.</p>
      <div className="container p-0 mx-auto mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {blogs.map((blog: any, index: any) => {
          return (
            <Link href={"/blogs/" + blog.slug} passHref key={index}>
              <div className="work-card shadow-md hover:shadow-2xl opacity-1 scale-100  bg-white rounded-lg aspect-[4/3] cursor-pointer relative">
                <div className="bg-gradient-to-b from-transparent via-transparent rounded-lg to-white absolute inset-0 z-10"></div>
                <h5 className="absolute z-20 bottom-2 left-0 right-0 text-center font-bold">{blog.frontmatter.title}</h5>
                <div style={{ width: "100%", height: "100%", position: "relative" }} className="rounded-lg">
                  <Image title="" src={blog.frontmatter.cover_image} className="rounded-lg" layout="fill" objectFit="cover" alt="d" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
