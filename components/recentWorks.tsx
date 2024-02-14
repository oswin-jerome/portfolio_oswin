import React, { useEffect } from "react";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/legacy/image";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
const RecentWorks = ({ posts }: any) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-container",
        pin: false, // pin the trigger element while active
        start: "+=70 center", // when the top of the trigger hits the top of the viewport
        end: "bottom -=100", // end after scrolling 500px beyond the start
        scrub: false, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      },
    });

    timeline.to(
      ".work-card",
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 0.5,
      },
      "+=0.3"
    );
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const recentWorks = [1, 2, 3, 4, 5];
  return (
    <div className="work-container container mx-auto relative pt-28  ">
      <p className="absolute text-[12vw] lg:text-[8vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">My Recent Works</p>
      <h2 data-animate-on-scroll className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-6 lg:mt-0 lg:w-[70%] dark:text-white ">
        Here are a few projects I have worked on recently.
      </h2>

      <div className="mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {posts.map((work: any, c: any) => (
          <Link href={"/works/" + work.slug} passHref key={c}>
            <div className="work-card shadow-md hover:shadow-2xl opacity-0 scale-50  bg-white rounded-lg aspect-[4/3] cursor-pointer relative">
              <div className="bg-gradient-to-b from-transparent via-transparent rounded-lg to-white absolute inset-0 z-10"></div>
              <h5 className="absolute z-20 bottom-2 left-0 right-0 text-center font-bold">{work.frontmatter.title}</h5>
              <div style={{ width: "100%", height: "100%", position: "relative" }} className="rounded-lg">
                <Image title="" src={work.frontmatter.cover_image} className="rounded-lg" layout="fill" objectFit="cover" alt="d" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
