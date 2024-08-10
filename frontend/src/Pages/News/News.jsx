import React, { useEffect } from 'react'
import News_Secion from '../../Components/News_Section/News_Secion.jsx'

export default function News() {
  const url = "http://localhost:4000"
  useEffect(() => {
    console.log(url)
  }, [])

  
  return (
    <div>
      <div className='flex justify-center items-center w-[100%] h-[60vh] bg-green-500 font-bold text-[70px] text-[white] underline mb-8 mt-4'>
        News
      </div>
      <div>
        <News_Secion url={url} />
      </div>
    </div>
  )
}
