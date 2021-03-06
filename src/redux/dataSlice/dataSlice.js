import { createSlice } from '@reduxjs/toolkit';
import campusers from "../../Constants/fakedata"

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value:0,
    data:[...campusers],
    searchableData:campusers,
    noResultsFound:false
  },
  reducers: {
    allUsers:({data})=>{
        

    },
    decrement: (state) => {
      state.value -= 1
    },
    
    returnBackWithData:(state)=>{
          state.data = campusers
    },
    searchDates:(state,{payload})=>{
    if(payload){
      
      const modifiedData =  state.data.filter(person=>
        person.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ||person.location.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ||person.hobby.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        
      );
      if(modifiedData.length)
      {
        state.data = modifiedData;
        state.noResultsFound = false
      }

        else
        {
         state.data = campusers;
         state.noResultsFound = true
        }
    }
    // //no results found
    // if(modifiedData.length ===0){
    //   state.noResultsFound 
    // }
     else if(payload == ""){
       state.data = campusers;
       state.noResultsFound = false
     }
    else 
    {
      state.data = campusers
      state.noResultsFound = false
    }
    

    }
  },
})

// Action creators are generated for each case reducer function
export const { allUsers,  searchDates, returnBackWithData } = dataSlice.actions



export default dataSlice.reducer