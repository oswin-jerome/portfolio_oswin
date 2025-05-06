import Image from "next/image";

const Contact = () => {
  const links: any[] = [
    {
      img: "/social/fb.svg",
      url: "https://www.facebook.com/oswinjerome",
      handle: "@oswin.jerome",
    },
    {
      img: "/social/insta.svg",
      url: "https://www.instagram.com/oswin_jerome/",
      handle: "@oswin_jerome",
    },
    {
      img: "/social/linkedin.svg",
      url: "https://www.linkedin.com/in/oswin-jerome/",
      handle: "@oswin-jerome",
    },
    {
      img: "/social/github.svg",
      url: "https://github.com/oswin-jerome",
      handle: "@oswin_jerome",
    },
  ];
  return (
    <div id="contact" className="container mx-auto relative pt-28  ">
      <p className="absolute text-[16vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">Contact Me</p>
      <h2 className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-4 lg:mt-12 lg:w-2/4 dark:text-white">Share your Queries & Feedback.</h2>

      <div className="grid grid-cols-2  mt-8 lg:mt-28">
        <div className="col-span-2 lg:col-span-1 mt-10">
          <form action="https://formquack.oswinjerome.in/api/forms/22e84585-0c4b-413b-a165-5055bafb6c63" method="POST" className="p-0 lg:px-5">
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
              <textarea name="message" className="p-2 bg-transparent border-2 border-gray-300 rounded-md dark:text-white dark:opacity-75" id="email"></textarea>
            </div>

            <div className="flex justify-end">
              <button className="soft-btn px-16 py-3 rounded-md mt-8 bg-accent">Send</button>
            </div>
          </form>
        </div>
        <div className=" col-span-2 lg:col-span-1 lg:pl-44 pt-32 lg:pt-0 relative">
          <h4 className="font-bold mb-10 lg:mb-20 text-3xl text-accent">Other ways to contact</h4>
          <Image className="absolute rotate-90 top-0 left-[20%] lg:rotate-0 lg:left-10 lg:top-[50%]" src="/arrow.svg" alt="arrow" width={100} height={50} />

          <div className="grid grid-cols-2 lg:flex lg:flex-col lg:justify-center gap-8 ">
            {links.map((skill, i) => (
              <a data-track-click={"contact_" + skill.handle} href={skill.url} key={i} target="_blank" rel="noopener noreferrer">
                <div className="relative object-contain cursor-pointer flex gap-5 items-center">
                  <Image width={40} height={40} src={skill.img} alt="sd" />
                  <p className="text-accent">{skill.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
