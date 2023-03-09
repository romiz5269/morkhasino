import { Form } from 'formik'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { HiXMark } from 'react-icons/hi2'
import Select from 'react-select'
import AddVacationRow from 'Components/vacation/add-vacation-row/AddVacationRow'

const options =[
    {
        label:"روز کامل",
        value:"1"
    },
    {
        label:"ساعتی",
        value:"2"
    },
    {
        label:"استعلاجی",
        value:"3"
    },
    {
        label:"ماموریت",
        value:"4"
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
    
        if(index > 0){
            let newVac = [...vacationRows]
            newVac.splice(index,1)
            setVacationRows(newVac)
        }
      
    }

    const handleClearFile = () => {
        setFile([])
    }

    const thumbs = file.map((item,index) => (
        <div className="flex flex-row justify-between items-center gap-x-2 px-4 py-2  border-[0.8px] border-primary shadow-main" key={index}>
            <span className='text-secondary text-sm font-bold truncate text-main-blue'>{item?.name}</span> 
            <span className='cursor-pointer' onClick={handleClearFile}>
                <HiXMark className='text-red-700 text-2xl'/>
            </span>
        </div>
      ));

  return (
    <Form className='w-full flex flex-col  min-h-[460px] relative justify-center'>
        <Select defaultValue={options[0]} name='type' className='text-sm' placeholder="نوع مرخصی خود را وارد کنید" options={options} onChange={(value)=>props.setFieldValue("type",value)}  />
        {/* <div onClick={()=>setVacationRows([...vacationRows,vacationRows+1])} className='px-3 py-4 bg-main-blue  flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            <span className='text-sm font-bold text-white'>افزودن ردیف مرخصی جدید</span>
            <Plus />
        </div> */}
        <div className='space-y-4 w-full'>
            {
                vacationRows.map((vacation,index)=>(
                    <AddVacationRow FormikProps={props} key={vacation.toString()} handleRemoveVacationRows={handleRemoveVacationRows} row={index} />
                ))
            }
        </div>
        
        {
            props?.values?.type?.value === "3" &&
            <>
                {
                    file.length > 0 ? <div className='pt-4'>{thumbs}</div> :
                    <div {...getRootProps({className: 'border-2 border-dashed border-main-blue rounded-lg bg-custom-gray-200/5 h-20 flex flex-col justify-center items-center cursor-pointer mt-4'})}>
                        <input {...getInputProps()} />
                        <p className='text-[13px] text-text-gray px-10'>برای آپلود فایل ضمیمه فایل را بکشید یا اینجا کلیک کنید</p>
                    </div>
                }
            </>
        }
      
        <button className='w-full px-3 py-4 bg-confirm  text-sm font-bold text-white flex flex-row justify-center items-center gap-x-2 my-4 rounded-lg cursor-pointer'>
            ثبت نهایی
        </button>
    </Form>
  )
}

export default InnerAddVacation
