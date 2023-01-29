import React from 'react'

const CircleChart = ({hasPeriod=true,percent=0}) => {
  return (
    <>
        <div className={`flex flex-row ${hasPeriod ? ' justify-between' : 'justify-center'} items-center`}>
            <span className='text-text font-bold'>نمودار مرخصی</span>
            {
                hasPeriod &&
                <select className='text-text-gray text-sm'>
                    <option>درماه</option>
                    <option>در سال</option>
                    <option>کل</option>
                </select>
            }
            
        </div>
        <div className='flex flex-col justify-center items-center my-5 card'>
            <div className='percent'>
                <svg>
                    <circle cx="105" cy="105" r="80."></circle>
                    <circle cx="105" cy="105" r="80." style={{"--percent": percent}}></circle>
                </svg>
            </div>
            <div className='flex flex-row justify-between items-center gap-x-8 mt-5'>
                <div className='flex flex-row justify-center items-center gap-x-4'>
                    <span className='h-3 w-3 rounded-full bg-secondary'></span>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-sm text-text-gray'>باقیمانده</span>
                        <span className='text-sm'>2.5 روز</span>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-x-4'>
                    <span className='h-3 w-3 rounded-full bg-text-gray'></span>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-sm text-text-gray'>کل</span>
                        <span className='text-sm'>2.5 روز</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CircleChart
