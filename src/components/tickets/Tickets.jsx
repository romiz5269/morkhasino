import React, { useState } from 'react'
import SearchBox from '../search-box/SearchBox'
import Plus from '../svg/plus/Plus'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Button, Pagination, Stack } from '@mui/material';
import Select from 'react-select'
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
      width: 570,
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
        width: 150,
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
    const [currentPage,setCurentPage]=useState(1)
    const navigate = useNavigate()
    console.log(page)
    const handleRowClick = (params) => {
      navigate(`/panel/tickets/detail/45`);
    };
  return (
    <div className='bg-white py-4 px-5 rounded-lg'>
      <div className='text-2xl font-bold'>لیست تیکت ها</div>
      <div className='flex md:flex-row flex-col gap-y-4 justify-between items-center my-5'>
        <div className='md:w-[320px] w-full'>
            <SearchBox />
        </div>
        <Link to={'/panel/tickets/create'} className='bg-main-blue flex flex-row justify-center items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer md:w-auto w-full'>
            <span className='text-white text-sm font-bold'>ایجاد تیکت</span>
            <Plus />
        </Link>
      </div>
        <Box 
        
          sx={{
            height: 320,
            width: '100%',
            '& .table-header': {
              backgroundColor: '#212135',
              color: '#fff',
              fontFamily:'yekanbakh',
              textAlign:'center',
              fontWeight: '600',
              borderRight:'none !important'
            },
            '& .table-row-odd': {
                background: 'rgba(132, 129, 129, 0.09)',
                fontFamily:'yekanbakh',
                textAlign:'center',
                fontWeight: '600',
                borderRight:'none !important'
            },
            '& .table-row-even': {
                fontFamily:'yekanbakh',
                background: 'rgba(132, 129, 129, 0.03)',
                textAlign:'center',
                fontWeight: '600',
                borderRight:'none !important'
            },
            '& .text-center': {
              textAlign:'center',
              fontWeight:'800'
          },
            
          }}
        >

            <DataGrid
                rows={rows}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'table-row-even' : 'table-row-odd'
                  }
                components={{
                  NoRowsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>,
                  NoResultsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>
                }}  
                columns={columns}
                hideFooterPagination
                hideFooter
                hideFooterSelectedRowCount
                pageSize={page}
                disableColumnMenu
                disableColumnFilter
                rowsPerPageOptions={[page]}
                page={currentPage-1}
                onPageChange={(p)=>setCurentPage(p)}
                showCellRightBorder={true}
               
                onRowClick={handleRowClick}
                
                // experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
        <div  className='flex md:flex-row flex-col justify-between items-start gap-y-4 bg-text-gray/10 my-4 p-4 rounded-lg'>
          <Pagination  sx={{'& .MuiPagination-ul':{background:'transparent'}}} defaultPage="1" dir='ltr' page={currentPage}  count={Math.ceil((rows.length/page))} onChange={(e,p)=>setCurentPage(p)}  variant="outlined" shape="rounded" />
          <div className='md:w-[200px] w-full'>
            <Select className='text-sm' defaultValue={{label:"نمایش 5 تایی",value:5}}  options={[{label:"نمایش 10 تایی",value:10},{label:"نمایش 5 تایی",value:5}]} onChange={(value)=>setPage(value.value)} />

          </div>
        </div>
    </div>
  )
}

export default Tickets
