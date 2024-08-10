import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner.jsx'
import News_Secion from '../../Components/News_Section/News_Secion.jsx'
import Facebook from '../../Components/Facebook/Facebook.jsx'

export default function Home() {
  const url = "http://localhost:4000"
  useEffect(() => {
    console.log(url)
  }, [])
  return (
    <div>
      <Banner />
      <News_Secion url = {url}/>
      <Facebook />
    </div>
  )
}
