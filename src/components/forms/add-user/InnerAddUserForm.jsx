import { Field, Form } from 'formik'
import React from 'react'
import ProfileAvatar from '../../profile-avatar/ProfileAvatar'
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Plus from 'components/svg/plus/Plus';


const InnerAddUserForm = (props) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Form className='w-full grid grid-cols-12 gap-x-3'>
        <div className='col-span-3 flex flex-row justify-center items-start pt-5'>
            <ProfileAvatar size={151} />
        </div>
        <div className='col-span-9 space-y-7'>
          <div className='flex flex-row justify-start items-center gap-x-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>نام و نام خانوادگی</label>
              <Field name="fullname" placeholder="علیرضا ریاحی" className="bg-white border-2 border-main-color/40 rounded-lg py-2 px-3" />
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>فیلد کاری</label>
              <Field name="field"  placeholder="توسعه دهنده فرانت" className="bg-white border-2 border-main-color/40 rounded-lg py-2 px-3" />
            </div>
          </div>
          <div className='flex flex-row justify-start items-center gap-x-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>شماره تماس</label>
              <Field name="phone_number"  className="bg-white border-2 border-main-color/40 rounded-lg py-2 px-3" />
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>ایمیل</label>
              <Field name="email"  className="bg-white border-2 border-main-color/40 rounded-lg py-2 px-3" />
            </div>
          </div>
          <div className='flex flex-row justify-start items-center gap-x-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>تاریخ شروع قرارداد</label>
              <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                    mask="____/__/__"
                    value={value}
                    className="bg-white rounded-lg w-full border-none outline-none"
                    onChange={(newValue) => props.setFieldValue("start_date",newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>تاریخ اتمام قرارداد</label>
                <LocalizationProvider dateAdapter={AdapterJalali}>
                  <DatePicker
                      mask="____/__/__"
                      value={value}
                      className="bg-white rounded-lg w-full border-none outline-none"
                      onChange={(newValue) => props.setFieldValue("end_date",newValue)}
                      renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>          
            </div>
          </div>
          <div className='flex flex-row justify-end items-center w-full '>
            <button type='submit' className=' bg-confirm px-4 py-3 rounded-lg text-white text-sm font-semibold flex flex-row justify-center items-center gap-x-2'>
                <span>ثبت نهایی</span>
                <Plus />
            </button>
          </div>
        </div>
    </Form>
  )
}

export default InnerAddUserForm
