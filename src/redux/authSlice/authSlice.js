import {createSlice} from "@reduxjs/toolkit";
import {profileData} from "../../Constants/profiledata"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isloggedIn:true,
        phone:null,
        numberErrors:null,
        profileInfo:profileData,
        dateRequests:[],
        receivedDates:[1, 2],

    },
    reducers:{
        logIn:(state)=>{
            state.isloggedIn = true;
            

            
        },
        logOut:(state)=>{
            state.isloggedIn = false;
            state.phone = null;

        },
        sendDateRequest:(state,{payload})=>{
            state.dateRequests.push(payload)
        },
        deleteDateRequest:(state,{payload})=>{
           // alert(payload)
           state.dateRequests =  state.dateRequests.filter(dates=>Number(dates.id) !==  Number(payload))
        },
        setNumberError:(state, {payload})=>{
            state.numberErrors = payload

        }
    }
})
export const {logIn, sendDateRequest, deleteDateRequest, logOut, setNumberError} =  authSlice.actions
export default authSlice.reducer;