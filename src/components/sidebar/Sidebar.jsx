import LogoSvg from 'components/svg/logo/LogoSvg'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CircleClose from '../svg/circle-close/CircleClose'
import DashboardSvg from '../svg/dashboard/DashboardSvg'

const Sidebar = ({setOpenSidebar}) => {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()
  return (
    <div className='w-full transition duration-500'>
        <div className='w-full  py-4 flex flex-row md:justify-start justify-between items-start relative h-[157px]'>
            <h1 className='absolute top-8 right-6 left-6 md:text-3xl text-2xl z-50 font-bold text-secondary '>
                <LogoSvg />
            </h1>
            <div className='h-[109px] rounded-b-[40px] absolute bg-white z-40 w-full'></div>
            <div className='h-[120px] rounded-b-[40px] absolute bg-secondary z-30 w-full'></div>
            <div className='h-[128px] rounded-b-[40px] absolute bg-secondary/30 z-20 w-full'></div>
            <span className='md:hidden block absolute' onClick={()=>setOpenSidebar(false)}><CircleClose width={38} height={38} /></span>
        </div>
        <div className='flex flex-col items-end h-full gap-y-5 mt-7'>
            <div onClick={()=>navigate('/panel')} className={`grid grid-cols-12 px-3  py-2 relative ${pathname === "/panel" && ' bg-secondary'} w-11/12 cursor-pointer rounded-r-full`} >
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${pathname === "/panel" ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `} >
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7  flex flex-row justify-start items-center ${pathname === "/panel" ? 'font-bold text-white' : 'text-slate-500'} text-white mr-3`}>
                        داشبورد
                </div>
            </div>
            <div onClick={()=>navigate('/panel/vacation')} className={`grid grid-cols-12 px-3  py-2 relative ${pathname === "/panel/vacation" && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${pathname === "/panel/vacation" ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${pathname === "/panel/vacation" ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        ثبت مرخصی
                </div>
            </div>
            <div onClick={()=>navigate('/panel/tickets')} className={`grid grid-cols-12 px-3  py-2 relative ${(pathname === "/panel/tickets" || pathname === "/panel/tickets/create") && 'bg-secondary'}  w-11/12 cursor-pointer rounded-r-full `}>
                <div className={` col-span-3 flex flex-row md:justify-center justify-start items-center ml-4 ${(pathname === "/panel/tickets" || pathname === "/panel/tickets/create") ? 'bg-white' : 'bg-secondary/10'} w-[40px] h-[40px] rounded-full `}>
                    <DashboardSvg color='#4E5FFF' width={20} height={20}  />
                </div>
                <div className={`col-span-7 flex flex-row justify-start items-center ${(pathname === "/panel/tickets" || pathname === "/panel/tickets/create") ? 'font-bold text-white' : 'text-slate-500'}  mr-3`}>
                        تیکت
                </div>
            </div>
            {/* <div onClick={()=>navigate('/panel/rules')} className={`grid grid-cols-12 px-7  py-4 relative ${pathname === "/panel/rules" && 'before:absolute before:h-full before:w-1 before:bg-sidebar-item bg-sidebar-active/10'}  w-full cursor-pointer `}>
                <div className=' col-span-2 flex flex-row md:justify-end justify-start items-center ml-4'>
                    <DashboardSvg />
                </div>
                <div className={` col-span-10 flex flex-row justify-start items-center ${pathname === "/panel/rules" && 'font-bold text-white'} text-slate-500`}>
                        قوانین و مقررات
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar
