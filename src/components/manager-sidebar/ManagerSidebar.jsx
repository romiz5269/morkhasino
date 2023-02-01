import CircleClose from 'components/svg/circle-close/CircleClose'
import DashboardSvg from 'components/svg/dashboard/DashboardSvg'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ManagerSidebar = ({setOpenSidebar}) => {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()
  return (
    <div className='w-full '>
        <div className='w-full p-6 flex flex-row md:justify-center justify-between items-center'>
            <h1 className=' md:text-3xl text-2xl font-bold text-white '>مرخصینو</h1>
            <span className='md:hidden block' onClick={()=>setOpenSidebar(false)}><CircleClose width={38} height={38} /></span>
        </div>
        <div className='flex flex-col h-full gap-y-3 mt-7'>
            <div onClick={()=>navigate('/manager/dashboard')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/manager/dashboard") && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'} w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard") && 'font-bold text-white'} text-sidebar-item`}>
                        داشبورد
                </div>
            </div>
            <div onClick={()=>navigate('/manager/admins-management')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/manager/admins-management" || pathname === "/manager/admins-management/add-admin") && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'} w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/manager/admins-management" || pathname === "/manager/admins-managemnet/add-admin" ) && 'font-bold text-white'} text-sidebar-item`}>
                        مدیریت ادمین ها
                </div>
            </div>
            <div onClick={()=>navigate('/manager/users-management')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/manager/users-management" || pathname === "/manager/users-management/add-user") && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'} w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/manager/users-management" || pathname === "/manager/users-management/add-user") && 'font-bold text-white'} text-sidebar-item`}>
                        مدیریت اعضا
                </div>
            </div>
            <div onClick={()=>navigate('/manager/requests')} className={`grid grid-cols-12 px-7  py-4 relative ${pathname === "/manager/requests" && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${pathname === "/manager/requests" && 'font-bold text-white'} text-sidebar-item`}>
                     مدیریت مرخصی ها
                </div>
            </div>
            <div onClick={()=>navigate('/manager/tickets')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/manager/tickets" ) && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/manager/tickets" ) && 'font-bold text-white'} text-sidebar-item`}>
                        بخش تیکت
                </div>
            </div>
            <div onClick={()=>navigate('/manager/rules')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/manager/rules" ) && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'} w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/manager/rules" ) && 'font-bold text-white'} text-sidebar-item`}>
                        قوانین و مقررات
                </div>
            </div>

        </div>
    </div>
  )
}

export default ManagerSidebar
