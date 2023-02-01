import React from 'react'

const Statistics = () => {
  return (
    <div className='flex md:flex-row flex-col justify-evenly items-center gap-y-6 bg-white shadow-main rounded-md py-6 px-8'>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-text text-2xl font-semibold'>2.5</span>
            <span className='text-text-gray'>مرخصی کل ماه</span>
        </div>
        <div className='divider-horizontal md:hidden block w-full'></div>
        <div className='divider-vertical md:block hidden'></div>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-text text-2xl font-semibold'>2.5</span>
            <span className='text-text-gray'>مرخصی کل ماه</span>
        </div>
        <div className='divider-horizontal md:hidden block w-full'></div>
        <div className='divider-vertical md:block hidden'></div>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-text text-2xl font-semibold'>2.5</span>
            <span className='text-text-gray'>مرخصی کل ماه</span>
        </div>

    </div>
  )
}

export default Statistics
