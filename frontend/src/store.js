import {combineReducers,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";


const reducer = combineReducers({
    user:userReducer
})
const middleware = [thunk];

const store = configureStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
);

export default store;