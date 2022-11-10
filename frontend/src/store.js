import {createStore,combineReducers, applyMiddleware } from "redux";
// import { configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { addUserReducer, userReducer } from "./reducers/userReducer";
import calendarReducer from "./reducers/calendarReducer";



const reducer = combineReducers({
    user : userReducer,
    // add : addUserReducer,
    calendar : calendarReducer

})

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
);

export default store;