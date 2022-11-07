import React, {useRef, useState, useEffect, Fragment} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register} from "../action/userAction";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {useAlert} from "react-alert";
import './login.css';

const Login = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const {error, loading, isAuthenticated} = useSelector((state) => state.user);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user , setUser] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
  });
  
  const {name, username, email, password} = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginUsername, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("username", username);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(register(myForm));
  }

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/dashboard";


  useEffect(()=>{
    if (error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if(user.role === "admin" && isAuthenticated){
      navigate("/admin/dashboard")
    }
    if (isAuthenticated){
      navigate(redirect);
    }

  }, [dispatch, error, alert, navigate, isAuthenticated]);
  
  return (
<Fragment>
      <div className="LoginSignUpContainer">
                    <div className="LoginSignUpBox">
                      

                        <form className="loginForm"  onSubmit={loginSubmit}>
                          <div className="pt-4 pb-2">
                            <h4 className="card-title text-center pb-0 fs-4">Welcome to Keystone Portal</h4>
                            {/* <p className="text-center small">Enter your username & password to login</p> */}
                          </div>
                            <div className="loginUsername">
                                <PersonOutlineIcon/>
                                <input
                                    type="username"
                                    placeholder="Username"
                                    required 
                                    value={loginUsername} 
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                />
                            </div>

                            <div className="loginPassword">
                                <LockOpenIcon/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required 
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                <label className="form-check-label" for="rememberMe">Keep me logged In</label>
                              </div>
                            </div>
                            {/* <Link to="/password/forgot">Forget Password</Link> */}
                            <input type="submit" value="Login" className="loginBtn"/>
                        </form>
                        
                    </div>
                </div>
    </Fragment>
  );
  
}

export default Login;
