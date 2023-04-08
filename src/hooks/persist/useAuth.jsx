import { Routes } from "Configs/routes/Routes.config"
import { useEffect, useState } from "react"
import callApi from "Services/axios/private/PrivateAxios"

import useSWR from 'swr'

export const useAuth = () => {
    // const {data,error,isLoading} = useSWR('user_auth',()=>{
    //     return callApi().get('/login')
    // })
    const [data,setData] = useState([])
    const [error,setError] = useState("")
    useEffect(()=>{
        callApi().get(Routes.GET_USER).then(res => setData(res.data)).catch(err => setError(err))
    },[])

    return {
        userData:data,
        error
    }
   
}