import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { clearErrors, addStudent } from "./action/studentAction";
import { ADD_STUDENT_RESET } from "./constants/studentConstants";
import { addStudentReducer } from "./reducers/studentReducer";


// const categories = [
//     "Hot",
//     "Cold",
// ]
// const countries = [
//     "USA",
//     "Ireland",
//     "Canada",
//     "Austrila",
// ]
const AddStudent = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    
    const {  error, success } = useSelector((state) => state.student);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [valley, setValley] = useState("");
    const [qualification, setQualification] = useState("");


    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          alert.success("Student Added Successfully");
          navigate("/studentlist");
          dispatch({ type: ADD_STUDENT_RESET });
        }
      }, [dispatch, alert, error, navigate, success]);

    const addStudentSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("phone", phone);
        myForm.set("email", email);
        myForm.set("valley", valley);
        myForm.set("qualification", qualification);



        myForm.set("country", country);
        myForm.set("category", category);

        
        dispatch(addStudent(myForm));
        };
    return (
        <Fragment>
            <div className="addStudentContainer">
                <h1>Add Student</h1>
                
                <form className="addForm" encType="multipart/form-data" onSubmit={addStudentSubmitHandler} >
                    <div className="Name">
                        <input
                            type="name"
                            placeholder="Student Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="PhoneNumber">
                        <input
                            type="phone"
                            placeholder="Phone Number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                    </div>
                    <div className="Email">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="Valley">
                        <input
                            type="valley"
                            placeholder="Valley"
                            required
                            value={valley}
                            onChange={(e) => setValley(e.target.value)}
                            />
                    </div>
                    <div className="Qualification">
                        <input
                            type="qualificaqtion"
                            placeholder="Qualification"
                            required
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            />
                    </div>
                    <div className="Country">
                        <input
                            type="country"
                            placeholder="Country"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            />
                    </div>

                    {/* <Typography>Country</Typography>
                    <ul className="categoryBox">
                        {countries.map((country) => (
                            <li
                                className="category-link"
                                key={country}
                                onClick={() => setCountry(country)}
                            >
                                {country}
                          </li>  
                        ))}
                    </ul>

                    <Typography>Category</Typography>
                    <ul className="categoryBox">
                        {categories.map((category) => (
                            <li
                                className="category-link"
                                key={category}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                          </li>  
                        ))} */}
                    {/* </ul> */}
                    
                    <div className="Category">
                        <input
                            type="category"
                            placeholder="Student Category"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            />
                    </div>
                    {/* <Button
                        id="addUserBtn"
                        type="submit"
                        // disabled={loading ? true : false}
                        >
                        Add User
                    </Button> */}

                    <input type="submit" value="Add Student" className="addBtn"/>
                </form>
                
                {/* <input type="submit" value="Add User" className="addBtn"/> */}
                

            </div>
        </Fragment>
    )
};

export default AddStudent;