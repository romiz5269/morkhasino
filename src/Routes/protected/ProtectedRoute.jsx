import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const userIn = useSelector(state => state.users.userIn)
    const userRole = useSelector(state => state.users.userRole)
    // const userInLocal = u/
    if(userIn){
        return <Navigate to={`/${userRole}/dashboard`} />
    }else{
        return <Outlet />
    }
}

export default ProtectedRoute
