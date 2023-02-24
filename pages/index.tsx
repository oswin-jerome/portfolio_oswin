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
import { Fragment, useEffect } from "react";
import SeoHead from "../components/seoHead";
import NavBar from "../components/navBar";
import Served from "../components/served";
import MySetup from "../components/mysetup";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Home: NextPage = ({ posts }: any) => {
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(posts);

    setTimeout(() => {
      setIsOpen(true);
    }, 5000);
  }, [posts]);

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full h-[80vh] flex flex-col items-center justify-between transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2  flex justify-center items-center flex-col">
                    <Image src="/bday.svg" alt="bday" className="" height={200} width={200} />
                    <h5 className="text-4xl text-center font-bold text-opacity-70 mt-10">Hey hey It&apos;s Birthday</h5>
                    <p className="text-sm text-gray-500 text-center mt-3">Yethuku poranthom nu therialla....poranthutom vanthu thanae aaganum.... edhu vanthalum pathukalam 🔥🔥🔥</p>
                  </div>

                  <div className="mt-4 flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <SeoHead
        image="/oswin.jpg"
        url="https://www.oswinjerome.in/"
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
