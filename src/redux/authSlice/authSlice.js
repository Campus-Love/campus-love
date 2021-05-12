import {createSlice} from "@reduxjs/toolkit";
import {profileData} from "../../Constants/profiledata"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isloggedIn:false,
        profileInfo:profileData
    },
    reducers:{
        logIn:({isloggedIn})=>{
            isloggedIn = !isloggedIn
        }
    }
})
export default authSlice.reducer;