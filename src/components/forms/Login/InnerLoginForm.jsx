import { ErrorMessage, Field, Form } from 'formik'
import React, { useState } from 'react'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye'
import { useSelector } from 'react-redux'

const InnerLoginForm = ({props}) => {
    const [showPass,setShowPass]=useState(false)
    const loginStatus = useSelector(state => state.users.status)
  return (
    <Form className='w-full h-full flex flex-col gap-y-5'>
        <h2 className='font-semibold text-lg self-center mb-3'>ورود به حساب کاربری</h2>
        {/* {
          (loginStatus&&loginStatus.type === "error") &&
          <div className='bg-red-500/30 border-[0.8px] border-red-500 text-red-500 px-4 py-3 rounded-lg'>
            {loginStatus.message}
          </div>
        } */}
        <div className='w-full'>
          <Field autoComplete="false" name="phone" className={`w-full  bg-custom-gray/5   font-medium md:px-3 py-4 px-3 ${loginStatus.type === "error" && 'border-2 border-red-600 '} rounded-md`} type="text" placeholder="شماره تلفن خود را وارد کنید ..." />
          <ErrorMessage component="div" name='phone' className='text-xs text-red-600 mt-2' />
        </div>
        <div className='w-full relative'>
          <Field autoComplete="false" name="password" className={`w-full  bg-custom-gray/5   font-medium md:px-3 py-4 px-3 ${loginStatus.type === "error" && 'border-2 border-red-600 '} rounded-md`} type={showPass ? 'text' : 'password'} placeholder="رمز عبور خود را وارد کنید ..." />
          <span className='absolute md:top-5 top-4 left-3 cursor-pointer' onClick={()=>setShowPass(!showPass)}>
            {showPass ?<PasswordEye color='#4E5FFF' /> : <AiOutlineEyeInvisible color='#4E5FFF' size={19} />}
          </span>
          <ErrorMessage component="div" name='password' className='text-xs text-red-600 mt-2 leading-5 break-words' />

        </div>
        <div className='w-full'>
        <button className='w-full  text-sm py-4 font-bold rounded-md bg-confirm text-white cursor-pointer hover:bg-green-500 transition-all duration-300' type="submit" >
          ورود
        </button>
        </div>
    </Form>
  )
}

export default InnerLoginForm
