import LogoSvg from 'components/svg/logo/LogoSvg'
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
        <div className='w-full  py-4 flex flex-row md:justify-start justify-between items-start relative h-[157px]'>
            <h1 className='absolute top-8 right-6 left-6 md:text-3xl text-2xl z-50 font-bold text-secondary '>
                <LogoSvg />
            </h1>
            <div className='h-[109px] rounded-b-[40px] absolute bg-white z-40 w-full'></div>
            <div className='h-[120px] rounded-b-[40px] absolute bg-secondary z-30 w-full'></div>
            <div className='h-[128px] rounded-b-[40px] absolute bg-secondary/30 z-20 w-full'></div>
            <span className='md:hidden block' onClick={()=>setOpenSidebar(false)}><CircleClose width={38} height={38} /></span>
        </div>
        <div className='flex flex-col items-end h-full gap-y-5 mt-7'>
            <div onClick={()=>navigate('/admin/dashboard')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/admin/dashboard" || pathname === "/admin/dashboard/add-user") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/admin/dashboard" || pathname === "/admin/dashboard/add-user") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/admin/dashboard" || pathname === "/admin/dashboard/add-user") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        داشبورد
                </div>
            </div>
            <div onClick={()=>navigate('/admin/users')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/admin/users" || pathname === "/admin/users/add-user") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/admin/users" || pathname === "/admin/users/add-user") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/admin/users" || pathname === "/admin/users/add-user") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                            اعضا شرکت
                </div>
            </div>
            <div onClick={()=>navigate('/admin/requests')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/admin/requests" || pathname === "/admin/requests/:id") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/admin/requests" || pathname === "/admin/requests/:id") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/admin/requests" || pathname === "/admin/requests/:id") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                         مرخصی ها
                </div>
            </div>
            <div onClick={()=>navigate('/admin/tickets')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/admin/tickets" || pathname === "/admin/tickets/:id") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/admin/tickets" || pathname === "/admin/tickets/:id") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/admin/tickets" || pathname === "/admin/tickets/:id") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        تیکت ها
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminSidebar
