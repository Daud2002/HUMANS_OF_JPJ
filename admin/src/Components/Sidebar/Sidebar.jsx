import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaListUl } from "react-icons/fa6";
import AddPost from '../Add Post/AddPost';
import Listpost from '../ListPost/Listpost';
import { MdOutlineAttachMoney } from "react-icons/md";
import Donation from '../Donation/Donation';
import DonationStatus from '../Donation_Status/DonationStatus';
import { SiOnlyoffice } from "react-icons/si";


export default function Sidebar({setpage}) {
    return (
        <div className='flex flex-col gap-10 fixed w-[25%] h-full border-r-[2px] border-r-green-300'>
            <div className='w-[100%] flex justify-center font-bold text-[30px] text-[#71f371] underline mt-10'>
                Admin tools
            </div>
            <div className='flex flex-col items-end gap-4'>
                <div className=' cursor-pointer flex items-center justify-between px-4 border-[2px] border-[#71f371] border-r-0 w-[70%] py-1' onClick={()=>setpage(<AddPost />)}>
                    <span><IoMdAdd className='w-8 h-8 text-[#71f371]' /></span>
                    <span className='text-[#71f371] font-bold hidden md:block'>Add Post</span>
                </div>
                <div className=' cursor-pointer flex items-center justify-between px-4 border-[2px] border-[#71f371] border-r-0 w-[70%] py-2' onClick={()=>setpage(<Listpost />)}>
                    <span><FaListUl className='w-6 h-6 text-[#71f371]' /></span>
                    <span className='text-[#71f371] font-bold hidden md:block'>List Post</span>
                </div>
                <div className=' cursor-pointer flex items-center justify-between px-4 border-[2px] border-[#71f371] border-r-0 w-[70%] py-2' onClick={()=>setpage(<DonationStatus />)}>
                    <span><SiOnlyoffice className='w-6 h-6 text-[#71f371]' /></span>
                    <span className='text-[#71f371] font-bold hidden md:block'>Donation Status</span>
                </div>
                <div className=' cursor-pointer flex items-center justify-between px-4 border-[2px] border-[#71f371] border-r-0 w-[70%] py-2' onClick={()=>setpage(<Donation />)}>
                    <span><MdOutlineAttachMoney className='w-6 h-6 text-[#71f371]' /></span>
                    <span className='text-[#71f371] font-bold hidden md:block'>Donation Listing</span>
                </div>
                
            </div>
        </div>
    )
}
