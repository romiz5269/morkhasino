import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import {BsPlusCircle} from 'react-icons/bs'
import { HiXMark } from 'react-icons/hi2';
import { toast } from 'react-toastify';
const UploadFileTicket = ({formikProps}) => {
    console.log(formikProps.values.file)
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        
        accept: {
            'image/png': [".png"],
            'image/jpeg': [".jpeg"],
            'image/HEIC': [".HEIC"]
        },
      onDrop: acceptedFiles => {
        if(acceptedFiles.length > 5 || files?.length > 4 || formikProps?.values?.file?.length > 4  ) {
            toast.error('شما نمی توانید بیشتر از 5 فایل آپلود کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{
            setFiles([...files, ...acceptedFiles.map((file, index) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))]);
            formikProps.setFieldValue("file",[...formikProps.values.file,...acceptedFiles])
            
        }
        
      }
    });

    const thumbs = files.map((file,index) => (
      <div className="flex flex-row justify-between items-center gap-x-2 px-4 py-2  border-[0.8px] border-primary shadow-main" key={index}>
            <span className='text-secondary text-sm font-bold truncate'>{file?.name}</span> 
            <span className='cursor-pointer' onClick={()=>setFiles(files=>files.filter(item=>item[index] !== file[index]))}>
                <HiXMark className='text-red-700 text-2xl'/>
            </span>
      </div>
    ));
  
    useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);
    
    return (
        <div className='thumbInner flex flex-row justify-start items-start flex-wrap gap-6  w-full'>
                {thumbs}

                <div {...getRootProps({className: `drop-zone cursor-pointer ${files.length === 10 && 'opacity-30'}`})}>
                    <input  {...getInputProps()} />
                    <span className=' flex flex-row justify-center items-center gap-x-2 px-20 py-2  border-[0.8px] border-primary shadow-main'>
                        <BsPlusCircle className='text-blue-700 text-2xl'/>
                        <span className='text-secondary text-sm font-bold'>کلیک کنید و یا فایل را رها کنید</span>
                    </span>
                </div>

        </div>
      );
}

export default UploadFileTicket
