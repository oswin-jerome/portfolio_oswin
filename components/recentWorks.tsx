import React, { useEffect } from "react";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
const RecentWorks = ({posts} :any) => {

    useEffect(() => {
        console.log(posts)
        
    },[posts])

  const recentWorks = [1, 2, 3, 4, 5];
  return (
    <div className="container mx-auto relative pt-28  px-4 lg:px-0">
      <p className="absolute text-[12vw] lg:text-[8vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20">My Recent Works</p>
      <h1 className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-6 lg:mt-0 lg:w-2/4">Here are a few design projects I have worked on recently.</h1>

      <div className="mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {posts.map((work:any) => (
          <Link href={"/works/"+work.slug} passHref  key={work}>
          <div className="shadow-md hover:shadow-2xl  bg-white rounded-lg aspect-[4/3] cursor-pointer relative">
            <div className="bg-gradient-to-b from-transparent via-transparent rounded-lg to-white absolute inset-0 z-10">

            </div>
            <h5 className="absolute z-20 bottom-2 left-0 right-0 text-center font-bold">{work.frontmatter.title}</h5>
            <div style={{ width: '100%', height: '100%', position: 'relative' }} className="rounded-lg">
              <Image id='hero-image' title=""  src={work.frontmatter.cover_image}  className="rounded-lg" layout="fill" objectFit="cover" alt="d" />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default RecentWorks;



