import React, { useState } from 'react'
import SearchBox from '../search-box/SearchBox'
import Plus from '../svg/plus/Plus'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Button, Pagination, Stack } from '@mui/material';
import Select from 'react-select'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import DataTable from 'components/data-table/DataTable';
const columns = [
    { field: 'id', headerName: 'ردیف', width: 60,headerClassName: 'table-header'},
    {
      field: 'created_date',
      headerName: 'زمان ایجاد',
      width: 150,
      headerClassName: 'table-header',
      sortable:false,
    
    },
    {
      field: 'ticket_type',
      headerName: 'نوع تیکت',
      width: 100,
      headerClassName: 'table-header',

      sortable:false
    
    },
    {
      field: 'title',
      headerName: 'عنوان',
      width: 640,
      headerClassName: 'table-header',
      sortable:false
    

    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 110,
      headerClassName: 'table-header',
      sortable:false
        
  
    },
    {
        field: 'updated_date',
        headerName: 'آخرین بروزرسانی',
        width: 135,
        headerClassName: 'table-header',
        sortable:false
      
  
    }

  ];
  
  const rows = [
    { id: 1, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05", },
    { id: 2, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 3, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 4, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 5, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 6, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 7, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 8, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 9, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 10, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 11, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 12, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 13, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 14, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 15, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 16, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 17, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 18, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 19, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 20, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    { id: 21, created_date: '01/12/05', ticket_type: 'مرخصی', title: "اضافه مرخصی",status:"باز",updated_date:"01/12/05" },
    
  ];

const Tickets = () => {
    const [page,setPage]=useState(5)
    const [currentPage,setCurrentPage]=useState(1)
    const navigate = useNavigate()
    const location = useLocation()

    const handleRowClick = (params) => {
      navigate(`/panel/tickets/detail/45`);
    };

  return (
    <div className=' rounded-lg'>
      {/* <div className='text-2xl font-bold pr-1'>لیست تیکت ها</div> */}
      <div className='flex md:flex-row flex-col gap-y-4 justify-between items-center my-5'>
        <div className='md:w-[420px] w-full bg-white rounded-xl'>
            <SearchBox />
        </div>
        <Link to={`${location.pathname}/create`} className='bg-secondary flex flex-row justify-center items-center gap-x-2 px-16 py-3 rounded-lg cursor-pointer md:w-auto w-full'>
            <span className='text-white text-sm font-bold'>ایجاد تیکت</span>
            <Plus />
        </Link>
      </div>

        <DataTable rows={rows} columns={columns} page={page} currentPage={currentPage}
         setCurrentPage={setCurrentPage} handleRowClick={handleRowClick}
          />

        <div  className='flex md:flex-row flex-col justify-between items-start gap-y-4 bg-white my-4 p-4 rounded-lg'>
          <Pagination  sx={{'& .MuiPagination-ul':{background:'transparent'}}} defaultPage="1" dir='ltr' page={currentPage}  count={Math.ceil((rows.length/page))} onChange={(e,p)=>setCurrentPage(p)}  variant="outlined" shape="rounded" />
          <div className='md:w-[200px] w-full'>
            <Select className='text-sm' defaultValue={{label:"نمایش 5 تایی",value:5}}  options={[{label:"نمایش 10 تایی",value:10},{label:"نمایش 5 تایی",value:5}]} onChange={(value)=>setPage(value.value)} />

          </div>
        </div>
    </div>
  )
}

export default Tickets
