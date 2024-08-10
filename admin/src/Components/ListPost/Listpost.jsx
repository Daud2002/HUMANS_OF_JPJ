import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';

export default function Listpost() {
  const url = 'http://localhost:4000'

  const [newsData, setnewsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/post/list`);
      if (response.data.success) {
        // Reverse the data order before setting it in the state
        const reversedData = response.data.data.reverse();
        setnewsData(reversedData.map(item => ({ ...item, mediaIndex: item.mediaIndex || 0 })));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }
    , [])

  const datetimesplit = (datetime) => {
    return datetime.split('T')[0];
  }

  const handleMediaIndexChange = (event, postId) => {
    const index = Number(event.target.value) - 1; // Convert 1-based to 0-based index
    setnewsData(prevData =>
      prevData.map(item =>
        item._id === postId ? { ...item, mediaIndex: index } : item
      )
    );
  }

  const renderMedia = (mediaUrl) => {
    const fileExtension = mediaUrl.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return <img src={mediaUrl} alt="Media" className='w-16 h-16 rounded-md border-[2px] border-[#77ff77]' />;
    } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
      return (
        <video className='w-16 h-16 rounded-md border-[2px] border-[green]' controls>
          <source src={mediaUrl} type={`video/${fileExtension}`} />
          Your browser does not support the video tag.
        </video>
      );
    }
    return <div>Unsupported media type</div>;
  }

  const removefood = async (foodid) => {
    const response = await axios.post(`${url}/api/post/remove`, { id: foodid })
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
    await fetchData();
  }

  return (
    <div className='flex flex-col mx-8'>
      <ul className='grid grid-cols-6 items-center justify-center z-10 w-[70%] fixed backdrop-blur-3xl border-[2px] bg-[#77ff77] py-4 text-white font-bold rounded-md'>
        <li className='underline flex justify-center'>Media</li>
        <li className='underline flex justify-center'>Title</li>
        <li className='underline flex justify-center'>Description</li>
        <li className='underline flex justify-center'>Category</li>
        <li className='underline flex justify-center'>Date Created</li>
        <li className='underline flex justify-center'>Remove Post</li>
      </ul>
      <div className='flex flex-col gap-8 my-20'>
        {
          newsData.map((items) => {
            return (
              <div key={items._id} className='border-[2px] border-[#77ff77] py-2 pl-2 grid grid-cols-6 items-center rounded-lg shadow-2xl'>
                <div className='flex justify-center items-center gap-2'>
                  <div className='z-0'>
                    {renderMedia(`${url}/media/${items.media[items.mediaIndex]}`)}
                  </div>
                  <select
                    className='border-[2px] border-[#77ff77] text-[#77ff77] h-8 rounded-md outline-none'
                    name='mediaindex'
                    onChange={(e) => handleMediaIndexChange(e, items._id)}
                    value={items.mediaIndex + 1} // Display 1-based index
                  >
                    {
                      items.media.map((_, index) => (
                        <option key={index} value={index + 1}>{index + 1}</option> // Display 1-based index
                      ))
                    }
                  </select>
                </div>
                <div className='flex justify-center'>
                  {items.title}
                </div>
                <div className='flex justify-center'>
                  {items.description}...
                </div>
                <div className='flex justify-center'>
                  {items.category}
                </div>
                <div className='flex justify-center'>
                  {datetimesplit(items.createdAt)}
                </div>
                <div className='flex justify-center text-[#77ff77]'>
                  <ImCross className='hover:cursor-pointer' onClick={() => removefood(items._id)} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
