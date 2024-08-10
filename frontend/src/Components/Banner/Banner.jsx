import React from 'react'
import banner from '../../assets/images/Banner.png'


export default function Banner() {
    return (
        <>

            <div className='flex justify-center'>
                <div className='-z-10 md:mt-0 md:h-[90vh] flex items-center'>
                    <img src={banner} alt="Banner" className='relative md:w-[900px] md:h-[80vh] border rounded-lg opacity-40' />
                    <div className='absolute z-10 flex flex-col items-center md:w-[900px]'>
                        <h1 className='font-bold text-[30px]'>Welcome to Humans Of Jalal Pur Jattan</h1>
                        <p>We are super excited to have you on board</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
