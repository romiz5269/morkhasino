import { Routes } from "Configs/routes/Routes.config"
import callApi from "Services/axios/private/PrivateAxios"
import PublicAxios from "Services/axios/public/publicAxios"

export async function Login(data){
    return new Promise((resolve,reject)=>{
        console.log(data)
        PublicAxios.post(Routes.LOGIN,data,{
            headers: { "Content-Type": "application/json" },
        }).then(res=>resolve(res.data)).catch(err=>reject(err?.response?.data?.detail[0]))
    })
}