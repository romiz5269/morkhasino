import RequestCard from 'components/request-card/RequestCard'
import SearchBox from 'components/search-box/SearchBox'
import React from 'react'
import Select from 'react-select'


const options = [
    {
        label:"جدیدترین",
        value:"desc"
    },{
        label:"قدیمی ترین",
        value:"asc"
    }
]

const Requests = () => {
  return (
    <div className='space-y-5'>
        <div className='flex flex-row justify-between items-center'>
            <div className='md:w-[300px] w-full'>
                <SearchBox />
            </div>
            <div className='md:w-[300px] w-full'>
                <Select options={options} placeholder="مرتب سازی بر اساس" className='text-sm' />
            </div>
        </div>
        <div className='grid grid-cols-12 md:gap-x-8 gap-y-5 '>
            {
                [1,2,3,4,5,6,7,8].map(item=>(
                    <div className='md:col-span-3 col-span-12 shadow-main rounded-lg overflow-y-hidden'>
                        <RequestCard />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Requests
