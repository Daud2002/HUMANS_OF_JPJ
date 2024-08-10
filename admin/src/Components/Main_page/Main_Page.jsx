import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Welcome from '../Welcome/Welcome';

export default function Main_Page() {

  const [page, setpage] = useState(<Welcome />);

  return (
    <div className=' mt-[14vh] w-[100%] h-[80vh] flex'>
      <div className='w-[25%] '><Sidebar setpage={setpage} /></div>
      <div className='w-[75%]'>{page}</div>
    </div>
  )
}
