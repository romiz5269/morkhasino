import React, { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import Plus from '../svg/plus/Plus'
import VacationDetailBox from '../vacation-detail-box/VacationDetailBox'
const Vacation = () => {

    const [openVacationDetailModal,setOpenVacationDetailModal] = useState(false)
    const [openAddVacationModal,setOpenAddVacationModal] = useState(false)
    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth > 768) {
                setOpenAddVacationModal(false)
                setOpenVacationDetailModal(false)
            }
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        // handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    

    useEffect(() => {
        (openVacationDetailModal || openAddVacationModal) ? document?.body.classList.add('overflow-hidden') : document?.body.classList.remove('overflow-hidden')

    }, [openVacationDetailModal,openAddVacationModal])
  return (
    <div className='flex flex-col gap-y-6'>
         {/* open add ticket modal */}

        {
                openVacationDetailModal &&
                <div
                    className='backdrop-blur-md w-full h-full fixed top-0 pt-3 left-0 z-50 flex flex-col items-center justify-start'
                    // onClick={(e)=>setOpenAddTicketModal(false)}
                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                >
                    <Modal title={'جزییات مرخصی'} handleExitModal={setOpenVacationDetailModal}>
                        <VacationDetailBox />
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
                        this is form
                    </Modal>
                </div>
        }
      <div className='flex md:flex-row flex-col justify-between items-center gap-y-4'>
        <div className='md:w-[370px] w-full'>
            <input className='bg-white border-2 border-main-color w-full px-4 py-3 rounded-lg' type="text" placeholder="جستجو " />
        </div>
        <select className=' bg-white border-2 border-main-color px-4 py-3 md:w-[320px] w-full rounded-lg text-text-gray'>
            <option disabled={true} defaultChecked={true}>مرتب سازی بر اساس</option>
            <option value="جدیدترین">جدیدترین</option>
            <option value="قدیمی ترین">قدیمی ترین</option>
        </select>
      </div>
      <div className='grid grid-cols-12 md:gap-x-14 gap-x-0'>
        <div className='md:col-span-4 col-span-12 flex flex-col gap-y-4'>
            <button onClick={()=>setOpenAddVacationModal(true)} className='w-full bg-main-blue flex flex-row justify-center items-center gap-x-2 py-3 rounded-lg'>
                <span className='text-sm text-white font-bold'>افزدن مرخصی</span>
                <Plus />
            </button>
            <div onClick={()=>setOpenVacationDetailModal(true)} className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-secondary'>
                    <span className='text-sm text-white font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-white'>فروردین</span>
                    <span className='text-sm text-white font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-main-blue'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-white '>مرخصی</span>
                        <span className='text-sm font-bold text-white'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-white '>مرخصی</span>
                        <span className='text-sm font-bold text-white'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col rounded-lg overflow-y-hidden cursor-pointer'>
                <div className='p-4 flex flex-row gap-x-1 justify-center items-center bg-main-blue/20'>
                    <span className='text-sm text-secondary font-normal'>مرخصی</span>
                    <span className='text-lg font-bold text-secondary'>فروردین</span>
                    <span className='text-sm text-secondary font-normal'>ماه</span>
                </div>
                <div className='p-4 flex flex-row gap-x-1 justify-between items-center bg-white'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <span className='text-sm text-text '>مرخصی</span>
                        <span className='text-sm font-bold text-main-blue'>1 روز 2 ساعت</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:col-span-8 hidden md:block'>
           <VacationDetailBox />
        </div>
      </div>
    </div>
  )
}

export default Vacation
