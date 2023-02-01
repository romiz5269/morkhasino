import React, { useState } from 'react'
import { HiXCircle, HiXMark } from 'react-icons/hi2'
import AddTicketForm from '../../validations/add-ticket/AddTicketForm'
import SearchBox from '../search-box/SearchBox'
import Plus from '../svg/plus/Plus'

const TicketDetail = () => {
    const [showForm,setShowForm]=useState(false)
  return (
    <div className='bg-white py-4 px-5 rounded-lg'>
        <div className='text-xl font-bold'>جزییات تیکت</div>
        <div className='flex flex-row justify-between items-center my-4'>
            <div className='md:w-[300px] w-full'>
                <SearchBox />
            </div>
            <div onClick={()=>setShowForm(!showForm)} className={` ${showForm ? 'bg-deny' : 'bg-main-blue'} flex flex-row justify-center items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer md:w-auto w-full`}>
                <span className='text-white text-sm font-bold'>
                    {
                        showForm ? 'انصراف' : 'پاسخ'
                    }
                </span>
                {
                    showForm ? <HiXMark className='text-white' size={20} /> : <Plus />
                }
            </div>
        </div>
        {
            showForm && 
            <AddTicketForm />
        }
        <div className='bg-ticket-head flex flex-row justify-start items-center flex-wrap gap-x-12 px-8 py-5 rounded-lg my-5'>
            <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
                <span className=' font-normal'>زمان ایجاد</span>
                <span className='font-bold'>01/12/05 (11:40)</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
                <span className=' font-normal'>زمان ایجاد</span>
                <span className='font-bold'>01/12/05 (11:40)</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
                <span className=' font-normal'>زمان ایجاد</span>
                <span className='font-bold'>01/12/05 (11:40)</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
                <span className=' font-normal'>زمان ایجاد</span>
                <span className='font-bold'>01/12/05 (11:40)</span>
            </div>
        </div>
        <div className=' rounded-lg bg-text-gray/10 min-h-[200px]'>
            <div className='bg-ticket-head w-full flex flex-row justify-between items-center flex-wrap px-8 py-3 rounded-lg gap-x-12   my-5'>
                <div className='flex flex-col justify-start items-center gap-x-2 gap-y-2 text-white'>
                    <span className=' font-bold'>شیما فلاح</span>
                    <span className='font-normal text-sm'>ادمین</span>
                </div>
                <span className='text-white'>01/12/05 (11:40)</span>
            </div>
            <p className='text-text-main leading-8 px-7 text-sm'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
        <div className=' rounded-lg bg-text-gray/10 min-h-[200px]'>
            <div className='bg-text-gray/30 w-full flex flex-row justify-between items-center flex-wrap px-8 py-3 rounded-lg gap-x-12   my-5'>
                <div className='flex flex-col justify-start items-center gap-x-2 gap-y-2 '>
                    <span className=' font-bold'>شیما فلاح</span>
                    <span className='font-normal text-sm'>کاربر</span>
                </div>
                <span>01/12/05 (11:40)</span>
            </div>
            <p className='text-text-main leading-8 px-7 text-sm'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
    </div>
  )
}

export default TicketDetail
