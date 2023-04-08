import { ErrorMessage, Field, Form } from 'formik'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Plus from 'Components/global/svg/plus/Plus';
import { useSelector } from 'react-redux';
import CustomSelect from 'Components/global/custom-select/CustomSelect';
import { Roles } from 'Configs/constants/Roles/Roles';
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { UserStatus } from 'Configs/constants/user_status/UserStatus';
import { Button } from '@mui/material';

const InnerAddUserForm = (props) => {
  const [value, setValue] = React.useState(new Date());
  const userRole = useSelector(state => state.users.userRole)
  const [showPass,setShowPass] = useState(false)
   const work_fields = useSelector(state => state.users.work_fields)
   const work_fields_options = work_fields?.map(item => {
    return {label : item.display_name,value:item.id}
   })
  //  console.log(UserStatus.filter(item => item.value === props.singleUser[0]?.status?.id))
  return (
    <Form className='w-full grid grid-cols-12 gap-x-3 '>

        <div className='col-span-12 space-y-7'>
          <div className='flex md:flex-row flex-col justify-start items-center gap-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>نام و نام خانوادگی</label>
              <Field name="fullname" placeholder="علیرضا ریاحی" className="bg-white border-2 border-main-color/40 rounded-lg py-3 px-3" />
              <ErrorMessage name='fullname' component={"div"} className="text-sm text-red-600" />
            </div>
           {
            userRole === "manager" &&
            <div className='flex flex-col gap-y-2 flex-1 w-full'>
              <label className='font-semibold text-sm'>نقش کاربر</label>
              <CustomSelect options={Roles} name="role"  placeholder="نقش کاربر را انتخاب کنید" className="bg-white border-2 border-main-color/40 rounded-lg py-1 px-3 w-full text-sm"
                
                defaultValue={Roles.filter(item => item.value === props.singleUser[0]?.role?.id)}
                onChange={(value)=>props.setFieldValue("role",value.value)}
              />
              <ErrorMessage name="role" component={"div"} className="text-sm text-red-600" />
            </div>
           }
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>فیلد کاری</label>
              <CustomSelect options={work_fields_options} defaultValue={work_fields_options ? work_fields_options?.filter(item => item.value === props.singleUser[0]?.work_field?.id) : ""} 
              name="work_field"  placeholder="حوزه کاری را انتخاب کنید" className="bg-white text-sm border-2 border-main-color/40 rounded-lg py-1 px-3" 
               onChange={(value)=>props.setFieldValue("work_field",value.value)}
               />
              
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-start items-center gap-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>شماره تماس</label>
              <Field name="phone" placeholder="شماره تماس "  className="bg-white border-2 border-main-color/40 rounded-lg py-3 px-3" />
              <ErrorMessage name='phone' component={"div"} className="text-sm text-red-600" />

            </div>
            <div className='flex flex-col gap-y-2 flex-1 relative'>
              <label className='font-semibold text-sm'>رمز عبور</label>
              <Field type={showPass ? 'text' : 'password' } name="password" placeholder="رمز عبور"  className="bg-white border-2 border-main-color/40 rounded-lg py-3 px-3" />
              <ErrorMessage name='password' component={"div"} className="text-sm text-red-600" />

              <span className='absolute md:top-11 top-11 left-3 cursor-pointer' onClick={()=>setShowPass(!showPass)}>
              {showPass ?<PasswordEye color='#333' /> : <AiOutlineEyeInvisible color='#333' size={19} />}
              </span>
            </div>
            <div className='flex flex-col gap-y-2 flex-1 relative'>
              <label className='font-semibold text-sm'>ایمیل</label>
              <Field type="email" name="email" placeholder="ایمیل"  className="bg-white border-2 border-main-color/40 rounded-lg py-3 px-3" />
              <ErrorMessage name='email' component={"div"} className="text-sm text-red-600" />

             
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-start items-center gap-8'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>وضعیت کاربر</label>
              <CustomSelect 
              options={UserStatus} 
              defaultValue={UserStatus ? UserStatus.filter(item => item.value === props.singleUser[0]?.status?.id) : ""} 
                name="status"  placeholder="وضعیت را انتخاب کنید" className="bg-white text-sm border-2 border-main-color/40 rounded-lg py-2 px-3" 
               onChange={(value)=>props.setFieldValue("status",value.value)}
               />
              <ErrorMessage name='status' component={"div"} className="text-sm text-red-600"/>
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>تاریخ شروع قرارداد</label>
              <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                    mask="____/__/__"
                    value={props?.singleUser[0]?.start_employment?? value}
                    
                    className="bg-white rounded-lg w-full border-none outline-none"
                    onChange={(newValue) => props.setFieldValue("start_employment",newValue)}
                    renderInput={(params) => <TextField {...params} placeholder="تاریخ شروع قرارداد" />}
                />
              </LocalizationProvider>
              <ErrorMessage name='start_employment' component={"div"} className="text-sm text-red-600" />

            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <label className='font-semibold text-sm'>تاریخ اتمام قرارداد</label>
                <LocalizationProvider dateAdapter={AdapterJalali}>
                  <DatePicker
                      mask="____/__/__"
                      value={props.singleUser[0]?.end_employment ?? value}
                      className="bg-white rounded-lg w-full border-none outline-none"
                      onChange={(newValue) => props.setFieldValue("end_employment",newValue)}
                      renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>      
                <ErrorMessage name='end_employment' component={"div"} className="text-sm text-red-600" />
    
            </div>
          </div>
          <div className='flex flex-row justify-end items-center w-full '>
            <Button variant='contained'    type='submit'  sx={{columnGap:'5px',padding:'10px 23px'}} className={"!bg-confirm"}>
                <span>ثبت نهایی</span>
                <Plus />
                
            </Button>
          </div>
        </div>
    </Form>
  )
}

export default InnerAddUserForm
