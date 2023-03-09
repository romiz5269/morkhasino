import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "Services/api/login/LoginApi";




const MainStates = {
    accessToken:"",
    refreshToken:""
}

export const LoginSlice = createSlice({
    name:"login",
    initialState:MainStates,
    
})

export default LoginSlice.reducer