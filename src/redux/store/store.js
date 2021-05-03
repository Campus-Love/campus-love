import { configureStore } from '@reduxjs/toolkit';
import counter from '../counter';

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
  const reducer = {
    counter:counter
}
  
export default configureStore({
  reducer,
    devTools: process.env.NODE_ENV !== 'production',
    //preloadedState
})