import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaSquareWhatsapp } from "react-icons/fa6";
import daud from '../../assets/images/daud.jpg';
import zeeshan from '../../assets/images/zeeshan.jpg';
import amir from '../../assets/images/amir.jpg';
import zareef from '../../assets/images/zareef.jpg';
import ahmad from '../../assets/images/Ahmad.jpg';
import abubakar from '../../assets/images/abubakar.jpg';
import adan from '../../assets/images/adan.jpg';
import dawood from '../../assets/images/dawood.jpg';
import hassan from '../../assets/images/hassan.jpg';
import shah from '../../assets/images/shah.jpg';
import './About.css'

export default function About() {
  const members = [
    { name: 'Prof. AbuBakar', image: abubakar },
    { name: 'Adan Mir', image: adan },
    { name: 'Dawood Riaz', image: dawood },
    { name: 'Prof. Hassan', image: hassan },
    { name: 'Syed Mohsin Shah', image: shah },
    { name: 'Zareef Sheikh', image: zareef },
    { name: 'Mushahid Abbas', image: zeeshan },
    { name: 'Yasir Iftikhar', image: zeeshan },
    { name: 'Sajid', image: zeeshan },
    { name: 'Abdullah Riaz', image: zeeshan },
  ];

  const carded_members = [
    { name: 'Daud Mir', image: daud, des: 'Volunteer' },
    { name: 'Zeeshan', image: zeeshan, des: 'Volunteer' },
    { name: 'Amir Sarwer', image: amir, des: 'Admin of Deep-deep jallao' },
    { name: 'Zahid Sarfraz', image: zeeshan, des: 'Financial Admin' },
    { name: 'Ahmad Warraich', image: ahmad, des: 'News Reporter' },
  ];

  const message = "Hi I would like to give some fund";
  const phoneNumber = "+923456922422";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div className='flex justify-center items-center w-full h-[60vh] bg-green-500 font-bold text-5xl md:text-7xl text-white underline mb-8 mt-4'>
        About Us
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-8 mb-4 px-4'>
        <div className='w-full md:w-3/5 shadow-2xl rounded-lg border border-green-500 flex flex-col items-center px-4 py-4 gap-8 '>
          <h1 className='font-bold text-xl md:text-2xl text-green-500 underline'>
            Our Mission
          </h1>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam neque numquam laboriosam illum, quaerat assumenda voluptate esse nihil quidem corrupti omnis iusto cum, expedita molestiae corporis, dolorem vel iste necessitatibus!
          </p>
        </div>
        <div className='w-full md:w-3/5 shadow-2xl rounded-lg border border-green-500 flex flex-col items-center px-4 py-4 gap-8 '>
          <h1 className='font-bold text-xl md:text-2xl text-green-500 underline'>
            History Of Humans Of Jalal Pur Jattan
          </h1>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam neque numquam laboriosam illum, quaerat assumenda voluptate esse nihil quidem corrupti omnis iusto cum, expedita molestiae corporis, dolorem vel iste necessitatibus!
          </p>
        </div>
      </div>
      <hr className='border-green-500 my-8' />
      <div>
        <div className='flex flex-col items-center mb-12 gap-2'>
          <h1 className='font-bold text-3xl md:text-4xl'>
            Social Workers
          </h1>
          <p className='text-xs'>Humans Of Jalal Pur Jattan</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='border-2 border-green-500 rounded-lg flex flex-col justify-center items-center py-4 px-4 md:px-14 shadow-2xl'>
            <img src={logo} alt="Admin Logo" className='w-36 md:w-52' />
            <hr className='border border-green-500 w-full mt-4' />
            <div className='flex flex-row justify-between items-center mt-2 w-full'>
              <div className='font-bold text-sm md:text-base text-green-500 underline'>Admin ( HO-JPJ )</div>
              <div className='border border-green-500 rounded-lg'>
                <a href={url} target='_blank' rel="noopener noreferrer">
                  <FaSquareWhatsapp className='text-green-500 w-8 md:w-12 h-8 md:h-12' />
                </a>
              </div>
            </div>
          </div>
          <div className='my-8 w-[100%] overflow-hidden whitespace-nowrap logo-container-admin'>
            <div className='flex flex-row gap-6 w-[200%] logo-slide-admin'>
              {carded_members.concat(carded_members).map((item, i) => (
                <div key={i} className='border-2 border-green-500 rounded-lg flex flex-col justify-center items-center py-2 px-2 shadow-2xl w-40 md:w-52 flex-shrink-0'>
                  <img src={item.image} alt="Member" className='w-full h-40 md:h-56 rounded-lg object-cover' />
                  <hr className='border border-green-500 w-full mt-4' />
                  <div className='flex flex-col justify-between items-center mt-2 w-full'>
                    <div className='font-bold text-sm md:text-base underline text-green-500'>{item.name}</div>
                    <p className='text-xs md:text-sm'>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='my-8 w-[100%] overflow-hidden whitespace-nowrap logo-container'>
            <div className='flex flex-row gap-6 w-[200%] logo-slide'>
              {members.concat(members).map((item, i) => (
                <div key={i} className='border-2 border-green-500 rounded-lg flex flex-col justify-center items-center py-2 px-2 shadow-2xl w-32 md:w-40 flex-shrink-0'>
                  <img src={item.image} alt="Member" className='w-full h-28 md:h-40 rounded-lg object-cover' />
                  <hr className='border border-green-500 w-full mt-4' />
                  <div className='flex flex-col justify-between items-center mt-2 w-full'>
                    <div className='font-bold text-xs md:text-sm underline text-green-500'>{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
