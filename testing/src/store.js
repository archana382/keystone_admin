import {createStore,combineReducers, applyMiddleware } from "redux";
// import { configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { addUserReducer,userReducer } from "./reducers/userReducer";
import { allStudentsReducer, studentDetailsReducer, studentReducer } from "./reducers/studentReducer";

import calendarReducer from "./reducers/calendarReducer";
// import { addUserReducer } from "./reducers/addUserReducer";



const reducer = combineReducers({
    user : userReducer,
    // user: addUserReducer,
    allStudents : allStudentsReducer,
    studentDetails: studentDetailsReducer,
    calendar : calendarReducer,
    student : studentReducer

})

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
);

export default store;