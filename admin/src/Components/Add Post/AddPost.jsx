import React, { useState } from 'react';
import uploadarea from '../../assets/images/upload_area.png';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddPost() {
  const [imageno, setImageno] = useState(1);
  const [media, setMedia] = useState(Array(imageno).fill(null));
  const url = 'http://localhost:4000';

  const [data, setData] = useState({
    title: '',
    description: '',
    linktofb: '',
    category: 'امداد باہمی'
  });

  const optionSelector = (event) => {
    const newImageno = parseInt(event.target.value, 10);
    setImageno(newImageno);
    setMedia(Array(newImageno).fill(null)); // Reset media array based on selected number of media
  };

  const handleMediaChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newMedia = [...media];
      newMedia[index] = file;
      setMedia(newMedia);
    }
  };

  const image_data = () => {
    return media.map((file, index) => (
      <div key={index} className='flex flex-col items-center gap-2'>
        {file ? (
            file.type.startsWith('video/') ? (
          <>
            <video controls className='w-24'>
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => handleMediaChange(e, index)}
              id='media'
              hidden
            />
          </>
        ) : (
          <>
          <img src={URL.createObjectURL(file)} alt={`Media No ${index + 1}`} className='w-24' />
          <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => handleMediaChange(e, index)}
              id='media'
              hidden
            />
        </>)
        ) : (
          <>
        <img src={uploadarea} alt="Upload Area" className='w-24' />
        <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => handleMediaChange(e, index)}
              id='media'
              className='text-[10px]'
            />
          </>
        )}
        <p className='text-[10px]'>Media No {index + 1}</p>
      </div>
    ));
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("linktofb", data.linktofb);
    formData.append("category", data.category);
    media.forEach((file) => {
      if (file) {
        formData.append("media", file);
      }
    });

    try {
      const response = await axios.post(`${url}/api/post/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setData({
          title: '',
          description: '',
          linktofb: '',
          category: 'امداد باہمی'
        });
        setMedia(Array(imageno).fill(null));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <h1 className='text-green-500 font-bold flex justify-center text-[30px] mt-8 shadow-md'>Add Post</h1>
      <form className='w-[100%] h-[80vh] flex flex-col gap-2 mt-8 pl-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <label className='text-green-500 font-bold'>Enter number of media</label>
            <select className='border-[2px] border-green-500 rounded-lg py-1 px-2 text-green-500 font-bold outline-none' value={imageno} onChange={optionSelector}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <div className='flex flex-row gap-8 justify-start'>
            {image_data()}
          </div>
        </div>
        <div className='flex flex-col gap-8 w-[50%]'>
          <TextField label="Enter Title" variant="outlined" value={data.title} name='title' onChange={onChangeHandler} />
          <TextField label="Enter Description" variant="outlined" value={data.description} name='description' onChange={onChangeHandler} />
          <TextField label="Fb Link of post" variant="outlined" value={data.linktofb} name='linktofb' onChange={onChangeHandler} />
        </div>
        <div>
          <select name="category" className='border-green-500 text-[#66ec66] font-semibold border-[2px] rounded mt-4 py-2 px-1' value={data.category} onChange={onChangeHandler}>
            <option value="شہری مسائل">شہری مسائل</option>
            <option value="حادثات">حادثات</option>
            <option value="امداد باہمی">امداد باہمی</option>
            <option value="شخصیات">شخصیات</option>
            <option value="شہری فلاح و بہبود کے کام">شہری فلاح و بہبود کے کام</option>
          </select>
        </div>
        <button className='border-[2px] border-[#a8ffa8] font-bold px-4 py-2 text-[#66ec66] rounded-md w-[50%] outline-none mt-8'>Add Post</button>
      </form>
    </div>
  );
}
