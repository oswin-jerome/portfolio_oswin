import React from 'react'

const Feedback = () => {
    const recentWorks = [1,2,3,4,5];
    return(
        <div className='container mx-auto relative pt-28  px-4 lg:px-0'>
            <p className='absolute text-[18vw] lg:text-[15vw] font-extrabold top-10 lg:top-0 -z-10 text-accent opacity-20 dark:opacity-30'>Feedbacks</p>
            <h1 className='text-2xl lg:text-5xl font-bold text-gray-700 z-10 -mt-4 lg:mt-12 lg:w-2/4 dark:text-white dark:opacity-75'>
            Look what clients & people I have worked with have to tell.
                </h1>

                <div className='mt-8 lg:mt-16 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                    {
                        recentWorks.map(work => (
                            <div key={work} className="shadow-md hover:shadow-2xl p-8 bg-white rounded-lg aspect-[4/3]">
                                <h1>s</h1>
                            </div>
                        ))
                    }
                </div> 
        </div>
    );
}


export default Feedback;