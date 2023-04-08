import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-y-4'>
        <span className='animate-spin'>
            <AiOutlineLoading3Quarters size={"28"} />
        </span>
        <span className='text-lg font-semibold'>در حال بارگذاری ...</span>
      </div>
    </>
  )
}

export default Loading
