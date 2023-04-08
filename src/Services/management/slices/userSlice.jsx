import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "Services/api/login/LoginApi";
import { AddUser, DelSingleUser, FetchSingleUser, GetAllUsers, getWorkFields, UpdateSingleUser } from "Services/api/user/UserApi";

export const UserLogin =  createAsyncThunk("users/UserLogin", async(data)=>{
    return await Login(data)
})
export const CreateUser = createAsyncThunk("users/CreateUser",async(data)=>{
    return await AddUser(data)
})
export const CatchAllUsers = createAsyncThunk("users/CatchAllUsers",async(config)=>{
    return await GetAllUsers(config)
})
export const DeleteUser = createAsyncThunk("users/DeleteUser", async(id)=>{
    return await DelSingleUser(id)
})
export const GetSingleUser = createAsyncThunk("users/GetSingleUser", async(id) => {
    return await FetchSingleUser(id)
})
export const UpdateUser = createAsyncThunk("users/UpdateUser",async(data) => {
    return await UpdateSingleUser(data)
})
export const CatchWorkFields = createAsyncThunk("users/CatchWorkFields",async()=>{
    return await getWorkFields()
})
const MainStates = {
    users:[],
    usersCount :[],
    singleUser:[],
    ownerData:[],
    work_fields:[],
    userRole:null,
    userIn:false,
    usersDataLodaing:true,
    accessToken:"",
    // refreshToken:"",
    status:{
        type:"",
        message:""
    }
}

export const UsersSlice = createSlice({
    name:"users",
    initialState:MainStates,
    reducers:{
        resetStatus:(state) =>{
            state.status.type = ""
            state.status.message = ""
        },
        setStatus : (state,action) => {
            state.status.type = action.payload.type
            state.status.message = action.payload.message
        },
        setLoginStates : (state,action) =>{
            state.userIn = action.payload.userIn
            state.userRole = action.payload.userRole
            state.ownerData = action.payload.data
        },
        userLogout : (state) => {
            state.userIn = false
            state.userRole = ""
            state.users =[]
            state.ownerData = []
            state.singleUser = []
            state.status.type = ""
            state.status.message = ""
            localStorage.removeItem("userIn")

        },
        resetSingleUser : (state) => {
            state.singleUser = []
        },
        filterUsers : (state,action) =>{
            console.log(action.payload)
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(UserLogin.fulfilled,(state,action)=>{
            state.ownerData = action.payload.user
            // console.log(state.ownerData)
            state.userIn = true
            localStorage.setItem("userIn",true)
            if(action.payload.user.role.name === "member")
            {
                state.userRole = "user"
            }else{
                state.userRole = action.payload.user.role.name
            }
            state.status.type = "success"
            state.status.message = action.payload.message
        })
        .addCase(UserLogin.rejected,(state,action)=>{
            console.log(action.error)
            localStorage.setItem("userIn",false)

            state.status.type = "error"
            state.status.message = action.error.message
        })
        .addCase(CreateUser.fulfilled,(state,action) => {
            
            state.status.type = "success"
            state.status.message = "کاربر با موفقیت ثبت شد"

        })
        .addCase(CreateUser.rejected,(state,error) => {
            console.log(error)
            state.status.type = "error"
            state.status.message = "مشکلی رخ داده است"
        })
        .addCase(CatchAllUsers.pending , (state) => {
            state.usersDataLodaing =true
        })
        .addCase(CatchAllUsers.fulfilled , (state,action) => {
            state.usersDataLodaing =false
            state.users = action.payload.results
            state.usersCount =action.payload.count
        })
        .addCase(CatchAllUsers.rejected , (state,action) => {
            state.users = []
            state.status.type = "error"
            state.status.message = action.error.message
        })
        .addCase(DeleteUser.fulfilled , (state,action) => {
            state.status.type = "success"
            state.status.message = action.payload.message
            
        })
        .addCase(DeleteUser.rejected , (state,action) => {
            state.status.type = "error"
            state.status.message = action.error.message
        })
        .addCase(GetSingleUser.fulfilled , (state,action) =>{
            state.singleUser = [action.payload]
        })
        .addCase(UpdateUser.fulfilled ,(state,action)=>{
            console.log(action.payload)
            state.status.type = "success"
            state.status.message = "کاربر با موفقیت ویرایش شد"
        })
        .addCase(CatchWorkFields.fulfilled, (state,action) =>{
            state.work_fields = [...action.payload]
        })
        .addCase(CatchWorkFields.rejected ,(state,action) =>{
            state.status.type = "error"
            state.status.message = action.error.message
        })
        
    }
})

export const  {
    setStatus,
    resetStatus,
    userLogout,
    setLoginStates,
    resetSingleUser,
    filterUsers
} = UsersSlice.actions
export default UsersSlice.reducer