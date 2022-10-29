import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto relative pt-28  mb-24 lg:mb-60">
      <p className="absolute text-[20vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">About me</p>
      <h1 className="text-2xl lg:text-5xl font-bold text-gray-700 dark:text-white z-10 -mt-3 lg:mt-20">
        Hi, I’m <span className="text-accent">Oswin Jerome</span>. Nice to meet you.
      </h1>
      <p className="text-gray-600 dark:text-white dark:opacity-75 text-sm lg:w-3/5">
        I&apos;m a Fullstack developer working in Web and Mobile applications. I love writing code and designing beautiful applications. I have a deep knowledge in front-end frameworks (Vue, React,etc...) and backend frameworks (Laravel, NestJS,etc..). I&apos;ve been developing application since
        2015. I&apos;ve constantly been learning and in update with the latest technology trends like Flutter, NestJS, Laravel, Tailwind etc...
        <br />
        <br />
        Apart from developing applications, I&apos;ve designed websites and applications UI&apos;s with Adobe XD and Figma. Helped companies in managing their projects and training their staffs in various technologies.
        <br />
        <br />
        Currently I&apos;m perusing my Master&apos;s degree in Computer Applications.
      </p>
    </div>
  );
};

export default About;
