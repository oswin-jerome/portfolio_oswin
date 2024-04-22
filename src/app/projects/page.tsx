import SeoHead from "@/components/seoHead";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
const getData = () => {
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
  // console.log(works);

  works.sort((a, b) => {
    if (a.frontmatter.id > b.frontmatter.id) {
      return -1;
    }
    return 1;
  });

  return works;
};

const ProjectsPage = () => {
  const works = getData();
  return (
    <div className="min-h-[75vh] container mx-auto relative pt-12  mb-24 lg:mb-60">
      <h1 className="text-accent  text-3xl">Projects</h1>
      <SeoHead image="/oswin.png" url="https://oswinjerome.in/works" title="Works - Oswin Jerome" description="I'm so excited to share my projects with you. I love working on all sorts of different technologies, and I'm always trying to do my best work.." />
      <div className="container p-0 mx-auto mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {works.map((work: any, index: any) => {
          return (
            <Link href={"/projects/" + work.slug} passHref key={index}>
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

export default ProjectsPage;
