import React from 'react'
import logo from '/logo.png'

export default function Navbar() {
    return (
        <nav className='py-2 flex justify-around items-center border border-b-2 shadow-2xl fixed w-[100%] top-0 bg-white z-10'>
            <div>
                <img src={logo} alt="" className='w-16' />
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-bold text-[30px] text-[#71f371]'>Admin Panel</span> 
                <span className='text-[10px] font-bold text-[yellow] shadow-lg'>Humans Of Jalal Pur Jattan</span>
            </div>
            <div>
                <button className='border-[3px] border-[#71f371] font-bold text-[#71f371] rounded-md py-1.5 px-4 hover:animate-none animate-pulse hover:bg-[#71f371] hover:text-white'>Sign Up</button>
            </div>
        </nav>
    )
}
