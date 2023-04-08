import ProfileAvatar from 'Components/profile-avatar/ProfileAvatar'
import LogoSvg from 'Components/global/svg/logo/LogoSvg'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CircleClose from 'Components/global/svg/circle-close/CircleClose'
import DashboardSvg from 'Components/global/svg/dashboard/DashboardSvg'

const Sidebar = ({setOpenSidebar}) => {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()
    const handleNavigate = (route) =>{
        if(setOpenSidebar){
            setOpenSidebar(false)
        }
        navigate(route)
        
    }
  return (
    <div className='w-full transition duration-500'>
        <div className='w-full  py-4 flex flex-row md:justify-start justify-between items-start relative h-[157px]'>
            <Link to={"/"} className='absolute top-12 right-12 left-6 md:text-3xl text-2xl z-50 font-bold text-secondary '>
                <LogoSvg />
            </Link>
            <div className='h-[109px] rounded-b-[40px] absolute bg-white z-40 w-full'></div>
            <div className='h-[120px] rounded-b-[40px] absolute bg-secondary z-30 w-full'></div>
            <div className='h-[128px] rounded-b-[40px] absolute bg-secondary/30 z-20 w-full'></div>
            <span className='md:hidden block absolute top-7 left-3  z-50 ' onClick={()=>setOpenSidebar(false)}><CircleClose width={38} height={38} color="#4E5FFF" /></span>
            {/* <div className='flex flex-col items-center absolute top-[85px] md:right-[65px] right-[90px] z-50 '>
                <span className='bg-white rounded-full p-1'>
                    <ProfileAvatar size={"86"} />
                </span>
                <div className='flex flex-col items-center gap-y-3 pt-2'>
                    <span className=' font-bold text-text-main'>مجتبی خورشیدکلاه</span>
                    <span className='text-xs  text-text-main'>توسعه دهنده فرانت</span>
                </div>
            </div> */}
        </div>
        <div className='flex flex-col items-end h-full gap-y-5 mt-10'>
            <div onClick={()=>handleNavigate("/user/dashboard")} className={`grid grid-cols-12 px-3  py-2 relative ${pathname === "/user/dashboard" && ' bg-secondary'} w-11/12 cursor-pointer rounded-r-full`} >
                <div className={` col-span-3 flex flex-row justify-center  items-center ml-4 ${pathname === "/user/dashboard" ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `} >
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7  flex flex-row justify-start items-center ${pathname === "/user/dashboard" ? 'font-bold text-white' : 'text-slate-500'} text-white mr-3`}>
                        داشبورد
                </div>
            </div>
            <div onClick={()=>handleNavigate('/user/dashboard/vacation')} className={`grid grid-cols-12 px-3  py-2 relative ${pathname === "/user/dashboard/vacation" && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row justify-center  items-center ml-4 ${pathname === "/user/dashboard/vacation" ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${pathname === "/user/dashboard/vacation" ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        ثبت مرخصی
                </div>
            </div>
            <div onClick={()=>handleNavigate('/user/dashboard/tickets')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/user/dashboard/tickets" || pathname === "/user/dashboard/tickets/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row justify-center  items-center ml-4 ${(pathname === "/user/dashboard/tickets" || pathname === "/user/dashboard/tickets/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/user/dashboard/tickets" || pathname === "/user/dashboard/tickets/create") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        تیکت
                </div>
            </div>
            {/* <div onClick={()=>navigate('/user/dashboard/rules')} className={`grid grid-cols-12 px-7  py-4 relative ${pathname === "/user/dashboard/rules" && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={` col-span-10 flex flex-row justify-start items-center ${pathname === "/user/dashboard/rules" && 'font-bold text-white'} text-slate-500`}>
                        قوانین و مقررات
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar
