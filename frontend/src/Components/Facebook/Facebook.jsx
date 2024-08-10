import React from 'react'
import { FaSquareFacebook } from 'react-icons/fa6'

export default function Facebook() {
    return (
        <div className='w-[100%] h-[50vh] flex flex-col items-center border-[2px] border-t-[green] justify-evenly'>
            <div className='font-bold text-[30px] text-green-500'>
                For more information
            </div>
            <div className='bg-[black] text-white py-2 px-4 rounded-xl w-[15%] shadow-2xl transition hover:scale-105 duration-150 cursor-pointer'>
                <a href="https://www.facebook.com/humansofjpj" target='_blank' className='flex flex-row items-center justify-between font-bold w-[100%] h-full'>
                    <div>
                        <FaSquareFacebook className=' text-green-500 bg-white rounded-lg w-10 h-10' />
                    </div>
                    
                    <div className='flex flex-col items-center'>
                        <span className='text-[13px] italic font-medium'>
                            Follow us on
                        </span>
                        <span className='text-[17px] font-bold'>
                            Facebook
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}
