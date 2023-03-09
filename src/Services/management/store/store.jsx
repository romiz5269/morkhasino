import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from 'Services/management/slices/userSlice'
import LoginReducer from 'Services/management/slices/loginSlice'
export default configureStore({
    reducer:{
        users:UsersReducer,
        login:LoginReducer
    }
})