import LogoSvg from 'components/svg/logo/LogoSvg'
import React, { useState } from 'react'
import LoginForm from '../../validations/Login/LoginForm'

const LoginPage = () => {
  return (
    <div className=' grid grid-cols-12'>
      <div className='md:col-span-4 col-span-12 md:px-20 md:h-auto h-full  flex flex-col items-center  relative '>
        <div className=' absolute hidden md:block w-[800px] h-full test  -left-28 z-10'>asdasd</div>
        <div className=' absolute hidden md:block w-[800px] h-full  b1 -left-28 z-20'>asdasd</div>
        <div className='bg-white md:absolute  md:w-[700px] w-full h-full b2 md:-left-28 z-30 flex flex-col items-center md:px-32 px-4 pt-20 space-y-20'>
          <LogoSvg width='200' height='100'/>
          <LoginForm />
        </div>
        
      </div>
      <div className='col-span-8 hidden bg-secondary min-h-screen md:flex flex-col items-center justify-center'>
        <img src='./images/png/login/login.png' />
      </div>
    </div>
  )
}

export default LoginPage
