import React from 'react'
import { Link } from 'react-router-dom'
import AddTicketForm from '../../validations/add-ticket/AddTicketForm'

const CreateTicket = () => {
  return (
  <div className='bg-white rounded-lg px-5 py-4 space-y-5'>
    <div className='w-full flex flex-row justify-between items-center '>
            <span className='text-2xl font-bold'>افزودن تیکت</span>
            <Link to="/panel/tickets" className='px-8 py-2 bg-deny text-white rounded-lg' >
                انصراف 
            </Link>
        </div>
    <AddTicketForm />
  </div>
  )
}

export default CreateTicket
