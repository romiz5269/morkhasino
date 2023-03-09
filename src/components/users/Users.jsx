import { IconButto, IconButton, Tooltip } from '@mui/material';
import DataTable from 'Components/global/data-table/DataTable';
import Modal from 'Components/global/modal/Modal';
import SearchBox from 'Components/global/search-box/SearchBox';
import EditPencil from 'Components/global/svg/edit-pencil/EditPencil';
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye';
import Plus from 'Components/global/svg/plus/Plus';
import TrashIcon from 'Components/global/svg/trash/TrashIcon';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate()
  const [delModal,setDelModal] = useState(false)
    const userRole = useSelector(state=>state.users.userRole)
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
          <Tooltip title='ویرایش'>
            <IconButton onClick={(e) => navigate(`/${userRole}/dashboard/users/update/${params.row.id}`)}>
              <EditPencil
              
              variant="contained"
              size='20'
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton onClick={(e) =>setDelModal(true)}>
              <TrashIcon
              
              variant="contained"
              size='20'
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="افزودن مرخصی">
            <IconButton onClick={(e) =>console.log(e,params)}>
              <Plus
              color='#333'
              variant="contained"
              size='20'
              />
            </IconButton>
          </Tooltip>
          
          
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
    <>
       {
        delModal &&
        <div
            className='backdrop-blur-md w-full h-full fixed top-0 pt-56 left-0 z-50 flex flex-col items-center justify-start '
            // onClick={(e)=>setOpenAddTicketModal(false)}
            style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
        >
            <Modal height='300' 
            className={"bg-white px-4 py-3 md:h-[${height}] h-[${height + 100}] z-50 xl:w-3/12 lg:w-2/6 md:w-3/5 md:mt-8 w-full box-shadow-1 sm:rounded-lg overflow-y-auto transition-all duration-300"}
            title={''} handleExitModal={setDelModal}>
                <div className='text-xl'>آیا از حذف کاربر اطمینان دارید ؟</div>
                <div className='flex flex-row justify-center items-center gap-x-8 mt-8'>
                  <button className='bg-deny px-8 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-red-700 transition duration-500'>تایید</button>
                  <button onClick={()=>setDelModal(false)} className="border-[0.8px] hover:bg-slate-200 transition duration-300 cursor-pointer px-8 py-3 rounded-lg">بازگشت</button>
                </div>
            </Modal>
          </div>
      }
       <div className='flex md:flex-row flex-col justify-between items-center pb-5'>
        <div className='md:w-[390px] w-full bg-white rounded-xl  '>
            <SearchBox />
        </div>
        <Link to={`/${userRole}/dashboard/users/create`} className='bg-secondary md:w-[240px] w-full py-3 flex flex-row justify-center items-center gap-x-2 rounded-lg cursor-pointer md:mt-0 mt-4'>
            <Plus />
            <span className='text-sm font-bold text-white'>افزودن عضو</span>
        </Link>
      </div>
      <DataTable rows={rows} columns={columns} page={page} currentPage={currentPage} setCurrentPage={setCurentPage}  />
    </>
  )
}

export default Users
