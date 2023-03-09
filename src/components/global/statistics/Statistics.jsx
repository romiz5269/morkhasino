import CalendarIcon from 'Components/global/svg/calendar-icon/CalendarIcon'
import DatePickerIcon from 'Components/global/svg/date-picker-icon/DatePickerIcon'
import TimerIcon from 'Components/global/svg/timer-icon/TimerIcon'
import React from 'react'

const Statistics = () => {
  return (
    <div className='grid grid-cols-12 gap-x-4'>
      <div className='md:col-span-8 col-span-12  flex md:flex-row flex-col  justify-start items-center gap-x-4 gap-y-4'>
        <div className='flex flex-row justify-between items-center bg-white px-3 py-3 md:flex-1 w-full rounded-xl'>
          <div className='flex flex-row justify-start items-center gap-x-4'>
            <TimerIcon />
            <span className='text-sm font-bold'>مرخصی کل ماه</span>
          </div>
          <div className='flex flex-row justify-start items-center gap-x-2'>
            
            <span className='text-2xl font-bold text-ticket-head'>2.5</span>
            <span className='text-sm  text-ticket-head'>روز</span>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center bg-white px-3 py-3 md:flex-1 w-full rounded-xl'>
          <div className='flex flex-row justify-start items-center gap-x-4'>
            <CalendarIcon />
            <span className='text-sm font-bold'>مرخصی کل ماه</span>
          </div>
          <div className='flex flex-row justify-start items-center gap-x-2'>
            
            <span className='text-2xl font-bold text-ticket-head'>2.5</span>
            <span className='text-sm  text-ticket-head'>روز</span>
          </div>
        </div>
      </div>
      <div className='md:col-span-4 col-span-12'>
          <div className='flex flex-row justify-between items-center bg-white px-3 py-3 md:flex-1 w-full rounded-xl md:mt-0 mt-4'>
            <div className='flex flex-row justify-start items-center gap-x-4'>
              <DatePickerIcon />
              <span className='text-sm font-bold'>مرخصی کل ماه</span>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2'>
              
              <span className='text-2xl font-bold text-ticket-head'>2.5</span>
              <span className='text-sm  text-ticket-head'>روز</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Statistics
