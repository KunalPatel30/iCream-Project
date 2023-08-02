import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Helmet from 'react-helmet'

function Login() {

  const redirect = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('adminid'))
    {
        redirect('/');
    }
  },[]);

  const [formvalue, setFormvalue] = useState({
    username: "",
    password: ""
  })

  const onchange = (e) => {
    setFormvalue({...formvalue, [e.target.name]: e.target.value});
  }
  const validate = () => {
    var res = true
    if (formvalue.username == "" || formvalue.username == null) {
        res = false;
        toast.error('Username required');
    }

    if (formvalue.password == "" || formvalue.password == null) {
        res = false;
        toast.error('Password required');
    }
    return res;
    }

    const onsubmit = async (e) => {
      e.preventDefault();
      if (validate()) {
          const result = await axios.get(`http://localhost:3000/admin?username=${formvalue.username}`);
          if (result.data.length > 0) {
              if (formvalue.password == result.data[0].password) {
                      localStorage.setItem('adminid', result.data[0].id);
                      localStorage.setItem('adminname', result.data[0].name);
                      localStorage.setItem('adminusername', result.data[0].username)
                      toast.success('login successful');
                      redirect('/');
              }
              else {
                  toast.error("Password doesn't match");
                  setFormvalue({ ...formvalue, password:""});
              }
          }
          else {
              toast.error("Username not found");
              setFormvalue({ ...formvalue, username:"", password:""});
          }}
      }
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo"><img src="../../images/logo.svg" /></div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input type="text" value={formvalue.username} onChange={onchange} name='username' className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" value={formvalue.password} onChange={onchange} name='password' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mt-3">
                      <Link style={{fontSize:"16px"}} className="btn btn-block btn-gradient-primary btn-lg  font-weight-medium auth-form-btn" onClick={onsubmit} to="/" >
                        Sign In
                      </Link>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">Forgot password?</a>
                    </div>
                    {/* <div className="mb-2">
                      <button type="button" className="btn btn-block btn-facebook auth-form-btn" >
                        <i className="mdi mdi-facebook mr-2" />
                        Connect using facebook
                      </button>
                    </div> */}
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?
                      <Link to="/register" className="text-primary">Sign Up</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
      <Helmet> 
        <script src="vendors/js/vendor.bundle.base.js"></script>
        <script src="vendors/js/vendor.bundle.addons.js"></script> 
        <script src="js/off-canvas.js"></script>
        <script src="js/misc.js"></script>
        <script src="js/dashboard.js"></script>
      </Helmet>
    </>
  );
}

export default Login;
