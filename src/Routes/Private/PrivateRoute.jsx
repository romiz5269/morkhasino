import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = ({role}) => {

    const userRole = useSelector(state => state.users.userRole)
    const userIn = useSelector(state => state.users.userIn)
    const loading = useSelector(state => state.users.userLoading)
    const navigate = useNavigate()

    // change body background color
    useEffect(()=>{
        document.body.style="background-color:#F5F5F9"
    },[])


    // /* redirect to role dashboard when role changes */
    // useEffect(()=>{
    //     navigate(`/${userRole}/dashboard`)
    // },[userRole])

    // useEffect(()=>{
    //     if(!userIn && !userRole){
    //         navigate('/login')
    //     }
    // },[userIn])

    // handle role base routing
    if(userIn && userRole){
       if(role === userRole){
        return <Outlet />
       }else{
         return <Navigate to={"/deny"} />
       }
    }else {
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute
