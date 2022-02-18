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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Oswin Jerome</title>
      </Head>
      <Hero/>
      <About/>
      <RecentWorks/>
      <SkillSet/>
      <Feedback/>
      <Social/>
      <Contact/>
      <footer className="mt-12 h-20 bg-accent">

      </footer>
    </div>
  );
};

export default Home;
