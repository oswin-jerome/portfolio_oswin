import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import anime from "animejs";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        pin: false, // pin the trigger element while active
        start: "center center", // when the top of the trigger hits the top of the viewport
        end: "bottom -=100", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      },
    });

    timeline.to("#hero-image-container img", {
      translateY: -20,
      duration: 0.5,
    });
    timeline.to(
      "#hero-image-container svg #clip rect",
      {
        scale: 0.0,
        stagger: 0.1,
      },
      "-=0.5"
    );
  }, []);

  const animate = () => {
    gsap.fromTo("#svg-circle", { opacity: 0 }, { opacity: 1 });
    anime({
      targets: "#svg-circle path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 500,
      delay: function (el, i) {
        return i * 250;
      },

      direction: "alternate",
      loop: false,
    });

    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    // tl.to("#svg-circle",{
    //   // drawSVG:0,
    //   duration:0.5,
    //   opacity:1
    // });

    tl.to(
      "#hero-image",
      {
        opacity: 1,
        duration: 0.7,
        scale: 1,
        translateY: 0,
      },
      "+=0.3"
    );

    tl.to(
      "#hero-text",
      {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      },
      "-=0.3"
    );
    tl.to(
      "#description",
      {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      },
      "-=0.3"
    );
    tl.to(
      "#cta",
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=0.3"
    );

    tl.to(
      "#soc",
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=0.3"
    );
    tl.fromTo(
      "#clip rect",
      {
        scale: 0,
        transformOrigin: "center",
      },
      {
        scale: 1,
        stagger: 0.1,
      }
    );
  };

  return (
    <div className="container mx-auto h-[92vh] flex flex-col   lg:grid grid-cols-12 " id="hero-container">
      <div className=" h-full flex flex-col justify-end lg:row-start-1 lg:col-start-7 lg:col-end-12">
        <div id="hero-image-container" className="rounded-fulls overflow-hidden lg:overflow-visible aspect-square h-auto md:-translate-y-10 m-4" style={{ position: "relative", clipPath: "url(#clip)" }}>
          {/* <Image id="hero-image" onLoadingComplete={animate} className="opacity-0 scale-50 translate-y-36 -z-10" priority={true} title="" src="/oswin_bg_rm.png" layout="fill" objectFit="contain" alt="d" /> */}
          <Image
            // style={{
            //   clipPath: "url(#clip)",
            // }}
            id="hero-image2"
            onLoadingComplete={animate}
            className="-z-10 scale-150 md:scale-125 -translate-y-16"
            priority={true}
            title=""
            src="/oswin_t.png"
            layout="fill"
            objectFit="fill"
            alt="d"
          />
          {/* <svg id='svg-circle'  width="100%" height="100%" className='z-50' viewBox="0 0 577 577" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="288.5" cy="288.5" r="284.5" stroke="black" strokeWidth="8" />
</svg> */}
          <svg width="0%" height="0%">
            <defs>
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <rect x="0.352539" y="0.614868" width="0.298013" height="0.385135" rx="0.02" fill="#D9D9D9" />
                <rect x="0.350586" width="0.298013" height="0.385135" rx="0.02" fill="#D9D9D9" />
                <rect x="0.352539" y="0.398651" width="0.298013" height="0.202703" rx="0.02" fill="#D9D9D9" />
                <rect y="0.218918" width="0.334437" height="0.272973" rx="0.02" fill="#D9D9D9" />
                <rect x="0.0947266" y="0.00946045" width="0.240066" height="0.195946" rx="0.02" fill="#D9D9D9" />
                <rect x="0.666992" y="0.305405" width="0.268212" height="0.248649" rx="0.02" fill="#D9D9D9" />
                <rect x="0.668945" y="0.567566" width="0.331126" height="0.27027" rx="0.02" fill="#D9D9D9" />
                <rect x="0.666016" y="0.0945892" width="0.178808" height="0.197297" rx="0.02" fill="#D9D9D9" />
                <rect x="0.666992" y="0.851349" width="0.165563" height="0.135135" rx="0.02" fill="#D9D9D9" />
                <rect x="0.0947266" y="0.50676" width="0.240066" height="0.224324" rx="0.02" fill="#D9D9D9" />
                <rect x="0.0947266" y="0.744598" width="0.240066" height="0.212162" rx="0.02" fill="#D9D9D9" />
              </clipPath>
            </defs>
          </svg>

          {/* <svg id="svg-circle" width="100%" height="100%" className="opacity-0 z-20 -bottom-0  absolute text-accent lg:hidden" viewBox="0 0 585 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M589 0.5C581 159.834 451.834 289 292.5 289C133.166 289 4 159.834 -5 0.5" stroke="currentColor" strokeWidth="8" />
          </svg> */}
        </div>
      </div>
      <div className=" mt-2 md:mt-0 flex items-end lg:pb-12 justify-center  lg:col-start-1 lg:col-end-6 2xl:col-end-6 lg:row-start-1">
        <div className="mt-0 flex flex-col items-center  justify-center lg:items-start  px-4 lg:px-auto">
          <h2 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl  text-center lg:text-left text-textGrey dark:text-white opacity-0 scale-105" id="hero-text">
            <span className="text-6xl lg:text-8xl 2xl:text-8xl text-accent">Developer</span>
            <br />
            <span> with Logical mind & Creative heart</span>
          </h2>
          <p id="description" className="opacity-0 scale-105 text-black/40 text-sm mt-2 text-center lg:text-left">
            Im a Fullstack web & mobile app developer with a wide range of tech skills and experience, Who can design beautify UI and write efficient code, To solve users problems and help them grow their business with tech.{" "}
          </p>
          <a href="#contact" id="cta" className="bg-accent px-10 py-4 rounded-lg soft-btn mt-8 font-bold opacity-0">
            Get in touch
          </a>
          <div id="soc" className="flex gap-12 mt-8 lg:mt-20 dark:text-white opacity-0">
            <a target="__blank" href="https://github.com/oswin-jerome">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268M8 19.0268C3 20.5268 3 16.5268 1 16.0268L8 19.0268Z"
                  stroke="#797979"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a target="__blank" href="https://www.instagram.com/oswin_jerome/">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M14.9997 10.3701C15.1231 11.2023 14.981 12.0523 14.5935 12.7991C14.206 13.5459 13.5929 14.1515 12.8413 14.5297C12.0898 14.908 11.2382 15.0397 10.4075 14.906C9.57683 14.7723 8.80947 14.3801 8.21455 13.7852C7.61962 13.1903 7.22744 12.4229 7.09377 11.5923C6.96011 10.7616 7.09177 9.90995 7.47003 9.15843C7.84829 8.40691 8.45389 7.7938 9.20069 7.4063C9.94749 7.0188 10.7975 6.87665 11.6297 7.00006C12.4786 7.12594 13.2646 7.52152 13.8714 8.12836C14.4782 8.73521 14.8738 9.52113 14.9997 10.3701Z"
                  stroke="#797979"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16.5 5.5H16.51" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a target="__blank" href="https://www.facebook.com/oswin.jerome/">
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a target="__blank" href="https://www.linkedin.com/in/oswin-jerome-708587154/">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7V7Z"
                  stroke="#797979"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M5 8H1V20H5V8Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
