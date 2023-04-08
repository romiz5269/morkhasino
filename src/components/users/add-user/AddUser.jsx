import { Button } from '@mui/material'
import Loading from 'Components/loading/Loading'
import React, { useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetSingleUser, resetSingleUser } from 'Services/management/slices/userSlice'
import AddUserForm from 'Validations/add-user/AddUserForm'

const AddUser = ({editmode}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
      if(id){
        dispatch(GetSingleUser(id))
      }
    },[])

    const singleUser = useSelector(state => state.users.singleUser)

    const handleReset = () => {
      dispatch(resetSingleUser())
       navigate(-1)
    }
  return (
    <div className='bg-white rounded-lg  shadow-main'>
         

              <div className='flex flex-row justify-between items-center mb-6 bg-text-gray/10 px-4 py-3'>
                  <span className='text-xl text-text-gray/70 font-semibold'>افزودن کاربر</span>
                  <Button variant='contained' color='error' onClick={handleReset} sx={{padding:'10px 33px',marginLeft:'20px'}} className="cursor-pointer bg-deny  text-white text-sm font-bold rounded-lg ">
                          بازگشت
                  </Button>
              </div>
              <div className='px-8 py-6'>
                {/* {
                  (editmode || singleUser.length > 0) ?
                  <AddUserForm singleUser={singleUser} editMode={editmode} userId={id}/>
                  :
                  <AddUserForm singleUser={singleUser} editMode={false} userId={id}/>

                } */}
                {
                  editmode ? 
                  <>
                    {
                      singleUser.length > 0 ?
                      <AddUserForm singleUser={singleUser} editMode={editmode} userId={id}/>
                      :
                      <div className=' h-full w-full flex flex-row justify-center items-center'>
                        <Loading />
                      </div>

                    }
                  </>
                  :
                  <AddUserForm singleUser={singleUser} editMode={false} userId={id}/>

                }
                
              </div>

    </div>
  )
}

export default AddUser
