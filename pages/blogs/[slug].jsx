import { render } from '@9gustin/react-notion-render';
import { Client } from "@notionhq/client";
import React from "react";
import { NotionRenderer } from "react-notion";
const BlogDetails = ({blog}) => {
  return (
    <div className="container mx-auto relative pt-12 dark:text-white min-h-[45vh] px-4 lg:px-0 mb-24 lg:mb-60 prose prose-slate ">

      <div dangerouslySetInnerHTML={{__html: blog}}></div>
      {/* <p> {blog}</p> */}
      {/* <Render blocks={blog.results} useStyles /> */}
      {/* {render([blog], true)} */}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const NotionPageToHtml = require('notion-page-to-html');

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "a0d68c80d3d442538472100aa744e8b6",
  });
  let blogData = "Hello";
  await data.results.forEach(async(blog)=>{

    if(blog.properties.slug?.rich_text[0]?.plain_text===slug){
      blogData = blog;
    }

    
  })

  const abc = await notion.blocks.children.list({
    block_id: blogData.id,

  })
  const pageBlocks = await notion.pages.retrieve({
    page_id:blogData.id,
  })
  // pageBlocks.
  blogData = pageBlocks;

    const { title, icon, cover, html } = await NotionPageToHtml.convert(blogData.url,{
      excludeCSS: true,
      bodyContentOnly:true
    });
    console.log(title, icon, cover, html);

  

  return {
    props: {
      blog:html
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
  const paths = data.results.map((blog)=>{
    return {
      params:{
        slug:blog.properties.slug?.rich_text[0]?.plain_text
      }
    }
  })

  return {
    paths: paths,
    fallback: false,
  };
};

export default BlogDetails;
