"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { redirect } from "next/navigation";

export const getAllBlogs = async () => {
  const files = fs.readdirSync(path.join("md/blogs"));

  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("md/blogs", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  blogs.sort((a, b) => {
    if (a.frontmatter.id > b.frontmatter.id) {
      return -1;
    }
    return 1;
  });

  return blogs;
};

export const getBlogFromSlug = async (slug: string) => {
  if (!fs.existsSync(path.join(path.resolve(__dirname.split(".next")[0]), "/md/blogs", slug + ".md"))) {
    return redirect("/404");
  }
  const markdownWithMeta = fs.readFileSync(path.join(path.resolve(__dirname.split(".next")[0]), "/md/blogs", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    slug,
    content,
  };
};
