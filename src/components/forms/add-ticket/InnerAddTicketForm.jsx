import UploadFileTicket from 'Components/tickets/add-ticket/components/UploadFile/UploadFileTicket'
import { Field, Form } from 'formik'
import React, { useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import Select from 'react-select'
import Plus from 'Components/global/svg/plus/Plus'

const options = [
    {
        label:'نوع اول',
        value:1
    }
]

const InnerAddTicketForm = (props) => {
    const [openUploadSection,setOpenUploadSection] = useState(false)
    
  return (
    <Form className='w-full space-y-5'>
        
        <div className='w-full'>
            <Field className="w-full shadow-sm border-2 border-main-color rounded-lg text-sm py-3 px-4" name="title" placeholder="عنوان تیکت را وارد کنید" />
        </div>
        <div className='w-full flex md:flex-row flex-col gap-y-8 justify-between items-center gap-x-8'>
            <Select options={options} className="w-full shadow-sm  rounded-lg text-sm  text-text-gray" name="type" placeholder="نوع تیکت را انتخاب کنید" onChange={(value)=>props.setFieldValue("type",value.value)} />
            <Select options={options} className="w-full shadow-sm  rounded-lg text-sm text-text-gray " name="prority" placeholder="اهمیت تیکت را انتخاب کنید" onChange={(value)=>props.setFieldValue("prority",value.value)} />
        </div>
        <div className='w-full'>
            <Field as="textarea" rows={10} className="w-full shadow-sm border-2 border-main-color rounded-lg text-sm py-3 px-4" name="description" placeholder="توضیحات خود را وارد کنید" />
        </div>
        {
            openUploadSection &&
            <UploadFileTicket formikProps={props} />
        }
        <div className='w-full flex md:flex-row flex-col gap-y-5 justify-between items-center gap-x-8'>
            <div  type='submit' className={`md:w-[226px] w-full ${openUploadSection ? 'bg-deny' : 'bg-main-blue'} text-white shadow-sm  rounded-lg text-sm   `} >
                {
                    openUploadSection ? 
                        <div onClick={()=>setOpenUploadSection(false)} className="cursor-pointer flex flex-row justify-center items-center gap-x-2 py-3">
                            <span>انصراف</span>
                            <HiXMark size={"20"} />
                        </div>
                    : 
                    <div onClick={()=>setOpenUploadSection(true)} className="cursor-pointer flex flex-row justify-center items-center gap-x-2 py-3">
                        <span>افزودن فایل ضمیمه</span>
                        <Plus />
                    </div>
                }
            </div>
            <button type='submit' className="md:w-[226px] w-full bg-confirm text-white shadow-sm  rounded-lg text-sm font-bold py-3 " >ثبت تیکت</button>
        </div>
    </Form>
  )
}

export default InnerAddTicketForm
