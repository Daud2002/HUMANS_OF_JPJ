import React, { useEffect, useState } from 'react'
import banner_img from '../../assets/images/Banner.png'
import axios from 'axios'

export default function NewsCards({ category,url }) {

  const [newsdata, setnewsdata] = useState([]);
  // const url = 'http://localhost:4000'

  const fetchData = async () => {
    const response = await axios.get(`${url}/api/post/list`)
    if (response.data.success) {
      setnewsdata(response.data.data)
    }
  }
  useEffect(() => {
    fetchData();
    console.log(url)
  }, [])

  const renderMedia = (mediaUrl) => {
    const fileExtension = mediaUrl.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return <img src={mediaUrl} alt="Media" className=' w-[100%] h-56 rounded-md border-[2px] border-[#77ff77]' />;
    } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
      return (
        <video className='w-[100%] h-56 rounded-md border-[2px] border-[green]' controls>
          <source src={mediaUrl} type={`video/${fileExtension}`} />
          Your browser does not support the video tag.
        </video>
      );
    }
    return <div>Unsupported media type</div>;
  }

  const date = (date) => {
    return date.split('T')[0]
  }

  return (
    <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 gap-6 mx-6 my-16'>
      {
        newsdata.map((items, i) => {
          if (category === 'All' || category === items.category) {
            return (
              <div className='border border-green-800 rounded-lg p-6 shadow-2xl'>
                <div className='flex flex-col items-center'>
                  {renderMedia(`${url}/media/${items.media[0]}`)}
                </div>
                <div className='flex flex-col justify-start mt-8'>
                  <h1 className='font-bold hover:text-[green] cursor-pointer '>{items.title}</h1>
                  <p className='flex justify-between mt-2'>
                    <span>Date Published</span>
                    <span>{date(items.createdAt)}</span>
                  </p>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}
