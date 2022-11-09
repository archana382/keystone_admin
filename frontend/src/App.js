import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';
import React from "react";
import Login from './pages/Login';
import { useSelector } from "react-redux";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

import Import from "./pages/Import";
import NewStudent from "./pages/NewStudent";
import StudentDetails from "./pages/StudentDetails";
import Completed from "./pages/Completed";
import UploadPDF from "./pages/UploadPDF";
import UploadDownload from "./pages/UploadDownload";


import ProtectedRoute from "./Route/ProtectedRoute";
// 


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
       
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/new" element={<NewStudent/>}/>
        <Route path="/details" element={<StudentDetails/>}/>
        <Route path="/completed" element={<Completed/>}/>
        
        <Route path="/dashboard" element={<UserDashboard/>}/>
        <Route path="/uploadPDF" element={<UploadPDF/>}/>
        <Route path="/uploadDownload" element={<UploadDownload/>}/>

        
        <Route isAdmin={true} path="/admin/dashboard" element={<ProtectedRoute>{<AdminDashboard/>} </ProtectedRoute>}  />
        <Route isSuperAdmin={true} path="/superadmin/dashboard" element={<ProtectedRoute>{<SuperAdminDashboard/>} </ProtectedRoute>}  />



      </Routes>
    </Router>

  
  );
}

export default App;
