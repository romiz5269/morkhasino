import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const [auth,setAuth] = useState(true)
    if(!auth){
        return <Navigate to={'/login'}  />
    }
    return <Outlet />
}

export default PrivateRoute
