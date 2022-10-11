import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Contact from "../components/contact";
import Feedback from "../components/feedback";
import Hero from "../components/hero";
import RecentWorks from "../components/recentWorks";
import SkillSet from "../components/skillSet";
import Social from "../components/social";
import styles from "../styles/Home.module.css";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { useEffect } from "react";
import SeoHead from "../components/seoHead";
import NavBar from "../components/navBar";
import Served from "../components/served";
import MySetup from "../components/mysetup";
const Home: NextPage = ({ posts }: any) => {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div>
      <SeoHead
        image="/oswin.png"
        url="https://oswinjerome.in/"
        title="Oswin Jerome"
        description="I'm a Fullstack web & mobile app developer with a wide range of tech skills and experience, Who can design beautify UI and write efficient code, To solve users problems and help them grow their business with tech."
      />
      <Hero />
      <Served />
      <About />
      <RecentWorks posts={posts} />
      <SkillSet />
      {/* <Feedback/> */}
      {/* <Social /> */}
      <MySetup />
      <Contact />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("md/works"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("md/works", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  console.log(posts);
  return {
    props: {
      posts: posts.splice(0, 4),
    },
  };
}
