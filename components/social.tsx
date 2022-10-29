import Image from "next/image";
import React from "react";

const Social = () => {
  const skills: any[] = [
    {
      img: "/social/fb.svg",
      url: "https://www.facebook.com/oswinjerome",
    },
    {
      img: "/social/insta.svg",
      url: "https://www.instagram.com/oswin_jerome/",
    },
    {
      img: "/social/linkedin.svg",
      url: "https://www.linkedin.com/in/oswin-jerome-708587154/",
    },
    {
      img: "/social/github.svg",
      url: "https://github.com/oswin-jerome",
    },
  ];
  return (
    <div className="container mx-auto relative pt-28  mb-24 lg:mb-60">
      <p className="absolute text-[15vw] lg:text-[13vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">Lets connect</p>
      <h2 className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-6 lg:mt-10 dark:text-white">Feel free to connect with me and talk tech.</h2>

      <div className="mt-8 lg:mt-20 grid grid-cols-5 xl:grid-cols-7 h-full gap-8 lg:gap-y-20">
        {skills.map((skill, i) => (
          <a href={skill.url} key={i} target="_blank" rel="noopener noreferrer">
            <div className="relative object-contain cursor-pointer">
              <Image height="100%" width="100%" src={skill.img} alt="sd" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
