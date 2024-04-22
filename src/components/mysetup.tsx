import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/legacy/image";
import React, { useEffect } from "react";

const MySetup = () => {
  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#setup-container",
  //         pin: false,
  //         start: "start bottom",
  //         end: "+=800 -=100",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });
  //     timeline.to("#setup-img", {
  //       translateY: 50,
  //       duration: 0.5,
  //     });

  //     gsap.fromTo(
  //       "#setup-container",
  //       10,
  //       {
  //         translateX: 0,
  //         rotate: "1deg",
  //         // translateY: 0,
  //         transformOrigin: "center",
  //       },
  //       {
  //         translateX: 20,
  //         rotate: "-2deg",
  //         // translateY: 10,
  //         transformOrigin: "center",

  //         repeatable: true,

  //         repeat: 100,
  //         yoyo: true,
  //       }
  //     );
  //   }, []);

  return (
    <div className="container mx-auto relative pt-28 ">
      <p className="absolute text-[18vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">My Setup</p>
      <p className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-4 lg:mt-12 lg:w-2/4 dark:text-white dark:opacity-75">My Setup</p>

      {/* <div style={{ width: "100%", height: "500px", position: "relative" }}>
        <Image title="" src="/desk_contact.png" layout="fill" objectFit="contain" alt="d" />
      </div> */}
      <div id="setup-container" className="relative bg-white overflow-hidden w-full md:w-[600px] h-auto aspect-[4/3] md:h-[400px] rounded-3xl -rotate-2 border-8 shadow-2xl border-white">
        <div className="h-full w-full rounded-3xl overflow-hidden relative">
          <Image id="setup-img" title="" className="rounded-3xl m-2  scale-125 tran " src="/setup.jpg" layout="fill" objectFit="cover" alt="d" />
        </div>
      </div>
    </div>
  );
};

export default MySetup;
