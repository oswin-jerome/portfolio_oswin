import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Hero from "../components/hero";
import RecentWorks from "../components/recentWorks";
import SkillSet from "../components/skillSet";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <RecentWorks/>
      <SkillSet/>
    </div>
  );
};

export default Home;
