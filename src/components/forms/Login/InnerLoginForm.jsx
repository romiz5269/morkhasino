import { ErrorMessage, Field, Form } from 'formik'
import React, { useState } from 'react'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import PasswordEye from '../../svg/password-eye/PasswordEye'

const InnerLoginForm = ({props}) => {
    const [showPass,setShowPass]=useState(false)

  return (
    <Form className='w-full h-full flex flex-col gap-y-5'>
        <h2 className='font-semibold text-lg self-center mb-3'>ورود</h2>
        <div className='w-full'>
          <Field autoComplete="false" name="phone_number" className='w-full border-2 border-main-color  font-medium md:p-2 p-3 rounded-md' type="text" placeholder="شماره تلفن خود را وارد کنید ..." />
          <ErrorMessage component="div" name='phone_number' className='text-xs text-red-600 mt-2' />
        </div>
        <div className='w-full relative'>
          <Field autoComplete="false" name="password" className='w-full border-2 border-main-color  font-medium md:p-2 p-3 rounded-md' type={showPass ? 'text' : 'password'} placeholder="رمز عبور خود را وارد کنید ..." />
          <span className='absolute md:top-3 top-4 left-3 cursor-pointer' onClick={()=>setShowPass(!showPass)}>
            {showPass ?<PasswordEye /> : <AiOutlineEyeInvisible size={19} />}
          </span>
          <ErrorMessage component="div" name='password' className='text-xs text-red-600 mt-2 leading-5 break-words' />

        </div>
        <div className='w-full'>
        <button className='w-full  text-sm py-4 font-bold rounded-md bg-confirm text-white cursor-pointer hover:bg-green-500 transition-all duration-300' type="submit" >
            ثبت نهایی
        </button>
        </div>
    </Form>
  )
}

export default InnerLoginForm
