import MainLayout from 'layout'
import NotFound from 'pages/not-found'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const [userType,setUserType] = useState("user")
    useEffect(()=>{
        document.body.style="background-color:#F5F5F9"
    },[])
    if(userType === "manager"){
        return(
            <MainLayout managerLayout={true}>
                <Outlet />
            </MainLayout>
        )
    }else if(userType === "admin"){
        return(
            <MainLayout adminLayout={true}>
                <Outlet />
            </MainLayout>
        )
    }else if(userType === "user"){
        return(
            <MainLayout>
                <Outlet />
            </MainLayout>
        )
    }else if(userType === "" || userType === undefined || userType === null){
        <Navigate to={'/login'} />
    }else{
        return(
            <NotFound />
        )
    }
}

export default PrivateRoute
