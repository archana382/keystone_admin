import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { clearErrors, addUser } from "../action/userAction";
import SideBar from '../pages/SideBar'
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
 
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HouseOutlinedIcon  from "@material-ui/icons/HouseOutlined";
import LockOpenOutlinedIcon   from "@material-ui/icons/LockOpenOutlined";

import { ADD_USER_RESET } from "../constants/userConstants";
import './addUser.css'

const AddUser = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    
    const {  error, success } = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    // const [category, setCategory] = useState("");
    
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");

    const categories = [
        "Call Center",
        "Counselor",
        
    ]

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          alert.success("User Added Successfully");
          navigate("/dashboard");
          dispatch({ type: ADD_USER_RESET });
        }
      }, [dispatch, alert, error, navigate, success]);

    const addUserSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("username", username);
        myForm.set("email", email);

        myForm.set("department", department);
        myForm.set("password", password);

        
        dispatch(addUser(myForm));
        };
    return (
        <Fragment>
            

        <div className="dashboard">
        <SideBar />
        
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={addUserSubmitHandler}
          >
            <h1>Add User</h1>

            <div className="Name">
            <CreateOutlinedIcon/> 
              <input
                type="name"
                placeholder="Employee Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="UserName">
            <PersonOutlineOutlinedIcon/>
              <input
                type="username"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="Email">
            <EmailOutlinedIcon/>

              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="Department">
            <HouseOutlinedIcon/> 
              <select onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Department</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div className="Password">
            <LockOpenOutlinedIcon/> 
              <input
                type="password"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

        

            <Button
              id="createProductBtn"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
      </div>
        </Fragment>
    )
};

export default AddUser;