import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto relative pt-28  px-4 lg:px-0">
      <p className="absolute text-[16vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">Contact Me</p>
      <h1 className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-4 lg:mt-12 lg:w-2/4 dark:text-white">Share your Queries & Feedback.</h1>

      <div className="grid grid-cols-2  mt-8 lg:mt-28">
        <div className="  justify-center items-start  hidden lg:flex ">
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <Image title="" src="/chat.png" layout="fill" objectFit="contain" alt="d" />
        </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <form action="https://formspree.io/f/xzborajg" method="POST" className="p-0 lg:px-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium dark:text-white dark:opacity-75">
                Name
              </label>
              <input required name="name" type="text" className="p-2 bg-transparent border-2 border-gray-300 rounded-md dark:text-white dark:opacity-75" id="name" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="mb-1 font-medium dark:text-white dark:opacity-75">
                Email
              </label>
              <input name="email" type="email" className="p-2 bg-transparent border-2 border-gray-300 rounded-md dark:text-white dark:opacity-75" id="email" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="mb-1 font-medium dark:text-white dark:opacity-75">
                Message
              </label>
              <textarea name="message" className="p-2 bg-transparent border-2 border-gray-300 rounded-md dark:text-white dark:opacity-75" id="email" ></textarea>
            </div>

            <div className="flex justify-end">
            <button className="soft-btn px-16 py-3 rounded-md mt-8 bg-accent">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
