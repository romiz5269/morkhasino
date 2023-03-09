import { IconButton } from '@mui/material'

import EditPencil from 'Components/global/svg/edit-pencil/EditPencil'
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye'
import TrashIcon from 'Components/global/svg/trash/TrashIcon'
import Users from 'Components/users/Users'
import MainLayout from 'Layout'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'



  
  const rows = [
    { id: 1, username: 'علیرضا ریاحی1', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 2, username: 'علیرضا ریاحی2', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 3, username: 'علیرضا ریاحی3', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 4, username: 'علیرضا ریاحی4', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 5, username: 'علیرضا ریاحی5', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 6, username: 'علیرضا ریاحی6', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 7, username: 'علیرضا ریاحی7', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},
    { id: 8, username: 'علیرضا ریاحی8', user_field: 'برنامه نویس', user_phone_number: "09111111111",user_email:"test@test.com"},

    
  ];




const AdminUsers = () => {
  const navigate = useNavigate()
  const [delModal,setDelModal] = useState(false)
  const columns = [
    { field: 'id', headerName: 'ردیف', width: 60,headerClassName: 'table-header'},
    {
      field: 'username',
      headerName: 'نام کاربر',
      width: 330,
      headerClassName: 'table-header',
      sortable:true,
    
    },
    {
      field: 'user_field',
      headerName: 'حوزه کاری',
      width: 200,
      headerClassName: 'table-header',

      sortable:true
    
    },
    {
      field: 'user_phone_number',
      headerName: 'شماره تماس',
      width: 240,
      headerClassName: 'table-header',
      sortable:true
    

    },
    {
      field: 'user_email',
      headerName: 'ایمیل',
      width: 280,
      headerClassName: 'table-header',
      sortable:true
        
  
    },
    { field: 'Actions', headerName: 'عملیات', 
    headerClassName: 'table-header',
    width: 220, renderCell: (params) => {
      return (
        <div className='flex flex-row justify-center items-center gap-x-2  w-full'>
          <IconButton onClick={(e) => navigate(`/admin/dashboard/users/update/${params.row.id}`)}>
            <EditPencil
            
            variant="contained"
            size='20'
            />
          </IconButton>
          <IconButton onClick={(e) =>setDelModal(true)}>
            <TrashIcon
            
            variant="contained"
            size='20'
            />
          </IconButton>
          <IconButton onClick={(e) =>console.log(e,params)}>
            <PasswordEye
            color='#333'
            variant="contained"
            size='20'
            />
          </IconButton>
          
          
        </div>
      );
    } }

  ];
    const [page,setPage]=useState(5)
    const [currentPage,setCurentPage]=useState(1)
    const [data,setData]=useState(rows)
    useEffect(()=>{
      if(rows.length < currentPage){
        console.log('disabled')
      }
    },[currentPage])

  return (
    <MainLayout adminLayout={true}>
     <Users />
    </MainLayout>
  )
}

export default AdminUsers
