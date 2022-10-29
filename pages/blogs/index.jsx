import { Client } from "@notionhq/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ data }) => {
  return (
    <div className="min-h-[75vh] container mx-auto relative pt-12  mb-24 lg:mb-60">
      <h1 className="text-accent  text-3xl">Blogs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12">
        {data.results.map((blog) => {
          return (
            <Link passHref={true} href={"/blogs/" + blog.properties.slug?.rich_text[0]?.plain_text} key={blog.id}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-2xl aspect-[16/12] relative overflow-hidden cursor-pointer">
                <div className="bg-gradient-to-b from-transparent via-transparent rounded-lg to-black absolute inset-0 z-10"></div>
                <div style={{ width: "100%", height: "100%", position: "relative" }} className="overflow-hidden z-0">
                  <Image alt="name" layout="fill" objectFit="cover" src={blog.cover?.external?.url}></Image>
                </div>
                <h5 className="absolute z-20 bottom-2 left-0 right-0 text-center font-bold text-white">{blog.properties.title?.title[0]?.plain_text}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: "21966b36d33c436dba5408596ad2da9a",
  });

  // console.log(data.results);

  return {
    props: {
      data,
    },
  };
};

export default Blogs;
