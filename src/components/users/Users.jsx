import { Button, IconButton, Pagination, Tooltip } from '@mui/material';
import DataTable from 'Components/global/data-table/DataTable';
import Modal from 'Components/global/modal/Modal';
import SearchBox from 'Components/global/search-box/SearchBox';
import Plus from 'Components/global/svg/plus/Plus';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CatchAllUsers, DeleteUser, filterUsers } from 'Services/management/slices/userSlice';
import Select from 'react-select'
import { toast, ToastContainer } from 'react-toastify';
import { useNotif } from 'hooks/toast/useNotif';
import AddVacationForm from 'Validations/add-vacation/AddVacationForm'
import { getGridStringOperators } from '@mui/x-data-grid';
import callApi from 'Services/axios/private/PrivateAxios';

const Users = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [delModal,setDelModal] = useState(false)
    const dispatch = useDispatch()
    const userRole = useSelector(state=>state.users.userRole)
    const [delUserId,setDelUserId] = useState(null)
    const [openAddVacationModal,setOpenAddVacationModal] = useState(false)
    const [page,setPage]=useState(10)
    const [currentPage,setCurentPage]=useState(1)
    const usersDataLoading = useSelector(state => state.users.usersDataLoading)
    const users = useSelector(state => state.users.users)
    const ownerUser = useSelector(state => state.users.ownerData)
    const usersCount = useSelector(state => state.users.usersCount)
    const status = useSelector(state => state.users.status)
    useNotif(status,true)
    
    useEffect(()=>{
      console.log('again')
      dispatch(CatchAllUsers({page:currentPage,limit:page}))
    },[page,currentPage,delModal])

 
   
    console.log(currentPage,page)
    const handleSelectDelUserId = (id) => {
      setDelUserId(id)
      setDelModal(true)
    }
    const handleSelectAddVacationUserId = (id) => {
      setDelUserId(id)
      setOpenAddVacationModal(true)
    }

    const handleDelUser = (id) =>{
      if(ownerUser[0].id === id){
       
        toast.error("شما مجاز به تغییر وضعیت حساب کاربری خود نیستید", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          rtl:true,
          style:{fontFamily:'yekanbakh',fontSize:"15px",width:"400px"}
          });
          setDelModal(false)
      }else{
        setDelModal(false)
        setCurentPage(1)
        setPage(10)
        dispatch(DeleteUser(id))
        console.log('jooon')
        // dispatch(filterUsers(id))
        // navigate(location.pathname)
      }
      
    }
  const columns = [
    // { field: 'id', headerName: 'شناسه', width: 60,headerClassName: 'table-header',},
    {
      field: 'fullname',
      headerName: 'نام کاربر',
      width: 290,
      headerClassName: 'table-header',
      sortable:true,
      filterOperators : getGridStringOperators().filter(({value}) =>{
        return ['equals'].includes(value)
      })
    },
    {
      field: 'work_field',
      headerName: 'حوزه کاری',
      renderCell:(value)=> value.value.display_name ? <div className='mr-8'>{value.value.display_name}</div> : <div className='mr-8'>بدون عنوان</div>,
      width: 200,
      headerClassName: 'table-header',

      sortable:true,
      filterOperators : getGridStringOperators().filter(({value}) =>{
        return ['equals'].includes(value)
      })
    },
    {
      field: 'phone',
      headerName: 'شماره تماس',
      width: 190,
      headerClassName: 'table-header',
      sortable:true,
      filterOperators : getGridStringOperators().filter(({value}) =>{
        return ['equals'].includes(value)
      })

    },
    {
      field: 'email',
      headerName: 'ایمیل',
      width: 240,
      headerClassName: 'table-header',
      sortable:true,
      filterOperators : getGridStringOperators().filter(({value}) =>{
        return ['equals'].includes(value)
      })
  
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      renderCell:(value)=> value?.value?.name ? <div className='mr-8'>{value?.value?.name}</div> : <div className='mr-8'>بدون عنوان</div>,
      width: 160,
      headerClassName: 'table-header',
      sortable:true,
      filterOperators : getGridStringOperators().filter(({value}) =>{
        return ['equals'].includes(value)
      })
  
    },
    { field: 'Actions', headerName: 'عملیات', sortable:false,
    headerClassName: 'table-header',
    width: 260, renderCell: (params) => {
      return (
        <div className='flex flex-row justify-center items-center gap-x-2  w-full'>
          <Tooltip title='ویرایش'>
            <Button variant='contained' color='warning' onClick={() => navigate(`/${userRole}/dashboard/users/update/${params.row.id}`)}>
              <span className='text-xs text-white font-[yekanBakh]'>ویرایش</span>

            </Button>
          </Tooltip>
          <Tooltip title="تغییر وضعیت به رد شده">
          <Button variant='contained' color='error' onClick={() => handleSelectDelUserId(params.row.id)}>
           <span className='text-xs text-white font-[yekanBakh]'>تغییر وضعیت</span>
          </Button>
          </Tooltip>
          <Tooltip title="افزودن مرخصی">
            <Button variant='contained' onClick={(e) =>handleSelectAddVacationUserId(params.row.id)}>
             
              <span className='text-xs text-white font-[yekanBakh]'>افزودن مرخصی</span>
            </Button>
          </Tooltip>
          
          
        </div>
      );
    } }

  ];
   
    useEffect(()=>{
      if(users.length < currentPage){
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
                  <Button variant="contained"  onClick={() => handleDelUser(delUserId)} className='!bg-deny !px-8 !py-3 !rounded-lg !text-white font-bold !cursor-pointer !hover:bg-red-700 !transition duration-500'>تایید</Button>
                  <Button variant="outlined"   onClick={()=>setDelModal(false)} className="!border-[0.8px] !hover:bg-slate-200 !transition !duration-300 !cursor-pointer !px-8 !py-3 !rounded-lg">بازگشت</Button>
                </div>
            </Modal>
          </div>
      }
      {
                openAddVacationModal &&
                <div
                    className='backdrop-blur-md w-full h-full fixed top-0 pt-3 left-0 z-50 flex flex-col items-center justify-start'
                    // onClick={(e)=>setOpenAddTicketModal(false)}
                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                >
                    <Modal title={'ثبت مرخصی'} handleExitModal={setOpenAddVacationModal}>
                        <AddVacationForm userId={delUserId} />
                    </Modal>
                </div>
        }
       <div className='flex md:flex-row flex-col justify-between items-center pb-5'>
        <div className='md:w-[390px] w-full bg-white rounded-xl  '>
            <SearchBox />
        </div>
        <Link to={`/${userRole}/dashboard/users/create`} >
          <Button variant='contained' sx={{padding:'15px 0'}} className='bg-secondary md:w-[180px] w-full  flex flex-row justify-center items-center gap-x-2 rounded-lg cursor-pointer md:mt-0 mt-4 '>
            <Plus />
            <span className='text-sm font-bold text-white font-[yekanBakh]'>افزودن عضو</span>
          </Button>
        </Link>
      </div>
      
       
          <DataTable rows={users} columns={columns} page={page} currentPage={currentPage} setCurrentPage={setCurentPage} loading={users.length > 0 ? false : true}  />
          <div  className='flex md:flex-row flex-col justify-between items-start gap-y-4 bg-white my-4 p-4 rounded-lg'>
            <Pagination  sx={{'& .MuiPagination-ul':{background:'transparent'}}} defaultPage={currentPage}  page={currentPage}  count={Math.ceil((usersCount/page))} onChange={(e,p)=>setCurentPage(p)}  variant="outlined" shape="rounded" />
            <div className='md:w-[200px] w-full'>
              <Select className='text-sm' defaultValue={{label:`نمایش ${page} تایی`,value:page}}  options={[{label:"نمایش 10 تایی",value:10},{label:"نمایش 5 تایی",value:5}]} onChange={(value)=>setPage(value.value)} />

            </div>
          </div>
        
      
      <ToastContainer />
    </>
  )
}

export default Users
