import React from 'react'
import CircleClose from '../svg/circle-close/CircleClose'

const Modal = ({handleExitModal,title,children}) => {
  return (
        <div className='bg-white px-4 py-3 md:h-[580px] h-[680px] z-50 xl:w-4/12 lg:w-2/6 md:w-3/5 md:mt-8 w-full box-shadow-1 sm:rounded-lg overflow-y-auto transition-all duration-300'>
            <div className='flex flex-row justify-between items-center  w-full'>
                <div className='text-xl font-semibold'>{title}</div>
                <div className='p-2  cursor-pointer'
                    onClick={(e)=>handleExitModal(false)}
                >
                    <CircleClose />
                </div>
            </div>
        
            <div className='flex flex-col items-center justify-center w-full my-6'>
                {children}
            </div>
        </div>
    )
}

export default Modal
