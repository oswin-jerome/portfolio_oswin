import React from 'react'

const About = () => {
    return (
        <div id='about' className='container mx-auto relative pt-28 px-4 lg:px-0 mb-24 lg:mb-60' >
            <p className='absolute text-[20vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20'>About me</p>
            <h1 className='text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-3 lg:mt-20'>Hi, I’m <span className='text-accent'>Oswin Jerome</span>. Nice to meet you.</h1>
            <p className='text-gray-600 text-sm lg:w-3/5'>I have 5 years of experience in programing. Im specialized in Websites, Web Apps, Android Apps and lot more. Im always eager to learn new technologies and I have a deep knowledge in latest technologies and frameworks</p>
        </div>
    );
}


export default About;