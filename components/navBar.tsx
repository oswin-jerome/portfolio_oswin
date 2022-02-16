import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const NavBar = ()=>{
    const router = useRouter();
    console.log(router);
    return(
        <div className='container mx-auto py-4 flex justify-between px-4 md:px-0 flex-row-reverse md:flex-row items-center h-[8vh]'>
            <h1 className='text-xl font-bold text-accent'>Oswin Jerome</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='md:hidden' xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H18" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <ul className='gap-11 hidden md:flex'>
                <li>
                    <Link href="/">
                    <a className='text-accent' >Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                    <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                    <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                    <a>Projects</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;