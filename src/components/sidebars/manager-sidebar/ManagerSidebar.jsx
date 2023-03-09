import CircleClose from 'Components/global/svg/circle-close/CircleClose'
import DashboardSvg from 'Components/global/svg/dashboard/DashboardSvg'
import LogoSvg from 'Components/global/svg/logo/LogoSvg'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ManagerSidebar = ({setOpenSidebar}) => {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()
  return (
    <div className='w-full '>
        <div className='w-full  py-4 flex flex-row md:justify-start justify-between items-start relative h-[157px]'>
            <Link to={"/manager/dashboard"} className='absolute top-12 right-12 left-6 md:text-3xl text-2xl z-50 font-bold text-secondary '>
                <LogoSvg />
            </Link>
            <div className='h-[109px] rounded-b-[40px] absolute bg-white z-40 w-full'></div>
            <div className='h-[120px] rounded-b-[40px] absolute bg-secondary z-30 w-full'></div>
            <div className='h-[128px] rounded-b-[40px] absolute bg-secondary/30 z-20 w-full'></div>
            <span className='md:hidden block' onClick={()=>setOpenSidebar(false)}><CircleClose width={38} height={38} /></span>
        </div>
        <div className='flex flex-col items-end h-full gap-y-5 mt-7'>
            <div onClick={()=>navigate('/manager/dashboard')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/dashboard" || pathname === "/manager/dashboard/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/dashboard" || pathname === "/manager/dashboard/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard" || pathname === "/manager/dashboard/create") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                        داشبورد
                </div>
            </div>
            {/* <div onClick={()=>navigate('/manager/admins')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/admins" || pathname === "/manager/admins/add-admin") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/admins" || pathname === "/manager/admins/add-admin") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/admins" || pathname === "/manager/admins/add-admin") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                         مدیران 
                </div>
            </div> */}
            <div onClick={()=>navigate('/manager/dashboard/users')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/dashboard/users" || pathname === "/manager/dashboard/users/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/dashboard/users" || pathname === "/manager/dashboard/users/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard/users" || pathname === "/manager/dashboard/users/create") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                        اعضا شرکت
                </div>
            </div>
            <div onClick={()=>navigate('/manager/dashboard/requests')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/dashboard/requests" || pathname === "/manager/dashboard/requests/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/dashboard/requests" || pathname === "/manager/dashboard/requests/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard/requests" || pathname === "/manager/dashboard/requests/create") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                        مرخصی ها
                </div>
            </div>
            <div onClick={()=>navigate('/manager/dashboard/tickets')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/dashboard/tickets" || pathname === "/manager/dashboard/tickets/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/dashboard/tickets" || pathname === "/manager/dashboard/tickets/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard/tickets" || pathname === "/manager/tickets/create") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                        تیکت ها
                </div>
            </div>
            <div onClick={()=>navigate('/manager/dashboard/rules')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/manager/dashboard/rules" || pathname === "/manager/dashboard/rules/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/manager/dashboard/rules" || pathname === "/manager/dashboard/rules/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/manager/dashboard/rules" || pathname === "/manager/dashboard/rules/create") ? 'font-bold text-white' : 'text-slate-500'} text-sm mr-3`}>
                        قوانین و مقررات
                </div>
            </div>

        </div>
    </div>
  )
}

export default ManagerSidebar
