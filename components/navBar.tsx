import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const NavBar = ()=>{
    const router = useRouter();

    const [isOpen,setIsOpen] =useState(false);

    useEffect(()=>{
        const listen = ()=>{
            console.log("Click!!!")
            if(isOpen){
                setIsOpen(false);
            }
        }
        window.addEventListener("click",listen);
        return ()=>{
            console.log("Unmount");
            window.removeEventListener("click",listen);
            
        }
    },[isOpen])



    
    return(
        <div className='container mx-auto py-4 flex justify-between px-4 md:px-0 flex-row-reverse md:flex-row items-center h-[8vh]'>
            <p className='text-xl font-bold text-accent'>Oswin Jerome</p>

           <button onClick={(e)=>{
               e.preventDefault();
                setIsOpen(true)
            }}>
           <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" className='md:hidden' xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H18" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
           </button>

            <ul className='gap-11 hidden md:flex dark:text-white c'>
                <li>
                    <Link href="/">
                    <a className='text-accent' >Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                    <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs">
                    <a>Blogs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/works">
                    <a>Projects</a>
                    </Link>
                </li>
            </ul>

            {<div  className={(isOpen?'translate-x-0 transition-all':'-translate-x-full transition-all')+'  fixed top-0 bottom-0 z-50 left-0 w-[75vw]'+
             ' bg-dark-background shadow-2xl '}>
            <ul onClick={
                ()=>setIsOpen(false)
            } className='dark:text-white c flex flex-col p-6 gap-10 pt-28'>
                <li>
                    <Link passHref href="/">
                    <p className='text-accent' >Home</p>
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
                    <Link passHref href="/works">
                    <p>Projects</p>
                    </Link>
                </li>
            </ul>
            </div>}
        </div>
    );
}

export default NavBar;