import { Field, Form } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Plus from '../../svg/plus/Plus'

const options = [
    {
        label:'نوع اول',
        value:1
    }
]

const InnerAddTicketForm = (props) => {
  return (
    <Form className='bg-white rounded-lg px-5 py-4 space-y-5'>
        <div className='w-full flex flex-row justify-between items-center '>
            <span className='text-2xl font-bold'>افزودن تیکت</span>
            <Link to="/panel/tickets" className='px-8 py-2 bg-deny text-white rounded-lg' >
                انصراف 
            </Link>
        </div>
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
        <div className='w-full flex md:flex-row flex-col gap-y-5 justify-between items-center gap-x-8'>
            <div type='submit' className="md:w-[226px] w-full bg-main-blue text-white shadow-sm  rounded-lg text-sm  py-3 flex flex-row justify-center items-center gap-x-2" >
                <span>افزودن فایل ضمیمه</span>
                <Plus />
            </div>
            <button type='submit' className="md:w-[226px] w-full bg-confirm text-white shadow-sm  rounded-lg text-sm py-3 " >ثبت تیکت</button>
        </div>
    </Form>
  )
}

export default InnerAddTicketForm
