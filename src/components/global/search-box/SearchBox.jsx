import SearchIcon from 'Components/global/svg/search-icon/SearchIcon'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='relative'>
        <span className='absolute top-[10px] right-3'>
          <SearchIcon />
        </span>
        <input className='bg-transparent  w-full pl-4 pr-9 py-2 rounded-lg text-secondary placeholder:text-secondary focus:outline-none' type="text" placeholder="جستجو " />
    </div>
  )
}

export default SearchBox
