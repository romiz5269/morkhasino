import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const DenyAccess = () => {
    const userRole = useSelector(state => state.users.userRole);
    const navigate = useNavigate()
    useEffect(()=>{
        document.body.style='background-color:white';
        const timeout = setTimeout(()=>{
            navigate(`/${userRole}/dashboard`)
        },5000)
        return () =>{
            clearTimeout(timeout)
        }

    },[])
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-start pt-20 gap-y-5'>
            <img src='images/gif/access-deny.gif' width={"400"} height="400" />
            <div className='text-deny font-semibold text-xl'>
                شما مجاز به مشاهده این صفحه نیستید
            </div>
            <div className=' font-semibold '>
                بعد از 5 ثانیه به پنل خود منتقل می شوید ...
            </div>
        </div>
    )
}

export default DenyAccess
