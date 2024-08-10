import React from 'react'
import donations from '../../assets/images/poor.webp'
import logo from '../../assets/images/logo.png'
import jazzcash_logo from '../../assets/images/Jazzcash.png'
import Meezanbank from '../../assets/images/MeezanBank.png'
import easypaisa_logo from '../../assets/images/easypaisa.png'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom'

export default function Acc_Detail() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center fixed z-40 backdrop-blur-3xl p-2'>

    <div className='w-[90%] flex flex-col md:flex-row rounded-xl gap-4 shadow-2xl'>

      <div className='flex flex-col md:w-[50%] gap-4 border-[2px] border-black rounded-xl bg-white'>
        <div>
        <Link to='/'>  <ImCross className='text-green-500 absolute ml-4 mt-4 rounded-md text-[25px] backdrop-blur-3xl'/></Link>
          <img src={donations} alt="" className='w-full rounded-lg' />
        </div>
        <div className=' px-4'>
          <h1 className='font-bold text-green-500 text-[20px] shadow-green-500 shadow-md inline'>Description Of Donation</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dicta dolor modi ut eos eius assumenda sequi, eveniet et corporis facere. Fugiat laboriosam quod obcaecati deleniti accusamus maxime veniam sunt.</p>
        </div>
      </div>

      <div className='md:w-[50%] h-[100%] border border-black bg-white rounded-xl overflow-auto'>
        <div className='flex justify-center items-center h-[15vh] gap-4 shadow-2xl'>
          <img src={logo} alt="" className='w-8' />
          <p className='font-bold text-[30px] text-green-500'>Account Details</p>
        </div>
        <div className='mt-16 px-8 flex flex-col gap-16'>
        <div className='flex items-center justify-between'>
          <img src={jazzcash_logo} alt="" className='w-24'/>
          <hr className='h-8 border-[2px] border-green-500 bg-green-500 '/>
          <div>
            <p className='text-green-500 font-bold'>+923097119974</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <img src={easypaisa_logo} alt="" className='w-24 h-20'/>
          <hr className='h-8 bg-green-500 border-[2px] border-green-500'/>
          <div>
            <p className='text-green-500 font-bold'>+923097119974</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <img src={Meezanbank} alt="" className='w-24'/>
          <hr className='h-8 bg-green-500 border-[2px] border-green-500'/>
          <div>
            <p className='text-green-500 font-bold'>+923097119974</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
