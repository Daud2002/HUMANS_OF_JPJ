import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from 'axios'
import { toast } from 'react-toastify';


export default function DonationStatus() {
    const url ='http://localhost:4000'

    const [checked, setChecked] = useState({
        statusofdonationshow : true
    });

    const[databaseStatus,setdatabaseStatus] = useState()


    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));
   const handleChange = (event) =>{
    setChecked(event.target.checked)
   }
    useEffect(() => {
        const fetchResponse = async() =>{
            const response = await axios.post(`${url}/api/donationStatus/add`,{statusofdonationshow : checked});
            if (response.data.success) {
             toast.success(response.data.message)   
            }
        }
        const Status = async() =>{
            const response =  await axios.get(`${url}/api/donationStatus/list`);
            if (response.data.success) {
                const newData = response.data.data;
                const latest = newData.reverse();
                setdatabaseStatus(latest[0].statusofdonationshow)
                console.log(latest[0].statusofdonationshow)
            }
        }
        Status();
        fetchResponse();
    }, [checked])
    return (
        <div>
            <FormControlLabel
                control=
                {
                    <IOSSwitch
                        sx={{ m: 1 }}
                        onChange={handleChange}
                        checked={checked}
                    />
                }
            />
            <h1>{databaseStatus}</h1>
        </div>
    )
}
