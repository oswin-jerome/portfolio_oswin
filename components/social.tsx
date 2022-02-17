import Image from 'next/image';
import React from 'react'

const Social = () => {
    const skills:string[] = [
        '/social/fb.svg',
        '/social/github.svg',
        '/social/insta.svg',
        '/social/linkedin.svg',
    ];
    return (
        <div className='container mx-auto relative pt-28 px-4 lg:px-0 mb-24 lg:mb-60' >
            <p className='absolute text-[15vw] lg:text-[13vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20'>Lets connect</p>
            <h1 className='text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-6 lg:mt-10'>
            Feel free to connect with me and talk tech.
                </h1>

                <div className="mt-8 lg:mt-20 grid grid-cols-5 xl:grid-cols-7 h-full gap-8 lg:gap-y-20" >
                    {
                        skills.map((skill,i) => (
                            <div className='relative object-contain ' key={i}>
                                <Image height="100%" width="100%" src={skill} alt="sd" />
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Social;