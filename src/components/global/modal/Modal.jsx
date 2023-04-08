import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({handleExitModal,title,children,height="580",className}) => {
  return (
        <div className={`${className ? className : 'bg-white px-4 py-3 md:h-[${height}] h-[${height + 100}] z-50 xl:w-4/12 lg:w-2/6 md:w-3/5 md:mt-8 w-full box-shadow-1 sm:rounded-lg overflow-y-auto transition-all duration-300'}`}>
            <div className='flex flex-row justify-between items-center  w-full'>
                <div className='text-xl font-semibold'>{title}</div>
                <div className='p-2  cursor-pointer'
                    onClick={(e)=>handleExitModal(false)}
                >
                    <AiOutlineClose className='text-slate-800' size={"23"} />
                </div>
            </div>
        
            <div className='flex flex-col items-center justify-center w-full '>
                {children}
            </div>
        </div>
    )
}

export default Modal
