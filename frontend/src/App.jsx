import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { FaSquareWhatsapp } from "react-icons/fa6";
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import Splashscreen from './Components/Splash_screen/Splashscreen';
import { useEffect, useState } from 'react';
import News from './Pages/News/News';

function App() {
  const message = "Hi I would like to give some fund";
  const phoneNumber = "+923400120088"
  const whatsapp_url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const [splash, setsplash] = useState(true)

  
  return (
    <>
      <div className='absolute w-[100%] h-[100vh]'>
        <a href={whatsapp_url} target="_blank" rel="noopener noreferrer"><FaSquareWhatsapp className='fixed text-green-500 bottom-16 right-16 w-16 h-16 cursor-pointer z-50' /></a>
      </div>
      <div className={`${splash ? 'block' : 'hidden'}`}>
        <Splashscreen splash={splash} setsplash={setsplash} />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
