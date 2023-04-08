import { IconButton } from '@mui/material';
import DataTable from 'Components/global/data-table/DataTable';
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBox from 'Components/global/search-box/SearchBox'
import Statistics from 'Components/global/statistics/Statistics'
import EditPencil from 'Components/global/svg/edit-pencil/EditPencil';
import Plus from 'Components/global/svg/plus/Plus'
import TrashIcon from 'Components/global/svg/trash/TrashIcon';
import MainLayout from 'Layout';
import { useAuth } from 'hooks/persist/useAuth';
import { useNotif } from 'hooks/toast/useNotif';
import { useDispatch, useSelector } from 'react-redux';
import { CatchWorkFields } from 'Services/management/slices/userSlice';


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
      width: 200,
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
    width: 260, renderCell: (params) => {
      return (
        <div className='flex flex-row justify-center items-center gap-x-2  w-full'>
          <IconButton onClick={(e) => console.log(e,params)}>
            <EditPencil
            
            variant="contained"
            size='20'
            />
          </IconButton>
          <IconButton onClick={(e) =>console.log(e,params)}>
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

const AdminDashboardPage = () => {
  
    const [page,setPage]=useState(5)
    const [currentPage,setCurentPage]=useState(1)
    const [data,setData]=useState(rows)
    const {userData,error} = useAuth()
    const dispatch = useDispatch()
    const loginStatus = useSelector(state=>state.users.status)
    useNotif(loginStatus,false)

    useEffect(()=>{
      dispatch(CatchWorkFields())
    },[])
    useEffect(()=>{
      if(rows.length < currentPage){
        console.log('disabled')
      }
    },[currentPage])

    const handleFilter = (e,params)=>{
        setData(item=>item.filter(p => p.id === params.row.id))
    } 
  return (
    <MainLayout adminLayout={true}>
      <Statistics />
     
    </MainLayout>
  )
}

export default AdminDashboardPage
