import React, { useState } from 'react'
import issue from '../../assets/images/Issue.png'
import { useEffect } from 'react';
import accident from '../../assets/images/accident.jpg'
import helping_logo from '../../assets/images/halping.jpg'
import introduction_logo from '../../assets/images/introduction.jpeg'
import all_logo from '../../assets/images/All.png'
import citybetterment from '../../assets/images/citybetterment.jpg'
import './NewsCategory.css'

export default function NewsCategory({setCategory,category}) {

    const categories = [
        {
            name: 'شہری مسائل',
            image: issue
        },
        {
            name: 'حادثات',
            image: accident
        },
        {
            name: 'امداد باہمی',
            image: helping_logo
        },
        {
            name: 'شخصیات',
            image: introduction_logo
        },
        {
            name: 'شہری فلاح و بہبود کے کام',
            image: citybetterment
        }
    ]
const new_cat = categories.reverse()

    return (
        <div className='mt-8 '>
            <ul className='flex justify-center gap-12 items-center md:overflow-hidden overflow-x-auto'>
                {new_cat.map((items, i) => {
                    return (
                        <div  className=' flex flex-col items-center cursor-pointer' key={i}>
                            <li className={`${category === items.name ? 'activez font-bold' : 'font-bold'}`} onClick={()=>setCategory(items.name)}>{items.name}</li>
                        </div>
                    )
                })}
                <div className='flex flex-col items-center '>
                    <li onClick={() => setCategory('All')} className={` ${category === 'All' ? 'activez cursor-pointer font-bold' : 'cursor-pointer font-bold'}`} >تمام مواد</li>
                </div>
            </ul>
        </div>
    )
}
