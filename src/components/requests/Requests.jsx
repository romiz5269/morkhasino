import { IconButton,  Pagination } from '@mui/material'
import CustomSelect from 'Components/global/custom-select/CustomSelect'
import DataTable from 'Components/global/data-table/DataTable'
import SearchBox from 'Components/global/search-box/SearchBox'
import PasswordEye from 'Components/global/svg/password-eye/PasswordEye'
import Plus from 'Components/global/svg/plus/Plus'
import React, { useRef, useState } from 'react'
import AddVacationForm from 'Validations/add-vacation/AddVacationForm'
import Modal from 'Components/global/modal/Modal'
import { DownloadTableExcel } from 'react-export-table-to-excel'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const options = [
    {
        label:"جدیدترین",
        value:"desc"
    },{
        label:"قدیمی ترین",
        value:"asc"
    }
]

const Requests = () => {
    const [page,setPage]=useState(5)
    const [currentPage,setCurrentPage]=useState(1)
    const [openAddVacationModal,setOpenAddVacationModal] = useState(false)
    const tableRef = useRef()
    const navigate = useNavigate()
    const userRole = useSelector(state => state.users.userRole)
    const columns = [
      { field: 'id', headerName: 'ردیف', width: 60,headerClassName: 'table-header'},
      {
        field: 'username',
        headerName: 'نام کاربر',
        width: 320,
        headerClassName: 'table-header',
        sortable:true,
      
      },
      {
        field: 'user_field',
        headerName: 'فیلد کاری',
        width: 170,
        headerClassName: 'table-header',
  
        sortable:true
      
      },
      {
        field: 'phone_number',
        headerName: 'شماره تماس',
        width: 250,
        headerClassName: 'table-header',
        sortable:true
      
  
      },
      {
        field: 'email',
        headerName: 'ایمیل',
        width: 250,
        headerClassName: 'table-header',
        sortable:true
          
    
      },
      {
          field: 'request',
          headerName: 'درخواست ها',
          width: 125,
          headerClassName: 'table-header',
          sortable:true
        
    
      },{ field: 'Actions', headerName: 'مشاهده', 
      headerClassName: 'table-header',
      width: 150, renderCell: (params) => {
        return (
          <div className='flex flex-row justify-center items-center gap-x-2  w-full'>
            
            <IconButton onClick={(e) =>navigate(`/${userRole}/dashboard/requests/detail/${params.row.id}`)}>
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
      { id: 1, username: 'مجتبی خورشیدکلاه1', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 2, username: 'مجتبی خورشیدکلاه2', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 3, username: 'مجتبی خورشیدکلاه3', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 4, username: 'مجتبی خورشیدکلاه4', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 5, username: 'مجتبی خورشیدکلاه5', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 6, username: 'مجتبی خورشیدکلاه6', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 7, username: 'مجتبی خورشیدکلاه7', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 8, username: 'مجتبی خورشیدکلاه8', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 9, username: 'مجتبی خورشیدکلاه9', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 10, username: 'مجتبی خورشیدکلاه10', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 11, username: 'مجتبی خورشیدکلاه11', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 12, username: 'مجتبی خورشیدکلاه12', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 13, username: 'مجتبی خورشیدکلاه13', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 14, username: 'مجتبی خورشیدکلاه14', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 15, username: 'مجتبی خورشیدکلاه15', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 16, username: 'مجتبی خورشیدکلاه16', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 17, username: 'مجتبی خورشیدکلاه17', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 18, username: 'مجتبی خورشیدکلاه18', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 19, username: 'مجتبی خورشیدکلاه19', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 20, username: 'مجتبی خورشیدکلاه20', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 21, username: 'مجتبی خورشیدکلاه21', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 22, username: 'مجتبی خورشیدکلاه22', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 23, username: 'مجتبی خورشیدکلاه23', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
      { id: 24, username: 'مجتبی خورشیدکلاه24', user_field: 'فرانت اند', phone_number: "09385745269",email:"test@test.com",request:"3 درخواست", },
  
      
    ];


  return (
    <div className='space-y-5'>
        {
                openAddVacationModal &&
                <div
                    className='backdrop-blur-md w-full h-full fixed top-0 pt-3 left-0 z-50 flex flex-col items-center justify-start'
                    // onClick={(e)=>setOpenAddTicketModal(false)}
                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                >
                    <Modal title={'ثبت مرخصی'} handleExitModal={setOpenAddVacationModal}>
                        <AddVacationForm />
                    </Modal>
                </div>
        }

        <div className='grid grid-cols-12 gap-4'>
            <div className='md:col-span-8 col-span-12 flex flex-row justify-between items-center'>
              <div className='md:w-[390px] w-full bg-white rounded-xl'>
                  <SearchBox />
              </div>

            </div>
          <div className='md:col-span-4 col-span-12'>
          <CustomSelect placeholder={'مرتب سازی بر اساس'} options={options} className="md:w-[250px] w-full text-sm border-0 outline-none " />
          </div>

            {/* <div className='col-span-4 '>
              
              <div className='flex flex-row justify-end items-center gap-x-4 w-full border-0 outline-none'>
                  <button onClick={()=>setOpenAddVacationModal(true)} className=' bg-secondary flex flex-row justify-center items-center gap-x-2 py-3 w-[250px] rounded-lg'>
                      <span className='text-sm text-white font-bold'>افزدن مرخصی</span>
                      <Plus />
                  </button>
              </div>
            </div> */}
        </div>
        {/* <div className='grid grid-cols-12 md:gap-x-8 gap-y-5 '>
            {
                [1,2,3,4,5,6,7,8].map(item=>(
                    <div className='md:col-span-3 col-span-12 shadow-main rounded-lg overflow-y-hidden'>
                        <RequestCard />
                    </div>
                ))
            }
        </div> */}
         {/* <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

          </DownloadTableExcel> */}
        <DataTable 
            ref={tableRef}
            rows={rows} 
            columns={columns} 
            page={page} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
         />
        <div  className='flex md:flex-row flex-col justify-between items-start gap-y-4 bg-white my-4 p-4 rounded-xl'>
          <Pagination  sx={{'& .MuiPagination-ul':{background:'transparent'}}} defaultPage="1" dir='ltr' page={currentPage}  count={Math.ceil((rows.length/page))} onChange={(e,p)=>setCurrentPage(p)}  variant="outlined" shape="rounded" />
          <div className='md:w-[200px] w-full border-[1px] '>
            <CustomSelect className='text-sm' defaultValue={{label:"نمایش 5 تایی",value:5}}  options={[{label:"نمایش 10 تایی",value:10},{label:"نمایش 5 تایی",value:5}]} onChange={(value)=>setPage(value.value)} />
          </div>
        </div>
    </div>
  )
}

export default Requests
