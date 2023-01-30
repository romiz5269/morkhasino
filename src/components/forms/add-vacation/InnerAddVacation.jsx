import { Form } from 'formik'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Select from 'react-select'
import AddVacationRow from '../../add-vacation-row/AddVacationRow'
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
    const [vacationRows,setVacationRows]=useState([1])
    const [file,setFile]=useState([])
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': [],
            'document/*':[]
        },
        maxFiles: 1,
        multiple: false,
        maxSize: 20000000,
        onDrop: acceptedFiles => {
            setFile(acceptedFiles.map(item => Object.assign(item, {
              preview: URL.createObjectURL(item)
            })));
          }
    });
  

  
    const handleRemoveVacationRows = (index) =>{
        console.log(index)
        if(index > 0){
            let newVac = [...vacationRows]
            newVac.splice(index,1)
            setVacationRows(newVac)
        }
      
    }

    const thumbs = file.map(item => (
        <div  key={item.name} className='border-2 mt-5 border-dashed border-main-blue rounded-lg bg-custom-gray-200/5 h-30 flex flex-col justify-center items-center cursor-pointer mt-4 '>
            <img
            className='h-full w-full'
              src={item.preview}
              // Revoke data uri after image is loaded
              onLoad={() => { URL.revokeObjectURL(item.preview) }}
            />
        </div>
      ));

  return (
    <Form className='w-full flex flex-col  min-h-[460px] relative '>
        <Select name='type' className='text-sm' placeholder="نوع مرخصی خود را وارد کنید" options={options} onChange={(value)=>props.setFieldValue("type",value)}  />
        <div onClick={()=>setVacationRows([...vacationRows,vacationRows+1])} className='px-3 py-4 bg-main-blue  flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            <span className='text-sm font-bold text-white'>افزودن ردیف مرخصی جدید</span>
            <Plus />
        </div>
        <div className='space-y-4 w-full'>
            {
                vacationRows.map((vacation,index)=>(
                    <AddVacationRow key={vacation.toString()} handleRemoveVacationRows={handleRemoveVacationRows} row={index} />
                ))
            }
        </div>
        {/* <div className='min-h-[250px]  flex flex-col justify-center items-center text-lg text-text-gray'>
                هنوز ردیفی انتخاب نشده است            
        </div> */}
        {
            file.length > 0 ? <>{thumbs}</> :
            <div {...getRootProps({className: 'border-2 border-dashed border-main-blue rounded-lg bg-custom-gray-200/5 h-20 flex flex-col justify-center items-center cursor-pointer mt-4'})}>
                <input {...getInputProps()} />
                <p className='text-[13px] text-text-gray px-10'>برای آپلود فایل ضمیمه فایل را بکشید یا اینجا کلیک کنید</p>
            </div>
        }
        <button className='w-full px-3 py-4 bg-confirm  text-sm font-bold text-white flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            ثبت نهایی
        </button>
    </Form>
  )
}

export default InnerAddVacation
