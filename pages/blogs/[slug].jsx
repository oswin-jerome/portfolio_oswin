import { render } from "@9gustin/react-notion-render";
import { Client } from "@notionhq/client";
import Head from "next/head";
import React from "react";
import { NotionRenderer } from "react-notion";
const BlogDetails = ({ blog, title, cover }) => {
  return (
    <div className="container mx-auto relative pt-12 dark:text-white min-h-[45vh] mb-24 lg:mb-60 ">
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content="These are the blog descriptions" />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.oswinjerome.in/blogs/tools-I-use"/> */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="These are the blog descriptions" />
        <meta property="og:image" content={cover} />

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://www.oswinjerome.in/blogs/tools-I-use"/> */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content="These are the blog descriptions" />
        <meta property="twitter:image" content={cover}></meta>
      </Head>
      <div className="prose  dark:text-white/60 prose-strong:text-white/60 prose-headings:text-accent prose-h1:text-accent" dangerouslySetInnerHTML={{ __html: blog }}></div>
      {/* <p> {blog}</p> */}
      {/* <Render blocks={blog.results} useStyles /> */}
      {/* {render([blog], true)} */}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const NotionPageToHtml = require("notion-page-to-html");

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "21966b36d33c436dba5408596ad2da9a",
  });
  let blogData = "Hello";
  let description = "";
  await data.results.forEach(async (blog) => {
    if (blog.properties.slug?.rich_text[0]?.plain_text === slug) {
      blogData = blog;
    }
  });

  // const abc = await notion.blocks.children.list({
  //   block_id: blogData.id,

  // })
  const pageBlocks = await notion.pages.retrieve({
    page_id: blogData.id,
  });
  // pageBlocks.
  blogData = pageBlocks;

  const { title, icon, cover, html } = await NotionPageToHtml.convert(blogData.url, {
    excludeCSS: true,
    bodyContentOnly: true,
  });

  // console.log("Debug", title);

  return {
    props: {
      blog: html,
      title: title,
      cover: cover,
    },
  };
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "21966b36d33c436dba5408596ad2da9a",
  });

  //   console.log(data.results);
  const paths = data.results.map((blog) => {
    return {
      params: {
        slug: blog.properties.slug?.rich_text[0]?.plain_text,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default BlogDetails;
