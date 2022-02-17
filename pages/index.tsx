import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
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
    </div>
  );
};

export default Home;
