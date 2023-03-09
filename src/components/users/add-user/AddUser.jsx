import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddUserForm from 'Validations/add-user/AddUserForm'

const AddUser = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-white rounded-lg overflow-y-hidden'>
          <div className='flex flex-row justify-between items-center mb-6 bg-text-gray/10 px-4 py-3'>
              <span className='text-xl text-text-gray font-semibold'>افزودن کاربر</span>
              <div onClick={()=>navigate(-1)} className="cursor-pointer bg-deny px-7 py-2 text-white text-sm font-bold rounded-lg">
                      بازگشت
              </div>
          </div>
          <div className='px-8 py-6'>
              <AddUserForm />
          </div>
    </div>
  )
}

export default AddUser
