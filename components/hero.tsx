import Image from 'next/image';
import React, { useEffect } from 'react'
import gsap from 'gsap';


const Hero = () => {

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    tl.from('#hero-image', {
      opacity: 0,
      duration:0.5
    },"+=0.5")

    
    tl.from('#hero-text', {
      opacity:0,
      duration: 0.5,
    },'-=0.3' )
    tl.from('#cta', {
      opacity:0,
      duration: 0.5,
    },'-=0.3' )

    tl.from('#soc', {
      opacity:0,
      duration: 0.5,
    },'-=0.3' )
  }, []);

  return (
    <div className="container mx-auto h-[92vh] flex flex-col   lg:grid grid-cols-12 ">
      <div className=" h-full flex flex-col justify-end lg:row-start-1 lg:col-start-7 lg:col-end-12">
        <div style={{ width: '100%', height: '90%', position: 'relative' }}>
          <Image id='hero-image' title="" src="/oswin_bg_rm.png" layout="fill" objectFit="contain" alt="d" />
        </div>
      </div>
      <div className=" mt-8 flex items-center justify-center  lg:col-start-1 lg:col-end-6 2xl:col-end-6 lg:row-start-1">
        <div className="mt-3 flex flex-col items-center lg:items-start pb-24" >
          <h1 className="font-bold text-5xl lg:text-7xl 2xl:text-8xl lg:mt-40 text-center lg:text-left text-textGrey" id='hero-text'>I Write<br /> Quality Code.</h1>
          <button id='cta' className="bg-accent px-10 py-4 rounded-lg soft-btn mt-8 font-bold">Get in touch</button>
          <div id='soc' className="flex gap-12 mt-8">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268M8 19.0268C3 20.5268 3 16.5268 1 16.0268L8 19.0268Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.9997 10.3701C15.1231 11.2023 14.981 12.0523 14.5935 12.7991C14.206 13.5459 13.5929 14.1515 12.8413 14.5297C12.0898 14.908 11.2382 15.0397 10.4075 14.906C9.57683 14.7723 8.80947 14.3801 8.21455 13.7852C7.61962 13.1903 7.22744 12.4229 7.09377 11.5923C6.96011 10.7616 7.09177 9.90995 7.47003 9.15843C7.84829 8.40691 8.45389 7.7938 9.20069 7.4063C9.94749 7.0188 10.7975 6.87665 11.6297 7.00006C12.4786 7.12594 13.2646 7.52152 13.8714 8.12836C14.4782 8.73521 14.8738 9.52113 14.9997 10.3701Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.5 5.5H16.51" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7V7Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 8H1V20H5V8Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="#797979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>




          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero