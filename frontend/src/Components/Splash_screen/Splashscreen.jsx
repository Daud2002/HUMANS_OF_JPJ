import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { ImCross } from "react-icons/im";
import poor_img from '../../assets/images/poor.webp'
import { Link } from 'react-router-dom';



export default function Splashscreen({ splash, setsplash }) {

    splash === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
      

    return (
        <div className={`fixed backdrop-blur-xl w-[100%] h-[100vh] z-40 flex justify-center transition-all`}>
            <div className=' md:w-[60%] w-[90%] backdrop-blur-2xl shadow-2xl shadow-green-500'>
                <div className='flex flex-row  justify-between p-4 items-center border-b-2 border-green-500 shadow-2xl'>
                    <img src={logo} alt="" className='w-16 h-16' />
                    <ImCross className='text-green-700 text-[20px] cursor-pointer' onClick={() => setsplash(false)} />
                </div>
                <div className='flex flex-col mt-32 md:mt-4 w-[100%] h-[100vh] items-center'>
                    <img src={poor_img} alt="" className='rounded-lg w-[90%] h-[30vh] md:h-[50vh]' />
                    <div className='flex justify-around w-[100%] my-8'>
                        <p>Help these poor Now</p>
                        <Link to='/donation' className='border-[2px] border-green-500 text-green-500 px-4 py-2 rounded-md font-medium hover:bg-green-500 hover:text-white hover:-translate-y-0.5'>Donate Now</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
