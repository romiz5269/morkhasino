
import Statistics from 'Components/global/statistics/Statistics'
import ChevronDown from 'Components/global/svg/chevron-down/ChevronDown'
import MainLayout from 'Layout'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CatchWorkFields } from 'Services/management/slices/userSlice'

const ManagerDashboard = () => {
    const [accordion,setAccordion]=useState(false)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(CatchWorkFields())
    },[])
  return (
    <MainLayout managerLayout={true}>
      <Statistics />
      <div className='grid grid-cols-12 gap-x-5 my-3'>
        <div className='md:col-span-8 col-span-12 md:order-1 order-2'></div>
        <div className='md:col-span-4 col-span-12 md:order-2 order-1 bg-white rounded-lg shadow-main p-4 relative min-h-[300px] overflow-y-hidden'>
            <div className='absolute flex flex-row justify-center items-center w-full text-sm font-bold inset-0 z-20 h-12'>
                عملکرد ادمین ها
            </div>
            <div className='mt-8 h-[220px]  overflow-y-auto space-y-3 px-3'>
                <div className='bg-secondary/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-secondary'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-confirm/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-confirm'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-deny/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-deny'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-custom-yellow/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-custom-yellow'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-secondary/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-secondary'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-confirm/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-confirm'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-deny/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-deny'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
                <div className='bg-custom-yellow/20 py-2 px-3 rounded-lg text-center'>
                    <span className='text-sm text-custom-yellow'>شیما فلاح مجتبی خورشیدکلاه را قبول کرد</span>
                </div>
            </div>
        </div>
      </div>
      <div  className='w-full bg-white shadow-main   rounded-md flex flex-col my-3'>
        <div onClick={()=>setAccordion(!accordion)} className='w-full cursor-pointer bg-white/30 flex flex-row justify-between items-center px-7 py-4 text-sm'>
            <span >قوانین و مقررات</span>
            <span className={`${accordion ? 'rotate-180' : 'rotate-0'} transition`}>
                <ChevronDown color='#212135' />
            </span>
        </div>
        <div className={`${accordion ? 'h-auto p-8 ' : 'h-0 overflow-hidden'} bg-white`}>
            <p className='md:text-xs text-sm text-text leading-8'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default ManagerDashboard
