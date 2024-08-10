import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaSquareFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Footer() {
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
  return (
    <div className='flex flex-col bg-green-50'>
      <div className=' grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 p-6'>
        <div className='flex flex-col items-center px-6'>
          <img src={logo} alt="" className='w-32' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio ratione esse optio veniam atque quos voluptatibus impedit, mollitia fuga nobis maxime omnis quidem, porro, quia explicabo sapiente unde laborum.</p>
        </div>
        <div className='flex justify-center'>
          <ul className='flex justify-center flex-col items-center gap-4 font-bold '>
            {
              nav_items.map((items, i) => {
                return (
                  <div className='text-[20px]' key={i}>
                  <NavLink to={items.href} className='hover:text-[green]'><li>{items.name}</li></NavLink> 
                  </div>
                )
              })
            }
          </ul>
        </div>
        <div className='flex md:flex-col items-center justify-center gap-8'>
          <FaSquareFacebook className='w-12 h-12 text-[blue]'/>
          <FaYoutube className='w-12 h-12 text-red-700'/>
          <FaTiktok className='w-12 h-12'/>
        </div>
      </div>
      <div className='flex justify-center font-bold py-2 bg-green-500 text-white'>
        <hr />
        CopyRight&copy; 2024
      </div>
    </div>
  )
}
