import React from 'react'
import CircleClose from '../svg/circle-close/CircleClose'

import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



const AddVacationRow = ({handleRemoveVacationRows,row}) => {
    const [value, setValue] = React.useState(new Date());

  return (
    <div className='bg-main-blue/10 p-4 relative rounded-lg flex flex-col gap-y-3 '>
        <div className='flex flex-row justify-between items-center mb-1'>
            <span className='text-sm font-bold'>درخواست مرخصی</span>
            <span onClick={()=>handleRemoveVacationRows(row)} className='cursor-pointer'>
                <CircleClose color='#000AFF' width={25} height={25} />
            </span>
        
        </div>
        <div className='w-full'>
            <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                    mask="____/__/__"
                    value={value}
                    className="bg-white rounded-lg w-full border-none outline-none"
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        <div className='flex md:flex-row flex-col gap-y-2 justify-start items-center gap-x-2 '>
            <input type="text" placeholder='از ساعت' className='py-3 px-2 rounded-lg md:w-auto w-full' />
            <input type="text" placeholder='تا ساعت' className='py-3 px-2 rounded-lg md:w-auto w-full' />
        </div>
        <textarea rows={4} placeholder="توضیحات" className='py-3 px-2 rounded-lg' />
        
    </div>
  )
}

export default AddVacationRow
