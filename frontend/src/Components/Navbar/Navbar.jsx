import React from 'react'
import humans_logo from '../../assets/images/logo.png'
import { FaSquareFacebook, FaBars, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const nav_items = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'News',
            href: '/news'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'About Us',
            href: '/about'
        },
        {
            name: 'Contact Us',
            href: '/contact'
        }
    ]

    const [navStatus, setnavstatus] = useState(false);

    useEffect(() => {
        if (navStatus) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [navStatus]);


    return (
        <>
            <div className='flex justify-around items-center sticky w-[100%] top-0 py-2 z-10 border-b-2 border-green-400 backdrop-blur-md shadow-xl'>
                <div className='border rounded-full'>
                    <a href="/"><img src={humans_logo} alt="Logo" className='w-14' /></a>
                </div>
                <div>
                    <ul className='md:flex gap-10 text-green-600 font-bold hidden'>
                        {nav_items.map((items, i) => {
                            return (
                                <NavLink to={items.href} key={i}>
                                <li className='cursor-pointer'>{items.name}</li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
                <div className='hidden md:flex gap-4 items-center '>
                    <a href="https://www.facebook.com/humansofjpj" target='_blank'><FaSquareFacebook className='w-8 h-8 text-green-600 cursor-pointer' /></a>
                    <Link to='/donation' className='border-[2px] border-green-500 px-2 py-2 font-bold text-green-500 rounded-md animate-pulse hover:bg-green-500 hover:text-white hover:animate-none'>Donate Now</Link>
                </div>

                <div className='md:hidden block'>
                    {
                        !navStatus ?
                            <FaBars className='w-8 h-8 text-green-700' onClick={() => setnavstatus(true)} />
                            :
                            <div className='fixed bg-green-600 z-20 inset-0 flex justify-between flex-col w-[100%] h-[100vh]'>
                                <div>
                                    <a href="/" className='absolute top-4 left-4'><img src={humans_logo} alt="Logo" className='w-14' /></a>
                                    <IoClose onClick={() => setnavstatus(false)} className='text-green-700 w-8 h-8 absolute top-4 right-12' />
                                </div>
                                <div className=' w-full h-full bg-green-200 flex flex-col items-center justify-center gap-8 '>
                                    {
                                        nav_items.map((items, i) => {
                                            return (
                                                <div >
                                                    <div>
                                                        <NavLink to={items.href} className=' list-none text-[30px] font-bold shadow-2xl rounded-lg px-4 py-2 hover:text-green-600 hover:cursor-pointer hover:-translate-y-1' onClick={()=>setnavstatus(false)}>{items.name}</NavLink>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className='flex flex-row justify-center gap-8 py-2'>
                                    <a href="https://www.facebook.com/humansofjpj"><FaSquareFacebook  className='w-12 h-12 text-[blue]'/></a>
                                    <a href="https://youtube.com/@humansofjalalpurjattan73"><FaYoutube  className='w-12 h-12 text-red-700'/></a>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
