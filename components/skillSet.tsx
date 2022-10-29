import Image from "next/image";
import React from "react";

const SkillSet = () => {
  const skills: string[] = ["/tech/flutter.svg", "/tech/react.svg", "/tech/nodejs-icon.svg", "/tech/tailwind.png", "/tech/vue-9.svg", "/tech/nextjs.png", "/tech/laravel.png", "/tech/firebase.svg"];
  return (
    <div className="container mx-auto relative pt-28  mb-24 lg:mb-60">
      <p className="absolute text-[15vw] lg:text-[13vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">My Skill Set</p>
      <h2 className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-6 lg:mt-20 dark:text-white ">
        These are some of the tools &<br /> Technologies I work with.
      </h2>

      <div className="mt-8 lg:mt-20 grid grid-cols-5 xl:grid-cols-7 h-full gap-8 lg:gap-y-20">
        {skills.map((skill, i) => (
          <div className="relative object-contain " key={i}>
            <Image height="100%" width="100%" src={skill} alt="sd" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
