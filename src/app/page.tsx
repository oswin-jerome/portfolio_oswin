import About from "@/components/about";
import Contact from "@/components/contact";
import Feedback from "@/components/feedback";
import Hero from "@/components/hero";
import MySetup from "@/components/mysetup";
import RecentWorks from "@/components/recentWorks";
import SeoHead from "@/components/seoHead";
import Served from "@/components/served";
import SkillSet from "@/components/skillSet";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import path from "path";

function getData() {
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
  posts.sort((a, b) => {
    if (a.frontmatter.id > b.frontmatter.id) {
      return -1;
    }
    return 1;
  });
  return {
    props: {
      posts: posts.splice(0, 4),
    },
  };
}

export const metadata: Metadata = {
  title: "Oswin Jerome",
  description: "I'm a Fullstack web & mobile app developer with a wide range of tech skills and experience, Who can design beautify UI and write efficient code, To solve users problems and help them grow their business with tech.",
  openGraph: {
    images: ["/oswin.jpg"],
    type: "website",
    url: "https://oswinjerome.in",
    siteName: "Oswin Jerome",
  },

  keywords: ["Oswin Jerome", "Oswin", "Jerome", "Flutter", "Laravel", "Php", "JavaScript"],
};

const HomePage = async () => {
  const posts = getData().props.posts;
  return (
    <div>
      <SeoHead
        image="/oswin.jpg"
        url="https://oswinjerome.in/"
        title="Oswin Jerome"
        description="I'm a Fullstack web & mobile app developer with a wide range of tech skills and experience, Who can design beautify UI and write efficient code, To solve users problems and help them grow their business with tech."
      />
      <Hero />
      <Served />
      <About />
      <RecentWorks posts={posts} />
      <SkillSet />
      {/* <Social /> */}
      <MySetup />
      <Feedback />
      <Contact />
    </div>
  );
};

export default HomePage;
