import { NextPage } from "next";
import path from "path";
import fs from "fs";
import * as React from "react";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const Projects: NextPage = ({ works }: any) => {
  console.log(works);
  return (
    <div className="min-h-[75vh] container mx-auto relative pt-12  mb-24 lg:mb-60">
      <h1 className="text-accent  text-3xl">Projects</h1>

      <div className="container p-0 mx-auto mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {works.map((work: any, index: any) => {
          return (
            <Link href={"/works/" + work.slug} passHref key={index}>
              <div className="work-card shadow-md hover:shadow-2xl opacity-1 scale-100  bg-white rounded-lg aspect-[4/3] cursor-pointer relative">
                <div className="bg-gradient-to-b from-transparent via-transparent rounded-lg to-white absolute inset-0 z-10"></div>
                <h5 className="absolute z-20 bottom-2 left-0 right-0 text-center font-bold">{work.frontmatter.title}</h5>
                <div style={{ width: "100%", height: "100%", position: "relative" }} className="rounded-lg">
                  <Image title="" src={work.frontmatter.cover_image} className="rounded-lg" layout="fill" objectFit="cover" alt="d" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("md/works"));

  const works = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("md/works", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  console.log(works);
  return {
    props: {
      works: works,
    },
  };
}
