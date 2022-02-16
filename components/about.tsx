import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto relative pt-28 px-4 lg:px-0 mb-24 lg:mb-60' >
            <p className='absolute text-[20vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20'>About me</p>
            <h1 className='text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-3 lg:mt-20'>Hi, I’m <span className='text-accent'>Oswin Jerome</span>. Nice to meet you.</h1>
            <p className='text-gray-600 text-sm lg:w-3/5'>Welcome to Google Business Profile, a free tool that helps you turn searchers on Google into loyal customers. Your account is a one-stop shop where you can manage your Business Profile to attract new customers and engage directly with existing ones.</p>
        </div>
    );
}


export default About;