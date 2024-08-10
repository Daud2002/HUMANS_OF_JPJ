import React, { useEffect, useState } from 'react'
import NewsCards from '../NewsCards.jsx/NewsCards'
import NewsCategory from '../NewsCategory/NewsCategory'

export default function News_Secion({ url }) {



    const [category, setCategory] = useState('All');
    useEffect(() => {

        console.log(url)
    }, [])

    return (
        <div className=''>
            <div className='font-bold text-[30px] text-green-500 flex flex-col items-center justify-center mb-8'>
                News Section
            </div>
            <hr className='mx-16 my-4' />
            <div className='w-[100%]'>
                <div className='w-[100%]'>
                    <NewsCategory setCategory={setCategory} category={category} />
                </div>
                <div className='md:w-[70%] w-[100%] flex justify-center'>
                    <NewsCards category={category} url={url} />
                </div>
            </div>
        </div>
    )
}
