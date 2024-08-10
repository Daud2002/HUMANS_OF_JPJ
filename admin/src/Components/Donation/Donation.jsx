import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import uploadarea from '../../assets/images/upload_area.png'
import { useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';


export default function Donation() {

    const url = 'http://localhost:4000'
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        heading: '',
        descriptionofheading: ''
    })


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))

    }

    useEffect(() => {
        console.log(data)
    }, [data])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
            formData.append("heading", data.heading),
            formData.append("descriptionofheading", data.descriptionofheading),
            formData.append("image", image)

        try {
            const response = await axios.post(`${url}/api/donation/add`, formData);
            if (response.data.success) {
                setData({
                    heading: '',
                    descriptionofheading: ''
                })
                setImage(false)
                toast.success(response.data.message)
            }
        } catch (error) {

        }
    }

    return (
        <div>
            <nav className='flex justify-center shadow-black shadow-2xl h-[15vh] items-center'>
                <h1 className='text-green-500 font-bold text-[30px]'>
                    Add Donation Details
                </h1>
            </nav>
            <form action="" className='flex flex-col w-[50%] gap-4' onSubmit={handleSubmit}>
                <div className='flex justify-center mt-8'>

                    <label htmlFor="image" className='flex flex-col items-center gap-3 justify-center'>
                        <img src={image ? URL.createObjectURL(image) : uploadarea} alt="" className='w-32 border-[2px] border-green-500 rounded-md' />
                        <p className='text-[10px] text-green-500 font-bold'>Donation Image</p>
                    </label>
                    <input type="file" id='image' onChange={(e) => setImage(e.target.files[0])} required hidden />
                </div>
                <div className='flex flex-col w-full  gap-8 ml-4'>
                    <TextField variant="outlined" label="Enter Heading" type="text" name='heading' value={data.heading} onChange={onChangeHandler} />
                    <TextField variant="outlined" label="Enter Description" type="text" name='descriptionofheading' value={data.descriptionofheading} onChange={onChangeHandler} />
                </div>
                <button className='border-[2px] border-green-500 ml-4 w-full font-bold text-green-500 py-3 rounded-lg outline-none hover:-translate-y-0.5 hover:text-white hover:bg-green-500 hover:underline'>Save Details</button>
            </form>
        </div>
    )
}
