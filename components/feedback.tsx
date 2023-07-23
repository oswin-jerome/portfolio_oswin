import React from "react";

const Feedback = () => {
  const recentWorks = [
    {
      id: 1,
      name: "Jebin John - CEO, Enrix",
      message:
        "Oswin is an extremely dedicated software developer who always strived to deliver high quality code. He has a great eye for detail and was always willing to go the extra mile to ensure that our projects were successful. I would highly recommend Oswin to anyone looking for a talented and reliable software developer.",
    },
    {
      id: 2,
      name: "Kingston - CEO, Space Digital Media",
      message: "I would definitely recommend Oswin to anyone looking for a new website. They are very talented and have given me great suggestions on how to make my website better!",
    },
    // {
    //   id: 3,
    //   name: "Thomas - CEO, Tihalt",
    //   message:
    //     "I have worked with Jerome for couple of years now and have found him to be an excellent resource. He is extremely knowledgeable and always willing to help train our staff in new techniques and review their work. He has also been very helpful in dealing with technical difficulties, providing tech suggestions when needed and in setting up our server environments.",
    // },
  ];
  //
  return (
    <div className="container mx-auto relative pt-28  ">
      <p className="absolute text-[18vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30">Feedbacks</p>
      <p className="text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-4 lg:mt-12 lg:w-[70%] dark:text-white dark:opacity-75">Look what clients & people I have worked with have to tell.</p>

      <div className="mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {recentWorks.map((work) => (
          <div key={work.id} className="shadow-md hover:shadow-2xl p-8 bg-white rounded-lg aspect-[4/3] flex flex-col justify-between">
            <p className="text-center text-gray-500 italic">&quot; {work.message} &quot;</p>
            <p className="text-center font-bold">{work.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
