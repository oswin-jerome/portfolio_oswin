import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Hero/>
    </div>
  );
};

export default Home;
