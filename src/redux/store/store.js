import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../authSlice/authSlice';
import counter from '../counter';
import  dataSlice  from '../dataSlice/dataSlice';

const preloadedState = {
    todos: [
      {
        text: 'Eat food',
        completed: true,
      },
      {
        text: 'Exercise',
        completed: false,
      },
    ],
    visibilityFilter: 'SHOW_COMPLETED',
  }
  //all reducers
  const reducer = {
    counter:counter,
    users:dataSlice,
    auth:authSlice
}
  
export default configureStore({
  reducer,
    devTools: process.env.NODE_ENV !== 'production',
    //preloadedState
})