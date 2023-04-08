import ManagerSidebar from 'Components/sidebars/manager-sidebar/ManagerSidebar'
import AddIcon from 'Components/global/svg/add-icon/AddIcon'
import React, { useEffect, useState } from 'react'
import {HiBars3} from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import AdminSidebar from '../Components/sidebars/admin-sidebar/AdminSidebar'
import Sidebar from '../Components/sidebars/user-sidebar/Sidebar'
import DashboardSvg from '../Components/global/svg/dashboard/DashboardSvg'
import { useAuth } from 'hooks/persist/useAuth'
import { Routes } from 'Configs/routes/Routes.config'
import callApi from 'Services/axios/private/PrivateAxios'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setLoginStates, userLogout } from 'Services/management/slices/userSlice'

const checkLocationPathname = () =>{
  switch (window.location.pathname) {
      case "/user/dashboard":
        return "داشبورد";
      case "/user/dashboard/vacation":
        return "ثبت مرخصی";
      case "/user/dashboard/tickets":
          return "تیکت ها";
      case "/user/dashboard/tickets/detail/:id":
        return "تیکت ها";
      case "/user/dashboard/rules":
        return "قوانین و مقررات";
      case "/user/dashboard/tickets/create":
        return "افزودن تیکت";
      case "/admin/dashboard":
        return "داشبورد";
      case "/admin/dashboard/users/create":
        return "افزودن کاربر";
      case "/admin/dashboard/requests":
        return "مرخصی ها";
      case "/admin/dashboard/users":
        return "اعضا شرکت";
      case "/admin/dashboard/tickets":
          return "تیکت ها";
      case "/manager/dashboard":
        return "داشبورد";
      default:
        return "داشبورد";
  }
    
}

const MainLayout = ({children,adminLayout=false,managerLayout=false}) => {
  // const location = useLocation()
    const [openSidebar,setOpenSidebar]= useState(false)
    const [pathname,setPathname] = useState(checkLocationPathname())
    const dispatch = useDispatch()
    // const {userData,error} = useAuth()
   

    // useEffect(()=>{
    //   if(!localStorage.getItem("access_token")){
    //       dispatch(userLogout())
    //   }
    // },[])
    const location = useLocation()
    useEffect(()=>{
      setPathname(checkLocationPathname())
    },[location.pathname])
    const handleSidebar = (e) =>{
        e.preventDefault()
        setOpenSidebar(false)
    }
  return (
    <div className='grid grid-cols-12 px-8 py-7  '>
        {
            openSidebar && 
            <div className='backdrop-blur-sm w-full h-full fixed top-0 left-0 z-10 md:hidden  flex-col items-start justify-center'
            style={{backgroundColor: 'rgba(0,0,0,0.3)'}} 
            // onClick={(e)=>handleSidebar(e)}
            >
                <div style={{boxShadow:'0px 10.1248px 30.3745px rgba(17, 38, 146, 0.05)'}} className={` bg-white h-full z-20 w-4/5   transition-all ease-in duration-700 `}>
                    {
                      adminLayout ? <AdminSidebar setOpenSidebar={setOpenSidebar} /> : managerLayout ? <ManagerSidebar setOpenSidebar={setOpenSidebar} />:<Sidebar setOpenSidebar={setOpenSidebar} />
                    }
                </div>
            </div>
        }
      <div style={{boxShadow:' 0px 10.1248px 30.3745px rgba(17, 38, 146, 0.05)'}} className='md:col-span-2 md:flex flex-col hidden bg-white min-h-screen rounded-3xl '>
        {
                      adminLayout ? <AdminSidebar  /> : managerLayout ? <ManagerSidebar /> :<Sidebar  />
          }
      </div>
      <div className='md:col-span-10 col-span-12 space-y-5 md:pr-4'>
        <div className='grid grid-cols-12 gap-x-4 gap-y-4'>
            <div className='md:col-span-8 col-span-12 bg-white px-4 py-3 rounded-xl flex flex-row justify-between items-center gap-x-2'>
              <span className='md:hidden block' 
              onClick={()=>setOpenSidebar(true)}
              >
                <HiBars3 color='#4E5FFF' size={"25"} />
              </span>
              <div className='flex flex-row justify-start items-center gap-x-2'>
                <DashboardSvg color='#005adc' />
                <span className='text-secondary'>{pathname}</span>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12 flex flex-row justify-between items-center gap-x-4'>
              <div className='flex flex-row justify-center items-center gap-x-2 bg-white px-4 py-3 rounded-xl w-full'>
                <span className='text-lg font-semibold text-ticket-head'>26</span>
                <span>اسفند</span>
                <span>1401</span>
              </div>
              {/* <Link to={"/user/dashboard/tickets/create"} className='flex flex-row justify-center items-center gap-x-2 rounded-xl bg-secondary w-full py-3 hover:bg-blue-700 transition duration-500 cursor-pointer'>
                <AddIcon />
                <span className='text-white text-sm font-bold'>افزودن مرخصی</span>
              </Link> */}
            </div>
        </div>
        <div className=' md:pb-12 pb-8  '>
         {children}
        </div>
        
      </div>
    </div>
  )
}

export default MainLayout
