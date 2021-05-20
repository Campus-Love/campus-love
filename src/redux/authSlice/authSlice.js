import {createSlice} from "@reduxjs/toolkit";
import {profileData} from "../../Constants/profiledata"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isloggedIn:false,
        profileInfo:profileData,
        dateRequests:[],
        receivedDates:[1, 2]
    },
    reducers:{
        logIn:({isloggedIn})=>{
            isloggedIn = !isloggedIn
        },
        sendDateRequest:(state,{payload})=>{
            state.dateRequests.push(payload)
        },
        deleteDateRequest:(state,{payload})=>{
           // alert(payload)
           state.dateRequests =  state.dateRequests.filter(dates=>Number(dates.id) !==  Number(payload))
        }
    }
})
export const {logIn, sendDateRequest, deleteDateRequest} =  authSlice.actions
export default authSlice.reducer;