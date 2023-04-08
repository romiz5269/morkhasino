import { useMemo } from "react"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetStatus } from "Services/management/slices/userSlice";

export const useNotif = (status,tracker=false) =>{
    const dispatch = useDispatch()
    useMemo(()=>{
        console.log('ran')
        if(status?.type === "error" && status?.message){
            toast.error(status?.message, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              rtl:true,
              style:{fontFamily:'yekanbakh',fontSize:"15px"}
              });
        }else if(status?.type === "success" && status?.message){
            toast.success(status?.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                rtl:true,
                style:{fontFamily:'yekanbakh',fontSize:"15px"}
                });
        }
          const timeout = setTimeout(()=>{
            dispatch(resetStatus())
          },3000)
          return () => clearTimeout(timeout)
    },[tracker && status])
}