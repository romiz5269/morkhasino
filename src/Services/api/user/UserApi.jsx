import { Routes } from "Configs/routes/Routes.config"
import callApi from "Services/axios/private/PrivateAxios"

export async function AddUser(data) {
    return new Promise((resolve,reject)=>{
        callApi().post(Routes.ADD_USER,data,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => resolve(res.data)).catch(err => reject(err))
    })
}

export async function GetAllUsers(config){
    return new Promise((resolve,reject) => {
        callApi().get(`/my-user/?_page=${config.page}&_limit=${config.limit}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err?.response?.data))
    })
}

export async function DelSingleUser(id) {
    return new Promise((resolve,reject) => {
        callApi().delete(`${Routes.DEL_USER}/${id}/`).then(res=> resolve(res.data)).catch(err => reject(err?.response?.data))
    })
    
}

export async function FetchSingleUser(id){
    return new Promise((resolve,reject) => {
        callApi().get(`/my-user/${id}`).then(res => resolve(res.data)).catch(err => reject(err))
    })
}

export async function UpdateSingleUser(data){
    return new Promise((resolve,reject) => {
        callApi().put(`/my-user/${data.id}/`,data.data)
        .then(res=>resolve(res.data))
        .catch(err => reject(err))
    })
}

export async function getWorkFields() {
    return new Promise((resolve,reject) => {
        callApi().get('/work-field/').then(res => resolve(res?.data)).catch(err => reject(err))
    })
}