import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../../layout'
import AddUserForm from '../../../validations/add-user/AddUserForm'

const AddUserPage = () => {
  return (
      <div className='bg-white rounded-lg overflow-y-hidden'>
        <div className='flex flex-row justify-between items-center mb-6 bg-text-gray/10 px-4 py-3'>
            <span className='text-xl text-text-gray font-semibold'>افزودن کاربر</span>
            <Link to={'/admin/dashboard'} className="bg-deny px-7 py-2 text-white text-sm font-bold rounded-lg">
                    بازگشت
            </Link>
        </div>
        <div className='px-8 py-6'>
            <AddUserForm />
        </div>
      </div>

  )
}

export default AddUserPage
