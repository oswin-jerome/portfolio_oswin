import { Client } from "@notionhq/client";
import React from "react";

const BlogDetails = ({blog}) => {
  return (
    <div className="container mx-auto relative pt-12 dark:text-white min-h-[45vh] px-4 lg:px-0 mb-24 lg:mb-60">
      <h1>Hello world</h1>
      <p>{JSON.stringify(blog)}</p>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "a0d68c80d3d442538472100aa744e8b6",
  });
  let blogData = null;
  data.results.forEach((blog)=>{
    if(blog.properties.slug?.rich_text[0]?.plain_text===slug){
        blogData = blog;
    }
  })

  return {
    props: {
      blog:blogData
    },
  };
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "a0d68c80d3d442538472100aa744e8b6",
  });

  //   console.log(data.results);

  return {
    paths: [
      {
        params: {
          slug: "resume-generator-app",
        },
      },
    ],
    fallback: false,
  };
};

export default BlogDetails;
