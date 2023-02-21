import { Box, Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataTable from 'components/data-table/DataTable';
import AddIcon from 'components/svg/add-icon/AddIcon';
import PasswordEye from 'components/svg/password-eye/PasswordEye';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBox from '../search-box/SearchBox'
import Statistics from '../statistics/Statistics'
import EditPencil from '../svg/edit-pencil/EditPencil';
import Plus from '../svg/plus/Plus'
import TrashIcon from '../svg/trash/TrashIcon';


const columns = [
    { field: 'id', headerName: 'ردیف', width: 60,headerClassName: 'table-header'},
    {
      field: 'username',
      headerName: 'نام کاربر',
      width: 300,
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
      width: 270,
      headerClassName: 'table-header',
      sortable:true
        
  
    },
    { field: 'Actions', headerName: 'عملیات', 
    headerClassName: 'table-header',
    width: 160, renderCell: (params) => {
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

const AdminDashboard = () => {
  
    const [page,setPage]=useState(5)
    const [currentPage,setCurentPage]=useState(1)
    const [data,setData]=useState(rows)
    useEffect(()=>{
      if(rows.length < currentPage){
        console.log('disabled')
      }
    },[currentPage])

    const handleFilter = (e,params)=>{
        setData(item=>item.filter(p=>p.id === params.row.id))
    } 
  return (
    <div>
      <Statistics />
      <div className='flex flex-row justify-between items-center'>
        <div className='md:w-[390px] w-full bg-white rounded-xl'>
            <SearchBox />
        </div>
        <Link to={'/admin/dashboard/add-user'} className='bg-secondary px-16 py-3 flex flex-row justify-center items-center gap-x-2 rounded-lg cursor-pointer my-5'>
            <Plus />
            <span className='text-sm font-bold text-white'>افزودن کاربر</span>
        </Link>
      </div>
      <DataTable rows={rows} columns={columns} page={page} currentPage={currentPage} setCurrentPage={setCurentPage}  />
    </div>
  )
}

export default AdminDashboard
