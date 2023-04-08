import React, { useEffect } from 'react'
import { HiChevronLeft } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    document.body.style='background-color:white'
  },[])
  return (
    <div className='min-h-screen min-w-full flex flex-col justify-center items-center'>
      <button onClick={()=>navigate(-1)} className='px-6 py-2 text-secondary rounded-lg border-2 border-secondary flex flex-row justify-center items-center gap-x-3'>
        <span>بازگشت</span>
        <HiChevronLeft color='#326ABD' />
      </button>
      <img src='./images/gif/404-2.gif' className='object-cover  h-full' />
    </div>
  )
}

export default NotFound
