import React, { useEffect, useLayoutEffect, useState } from 'react'
import {HiBars3} from 'react-icons/hi2'
import { useLocation } from 'react-router-dom'
import ProfileAvatar from '../components/profile-avatar/ProfileAvatar'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardSvg from '../components/svg/dashboard/DashboardSvg'

const checkLocationPathname = () =>{
  switch (window.location.pathname) {
      case "/panel":
        return "داشبورد";
      case "/panel/vacation":
        return "ثبت مرخصی";
      case "/panel/tickets":
          return "تیکت ها";
      case "/panel/rules":
        return "قوانین و مقررات";
      case "/panel/tickets/create":
        return "افزودن تیکت";
      default:
        return "داشبورد";
  }
    
}

const MainLayout = ({children}) => {
  // const location = useLocation()
    const [openSidebar,setOpenSidebar]= useState(false)
    const handleSidebar = (e) =>{
        e.preventDefault()
        setOpenSidebar(false)
    }
  return (
    <div className='grid grid-cols-12'>
        {
            openSidebar && 
            <div className='backdrop-blur-sm w-full h-full fixed top-0 left-0 z-10 md:hidden  flex-col items-start justify-center'
            style={{backgroundColor: 'rgba(0,0,0,0.3)'}} 
            // onClick={(e)=>handleSidebar(e)}
            >
                <div className={` bg-sidebar h-full z-20 w-4/5   transition-all ease-in duration-700 `}>
                    <Sidebar setOpenSidebar={setOpenSidebar} />
                </div>
            </div>
        }
      <div className='md:col-span-2 md:flex flex-col hidden bg-sidebar min-h-screen'>
        <Sidebar />
      </div>
      <div className='md:col-span-10 col-span-12'>
        <div className='bg-white border-b-2 border-b-main-color md:px-10 px-4 py-3 w-full'>
            <div className='flex flex-row justify-between items-center'>
                <div className='md:hidden block'>
                    <span onClick={()=>setOpenSidebar(true)}><HiBars3 size={30} /></span>
                </div>
                <div className='flex flex-row justify-center items-center gap-x-3'>
                    {/* <img src='images/png/hand.png' /> */}
                    <h1 className=' md:text-3xl text-2xl font-bold md:hidden block'>مرخصینو</h1>

                   <div className='md:flex hidden flex-row justify-center items-center gap-x-3'>
                    <DashboardSvg color='#326ABD' width={30} height={30} />
                    <span className='md:text-2xl text-secondary font-bold'>
                      {checkLocationPathname()}
                    </span>
                   </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-x-10'>
                    <ProfileAvatar />
                    <span className="md:text-xl font-bold md:block hidden">22 بهمن 1400</span>
                </div>
            </div>
        </div>
        <div className='container pt-12 md:pb-12 pb-24 '>
         {children}
        </div>
        
      </div>
    </div>
  )
}

export default MainLayout
