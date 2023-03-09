import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddTicketForm from 'Validations/add-ticket/AddTicketForm'

const CreateTicket = () => {
  const navigate = useNavigate()
  return (
  <div className='bg-white rounded-lg px-5 py-4 space-y-5'>
    <div className='w-full flex flex-row justify-between items-center '>
          <span className='text-2xl font-bold'>افزودن تیکت</span>
          <button onClick={()=>navigate(-1)} className='px-8 py-2 bg-deny text-white rounded-lg' >
              انصراف 
          </button>
      </div>
    <AddTicketForm />
  </div>
  )
}

export default CreateTicket
