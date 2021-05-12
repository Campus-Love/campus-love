import { createSlice } from '@reduxjs/toolkit';
import campusers from "../../Constants/fakedata"

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value:0,
    data:[...campusers],
    searchableData:campusers
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    
    },
    allUsers:({data})=>{
        

    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, {payload}) => {
      state.value +=payload.amount
    },
    returnBackWithData:(state)=>{
          state.data = campusers
    },
    searchDates:(state,{payload})=>{
      console.log(`The payload is here ${payload}`)
    if(payload){
      
      const modifiedData =  state.data.filter(person=>
        person.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ||person.location.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ||person.hobby.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        
      );
      if(modifiedData.length)
        state.data = modifiedData
        else
         state.data = campusers;


    }
     else if(payload == ""){
       state.data = campusers;
     }
    else 
    {
      state.data = campusers
    }
    

    }
  },
})

// Action creators are generated for each case reducer function
export const { allUsers, decrement, incrementByAmount, searchDates, returnBackWithData } = dataSlice.actions



//create selectors
export const selectdata = ()=>dataSlice.initialState.data ;
export const searchableData = (state)=>state.data.searchableData; 

export default dataSlice.reducer