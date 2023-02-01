import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CircleClose from '../svg/circle-close/CircleClose'
import DashboardSvg from '../svg/dashboard/DashboardSvg'

const AdminSidebar = ({setOpenSidebar}) => {
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
            <div onClick={()=>navigate('/admin/dashboard')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/admin/dashboard" || pathname === "/admin/dashboard/add-user") && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'} w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/admin/dashboard" || pathname === "/admin/dashboard/add-user") && 'font-bold text-white'} text-sidebar-item`}>
                        داشبورد
                </div>
            </div>
            <div onClick={()=>navigate('/admin/requests')} className={`grid grid-cols-12 px-7  py-4 relative ${pathname === "/admin/requests" && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${pathname === "/admin/requests" && 'font-bold text-white'} text-sidebar-item`}>
                        درخواست ها
                </div>
            </div>
            <div onClick={()=>navigate('/admin/tickets')} className={`grid grid-cols-12 px-7  py-4 relative ${(pathname === "/panel/tickets" || pathname === "/admin/tickets/create") && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={`col-span-10 flex flex-row justify-start items-center ${(pathname === "/panel/tickets" || pathname === "/admin/tickets/create") && 'font-bold text-white'} text-sidebar-item`}>
                        تیکت
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminSidebar
