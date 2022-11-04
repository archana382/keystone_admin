import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';
import React from "react";
import Login from './pages/Login';
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Import from "./pages/Import";
import NewStudent from "./pages/NewStudent";
import StudentDetails from "./pages/StudentDeatils";
import Completed from "./pages/Completed";



import store from './store';
import axios from "axios";
import AddUser from "./pages/AddUser";
import Calendar from "./Calendar/Calendar";

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
        <Route path="/new" element={<NewStudent/>}/>
        <Route path="/details" element={<StudentDetails/>}/>
        <Route path="/completed" element={<Completed/>}/>


      </Routes>
    </Router>

  
  );
}

export default App;
