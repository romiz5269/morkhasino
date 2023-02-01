import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const [auth,setAuth] = useState(true)
    if(!auth){
        return <Navigate to={'/login'}  />
    }
    return <Outlet />
}

export default AdminRoute
