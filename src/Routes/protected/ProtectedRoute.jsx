import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [auth,setAuth]=useState(false)
    if(auth){
        return <Navigate to={'/panel'} />
    }
    return children
}

export default ProtectedRoute
