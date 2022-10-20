import React, {useRef, useState, useEffect, Fragment} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register} from "./userAction";
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
  const redirect = location.search ? location.search.split("=")[1] : "/login";


  useEffect(()=>{
    if (error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated){
      navigate(redirect);
    }

  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);
  
  return (
    <Fragment>
    <div className="login">
      <main>
    <div className="container">
      
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  {/* <img src="assets/img/logo.png" alt=""> */}
                  {/* <span className="d-none d-lg-block">Keystone Global</span> */}
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Welcome to Keystone Portal</h5>
                    {/* <p className="text-center small">Enter your username & password to login</p> */}
                  </div>

                  <form className="row g-3 needs-validation" novalidate onSubmit={loginSubmit}>

                    <div className="col-12">
                      <label for="yourUsername" className="form-label">
                        <PersonOutlineIcon/>
                        Username</label>
                      <div className="input-group has-validation">

                        {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input type="text" name="username" className="form-control" id="yourUsername" required
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        />
                        <div className="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourPassword" className="form-label">
                      <LockOpenIcon/>
                        
                        Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required
                      value={loginPassword}
                      onChange={(e)=>setLoginPassword(e.target.value)}
                      />
                      <div className="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" for="rememberMe">Keep me logged In</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

              

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
  {/* <!-- End #main --> */}
    </div>
    </Fragment>
  );
  
}

export default Login;
