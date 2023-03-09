import Plus from 'Components/global/svg/plus/Plus'
import { ErrorMessage, Field, Form } from 'formik'
import React from 'react'

const innerAddRuleForm = (props) => {
  return (
    <Form className='bg-white rounded-lg p-4'>
        <div className='text-xl font-semibold py-4'> افزودن مقررات</div>
      <div>
        <Field className="w-full border-[0.8px] border-slate-200 rounded-lg my-2 py-3 px-4 min-h-[200px]" placeholder="توضیحات خود را وارد کنید" as="textarea" rows="10" name="description"  />
        <ErrorMessage name='description' component={"div"} className="text-sm text-deny pb-3" />
      </div>
      <div className='flex flex-row justify-end items-center'>
        <button className='bg-confirm px-8 py-3 rounded-lg flex flex-row justify-center items-center gap-x-3 mt-2'>
            <Plus />
            <span className='text-white font-bold'>ثبت مقررات</span>
        </button>
      </div>
    </Form>
  )
}

export default innerAddRuleForm
