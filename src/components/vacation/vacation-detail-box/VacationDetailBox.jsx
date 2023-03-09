import React from 'react'

const VacationDetailBox = () => {
  return (
    <div className='md:sticky md:top-3 bg-white rounded-lg md:px-2 py-3 min-h-[340px]'>
        <div className='bg-main-blue/30 px-3 py-2 rounded-lg flex flex-row justify-start items-center flex-wrap gap-x-4 mb-8'>
            <span className='bg-main-blue px-4 py-3 font-bold text-sm text-white rounded-lg cursor-pointer'>درخواست اول</span>
            <span className='px-4 py-3 text-sm cursor-pointer'>درخواست دوم</span>

        </div>
        <div className='flex flex-row justify-start items-center gap-x-10 relative bg-white rounded-md p-4 my-4'>
            <button className={`flex flex-row justify-start items-center flex-wrap gap-x-3 text-primary relative before:rounded-full before:absolute before:-bottom-4 before:h-[3px]  before:bg-secondary/70 before:w-full `}>
                <span
                    className={`font-bold text-secondary cursor-pointer`}>12 اردیبهشت
                    </span>
            </button>
            <button
                className={`flex flex-row justify-start items-center gap-x-3  relative  `}
                >
                <span className='cursor-pointer'>13 اردیبهشت</span>
            </button>
            
            <div className='absolute h-[2px] bg-text-gray/10 w-full bottom-0'></div>
        </div>
        <div className='flex flex-row justify-start items-center flex-wrap gap-y-10 gap-x-24 p-4'>
            <div className='flex flex-row justify-start items-center gap-x-2'>
                <span className='text-[16px]'>نوع مرخصی : </span>
                <span className='text-lg font-bold text-text-main'>ساده</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2'>
                <span className='text-[16px]'>تاریخ ثبت : </span>
                <span className='text-lg font-bold text-text-main'>01/12/5</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2'>
                <span className='text-[16px]'>تاریخ ویرایش : </span>
                <span className='text-lg font-bold text-text-main'>01/12/5</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2'>
                <span className='text-[16px]'>وضعیت : </span>
                <span className='text-lg font-bold text-confirm'>تایید</span>
            </div>
        </div>
        <div className='p-4 flex flex-col gap-y-3'>
            <span className='text-sm font-medium'>توضیحات</span>
            <p className='text-xs font-normal leading-7 text-text-main'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
        <div className='p-4 flex flex-row justify-start items-center gap-x-2'>
            <span className='text-sm'>فایل ضمیمه : </span>
            <a className='text-secondary font-bold' href='#' download >دانلود فایل</a>
        </div>
        <div className='p-4 bg-main-blue/20 px-5 py-4 rounded-lg'>
            <span className='text-sm font-medium '>پاسخ ادمین</span>
            <p className='text-xs font-normal leading-7 text-text-main'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه استفاده قرار گیرد.
            </p>
        </div>
    </div>

  )
}

export default VacationDetailBox
