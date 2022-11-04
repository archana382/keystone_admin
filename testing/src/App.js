import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';

import React from "react";
import Login from './Login';
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import store from './store';
import axios from "axios";
import AddUser from "./AddUser";
import Import from "./Import";
import Calendar from './Calendar/Calendar';



function App() {
  
  // const {isAuthenticated, user} = useSelector((state) => state.user);
  
  return (
    
    <Router>
      {/* {isAuthenticated && <Login user = {user}/>} */}
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/calendar" element={<Calendar/>}/>


      </Routes>
    </Router>

  
  );
}

export default App;
