import React from 'react'
import { Link } from 'react-router-dom'

const RequestCard = () => {
  return (
    <Link to={'/admin/requests/23'} className=' rounded-lg overflow-y-hidden shadow-main cursor-pointer group'>
      <div className='bg-main-blue/30 flex flex-col justify-center items-center md:py-5 py-8 px-10 md:gap-y-3 gap-y-7 group-hover:bg-secondary'>
        <div className='w-20 h-20 rounded-full overflow-y-hidden'>
          <img src='images/test-profile.png' className='w-full h-full '/>
        </div>
        <div className='w-full text-center'>
          <span className='text-lg font-bold text-secondary group-hover:text-white'>علیرضا ریاحی</span>
        </div>
        <div className='w-full text-center'>
          <span className='text-secondary group-hover:text-white'>09111111111</span>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center py-5 px-10 gap-y-3 group-hover:bg-main-blue'>

        <div className='flex flex-row justify-center items-center gap-x-3'>
          <span className='text-lg font-bold group-hover:text-white'>تعداد درخواست</span>
          <span className='text-lg font-bold group-hover:text-white'>3</span>
        </div>
       
      </div>
    </Link>
  )
}

export default RequestCard
