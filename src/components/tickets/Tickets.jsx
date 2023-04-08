import React, { useState } from 'react'
import SearchBox from 'Components/global/search-box/SearchBox'
import Plus from 'Components/global/svg/plus/Plus'
import { IconButton, Pagination} from '@mui/material';
import Select from 'react-select'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DataTable from 'Components/global/data-table/DataTable';
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye';
import { useSelector } from 'react-redux';

  
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
    const userRole = useSelector(state => state.users.userRole)
    const handleRowClick = (params) => {
      navigate(`/${userRole}/dashboard/tickets/detail/${params.row.id && params?.row?.id}`);
    };
    
    const columns = [
      { field: 'id', headerName: 'ردیف', width: 60,headerClassName: 'table-header'},
      {
        field: 'created_date',
        headerName: 'زمان ایجاد',
        width: 180,
        headerClassName: 'table-header',
        sortable:false,
      
      },
      {
        field: 'ticket_type',
        headerName: 'نوع تیکت',
        width: 150,
        headerClassName: 'table-header',
  
        sortable:false
      
      },
      {
        field: 'title',
        headerName: 'عنوان',
        width: 540,
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
        
    
      },
      { field: 'Actions', headerName: 'مشاهده', 
      headerClassName: 'table-header',
      width: 150, renderCell: (params) => {
        return (
          <div className='flex flex-row justify-center items-center gap-x-2  w-full'>
            
            <IconButton onClick={(e) =>handleRowClick(params)}>
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

  return (
    <div className=' rounded-lg'>
      {/* <div className='text-2xl font-bold pr-1'>لیست تیکت ها</div> */}
      <div className='flex md:flex-row flex-col gap-y-4 justify-between items-center my-5'>
        <div className='md:w-[420px] w-full bg-white rounded-xl'>
            <SearchBox />
        </div>
        {
          (userRole === "user") &&
          <Link to={`${location.pathname}/create`} className='bg-secondary flex flex-row justify-center items-center gap-x-2  py-3 rounded-lg cursor-pointer md:w-[240px] w-full'>
            <span className='text-white text-sm font-bold'>ایجاد تیکت</span>
            <Plus />
        </Link>
        }
      </div>

        <DataTable rows={rows} columns={columns} page={page} currentPage={currentPage}
         setCurrentPage={setCurrentPage} 
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
