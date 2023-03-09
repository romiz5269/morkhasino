import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "Services/api/login/LoginApi";

export const UserLogin =  createAsyncThunk("users/UserLogin", async(data)=>{
    return await Login(data)
})
const MainStates = {
    users:[],
    userRole:"manager",
    userIn:false,
    accessToken:"",
    refreshToken:"",
    loginStatus:{
        type:"",
        message:""
    }
}

export const UsersSlice = createSlice({
    name:"users",
    initialState:MainStates,
    reducers:{
        resetLoginStatus:(state) =>{
            state.loginStatus.type = ""
            state.loginStatus.message = ""
        }
    },
    extraReducers:{
        [UserLogin.fulfilled]:(state,action) => {
            console.log(action.payload)
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            localStorage.setItem("access_token",action.payload.access_token)
            localStorage.setItem("refresh_token",action.payload.refresh_token)
            state.userIn = true
            if(action.payload.user.role.name === "member")
            {
                state.userRole = "user"
            }else{
                state.userRole = action.payload.user.role.name
            }
            state.loginStatus.type = "success"
            state.loginStatus.message = action.payload.message
        },
        [UserLogin.rejected]:(state,action) => {
            state.loginStatus.type = "error"
            state.loginStatus.message = action.error.message
            

        }
    }
})

export const  {
    resetLoginStatus
} = UsersSlice.actions
export default UsersSlice.reducer