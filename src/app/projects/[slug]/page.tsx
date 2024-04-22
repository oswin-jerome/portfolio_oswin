import SeoHead from "@/components/seoHead";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "@ts-stack/markdown";

const getData = (slug: string) => {
  const markdownWithMeta = fs.readFileSync(path.join(path.resolve(__dirname.split(".next")[0]), "/md/works", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    slug,
    content,
  };
};

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
        <div className="markdown prose dark:text-white prose-headings:text-accent prose-h1:text-accent dark:prose-a:text-blue-400" dangerouslySetInnerHTML={{ __html: Marked.parse(content) }}></div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
