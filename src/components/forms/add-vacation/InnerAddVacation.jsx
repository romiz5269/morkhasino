import { Form } from 'formik'
import React from 'react'
import Select from 'react-select'
import CircleClose from '../../svg/circle-close/CircleClose'
import Plus from '../../svg/plus/Plus'


const options =[
    {
        label:"ساده",
        value:"1"
    },
    {
        label:"استعلاجی",
        value:"2"
    },
    {
        label:"ماموریت",
        value:"3"
    }
]

const InnerAddVacation = (props) => {
    console.log(props)
  return (
    <Form className='w-full flex flex-col  min-h-[460px] relative '>
        <Select name='type' className='text-sm' placeholder="نوع مرخصی خود را وارد کنید" options={options} onChange={(value)=>props.setFieldValue("type",value)}  />
        <div className='px-3 py-4 bg-main-blue  flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            <span className='text-sm font-bold text-white'>افزودن ردیف مرخصی جدید</span>
            <Plus />
        </div>
        <div className='bg-main-blue/10 p-4 relative rounded-lg flex flex-col gap-y-3'>
            <span className='absolute top-3 left-3 cursor-pointer'>
                <CircleClose color='#000AFF' width={19} height={19} />
            </span>
            <div className=''>date picker</div>
            <div className='flex flex-row justify-start items-center gap-x-5'>
                <input type="text" placeholder='از ساعت' className='py-3 px-2 rounded-lg' />
                <input type="text" placeholder='تا ساعت' className='py-3 px-2 rounded-lg' />
            </div>
            <textarea rows={4} placeholder="توضیحات" className='py-3 px-2 rounded-lg' />
        </div>
        {/* <div className='min-h-[250px]  flex flex-col justify-center items-center text-lg text-text-gray'>
                هنوز ردیفی انتخاب نشده است            
        </div> */}
        <div className='w-full px-3 py-4 bg-confirm bottom-0 absolute flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            <span className='text-sm font-bold text-white'>ثبت نهایی</span>
        </div>
    </Form>
  )
}

export default InnerAddVacation
