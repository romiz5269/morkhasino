import { Box, Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
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
    width: 150, renderCell: (params) => {
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
      console.log(rows.length , currentPage)
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
        <div className='md:w-[300px] w-full'>
            <SearchBox />
        </div>
        <Link to={'/admin/dashboard/add-user'} className='bg-main-blue px-5 py-3 flex flex-row justify-center items-center gap-x-2 rounded-lg cursor-pointer my-5'>
            <span className='text-sm font-bold text-white'>افزودن کاربر</span>
            <Plus />
        </Link>
      </div>
      <Box 
        
          sx={{
            height: 410,
            width: '100%',
            '& .table-header': {
              backgroundColor: ' #F9FAFB',
              color: '#8A92A6',
              fontFamily:'yekanbakh',
              textAlign:'center',
              fontWeight: '600',
              border: '1px solid #EAECF0'
            },
            '& .table-row-odd': {
                fontFamily:'yekanbakh',
                textAlign:'center',
                fontWeight: '600',
                borderRight:'none !important'
            },
            '& .table-row-even': {
                fontFamily:'yekanbakh',
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
                rows={data}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'table-row-even' : 'table-row-odd'
                  }
                components={{
                  NoRowsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>,
                  NoResultsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>,
                  Pagination:()=><div className='flex flex-row justify-between items-center px-3 w-full my-2'>
                    <button disabled={currentPage <= 1 ? true : false } className="bg-white border-2 border-[#D0D5DD] px-3 py-2 disabled:bg-[#D0D5DD] rounded-lg font-['yekanbakh']" onClick={()=>setCurentPage(prev=>prev-1)}>قبلی</button>
                    <span className='text-sm font-semibold'>page{currentPage} of {Math.ceil(rows.length / page)}</span>
                    <button  disabled={currentPage >= Math.ceil(rows.length/page) ? true : false } className={"bg-white border-2 border-[#D0D5DD] px-3 py-2 disabled:bg-[#D0D5DD] rounded-lg font-['yekanbakh']"} onClick={()=>setCurentPage(prev=>prev+1)}>بعدی</button>
                  </div>
                }}  
                columns={columns}
                // hideFooterPagination
                // hideFooter
                hideFooterSelectedRowCount
                pageSize={page}
                disableColumnMenu
                disableColumnFilter
                disableSelectionOnClick
                
                rowsPerPageOptions={[page]}
                page={currentPage-1}
                onPageChange={(p)=>setCurentPage(p)}
                showCellRightBorder={true}
               
                // onRowClick={handleRowClick}
                
                // experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    </div>
  )
}

export default AdminDashboard
