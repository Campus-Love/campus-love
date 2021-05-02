import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer"
// initia state store reducers, composer enhancers

const initialstate = {name:"Nicolas"}

const middleWare = [...thunk]
const reducers = {name:"nicolas"}
const store = createStore(
    initialstate,
    rootReducer,
     composeWithDevTools(applyMiddleware(...middleWare))
     );
export default store