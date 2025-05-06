"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { analytics } from "open-analytics-sdk";
const NavBar = () => {
  const pathname = usePathname();
  useEffect(() => {
    analytics.initTracker({
      apiKey: "691c82de-bb74-47e3-baef-cd79670d0d97",
      endpoint: "https://oaapi.oswinjerome.in",
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.remove("hide-me");
          element.target.classList.add("show-me");
          // console.log("intersecting ");
        } else {
          element.target.classList.add("hide-me");
          element.target.classList.remove("show-me");
        }
      });
    });
    const elements = document.querySelectorAll("[data-animate-on-scroll]");
    elements.forEach((element) => {
      element.classList.add("hide-me");
      element.classList.remove("show-me");
      // observer.observe(element);
    });
  }, []);

  const navClassName = (route: string) => {
    if (route == pathname) {
      return "text-accent";
    }
    if (route == "/projects" && pathname?.startsWith("/projects")) {
      return "text-accent";
    }

    if (route == "/blogs" && pathname?.startsWith("/blogs")) {
      return "text-accent";
    }

    return "";
  };

  return (
    <div className="container  mx-auto py-4 flex justify-between px-4 lg:px-8  flex-row-reverse md:flex-row items-center h-[8vh]">
      <Link href="/" passHref>
        <p className="text-xl font-bold text-accent cursor-pointer">Oswin Jerome</p>
      </Link>

      <button
        name="Menu"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
          const listen = () => {
            // console.log("Click!!!");
            if (isOpen) {
              setIsOpen(false);
              window.removeEventListener("click", listen);
            }
          };

          window.addEventListener("click", listen);
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:hidden" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H18" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 18H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul className="gap-11 hidden md:flex dark:text-white c">
        <li>
          <Link className={navClassName("/")} passHref href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/#about" data-track-click="about">
            About
          </Link>
        </li>
        {/* <li>
          <Link href="/blogs" className={navClassName("/blogs")}>
            <>Blogs</>
          </Link>
        </li> */}
        <li>
          <Link href="/projects" data-track-click="projects" className={navClassName("/projects")}>
            <>Projects</>
          </Link>
        </li>
        <li>
          <Link href="/blogs" data-track-click="blogs" className={navClassName("/blogs")}>
            <>Blogs</>
          </Link>
        </li>
      </ul>

      {
        <div className={(isOpen ? "translate-x-0 transition-all" : "-translate-x-full transition-all") + "  fixed top-0 bottom-0 z-50 left-0 w-[75vw]" + " bg-light-accentLight dark:before:bg-dark-background shadow-2xl "}>
          <ul onClick={() => setIsOpen(false)} className="dark:text-whites c flex flex-col p-6 gap-10 pt-28">
            <li>
              <Link passHref href="/">
                <p className="text-accent">Home</p>
              </Link>
            </li>
            <li>
              <Link passHref href="#about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link passHref href="/blogs">
                <p>Blogs</p>
              </Link>
            </li>
            <li>
              <Link passHref href="/projects">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link passHref href="/blogs">
                <p>Blogs</p>
              </Link>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

export default NavBar;
