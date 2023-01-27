import React, { useState } from 'react'
import LoginForm from '../../validations/Login/LoginForm'

const LoginPage = () => {
  return (
    <div className='sm:container container-sm'>
      <div className='min-h-screen md:p-40  flex flex-col md:justify-start justify-center items-center w-full '>
        <div className='xl:w-2/5 lg:w-3/5 md:w-4/5 sm:w-4/5 w-full bg-white shadow-main transition-all duration-300 rounded-md p-7'>
            <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
