import React, { useState } from 'react'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { Calendar } from 'react-multi-date-picker'
import CircleChart from '../circle-chart/CircleChart'
import Statistics from '../statistics/Statistics'
import ChevronDown from '../svg/chevron-down/ChevronDown'

const Dashboard = () => {
    const [accordion,setAccordion]=useState(false)
  return (
    <>
      <Statistics />
      <div className='grid grid-cols-12 gap-x-5 gap-y-5 my-6'>
            <div className='md:col-span-4 col-span-12 bg-white shadow-main rounded-md py-8 px-7'>
                <CircleChart hasPeriod={true} percent={20} />
            </div>
            <div className='md:col-span-4 col-span-12 bg-white shadow-main rounded-md py-8 px-7'>
                <CircleChart hasPeriod={false} percent={70} />
            </div>
            <div className='md:col-span-4 col-span-12 bg-white shadow-main rounded-md w-full py-3 px-7'>
                <Calendar  className=' h-full shadow-none ' buttons={true}  calendar={persian}
                locale={persian_fa} 
                />
            </div>
      </div>
      <div  className='w-full bg-white shadow-main   rounded-md flex flex-col '>
        <div onClick={()=>setAccordion(!accordion)} className='w-full cursor-pointer bg-white/30 flex flex-row justify-between items-center px-7 py-4 text-sm'>
            <span >قوانین و مقررات</span>
            <span className={`${accordion ? 'rotate-180' : 'rotate-0'} transition`}>
                <ChevronDown color='#212135' />
            </span>
        </div>
        <div className={`${accordion ? 'h-auto p-8 ' : 'h-0 overflow-hidden'} bg-white`}>
            <p className='md:text-xs text-sm text-text leading-7'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
      </div>
    </>
  )
}

export default Dashboard
