import React,{useState} from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast} from "react-toastify"

function Register() {

  const [formvalue, setFormvalue] = useState({
    id:"",
    name:"",
    email:"",
    username:"",
    password:"",
    terms:""    
  });

  const onchange  = (e) => {
    setFormvalue({...formvalue, id: new Date().getTime().toString(),[e.target.name]:e.target.value});
  }

  function validate() {
    var result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error('Name Field required');
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('email Field required');
    }
    if (formvalue.username == "" || formvalue.username == null) {
      result = false;
      toast.error('Username Field required');
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('Password Field required');
    }
    return result;
  }

  const redirect = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      const res = await axios.post(`http://localhost:3000/admin`, formvalue);
      // console.log(res.data)
      if(res.status > 200 && res.status < 300) {
        toast.success("Success!");
        setFormvalue({...formvalue, name:"", username:"", password:"", email:"", terms:""});
        redirect("/login")
      }
    }
  }

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo"><img src="../../images/logo.svg" /></div>
                  <h4>New here?</h4>
                  <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" value={formvalue.name}  name="name" onChange={onchange} id="exampleInputUsername1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" value={formvalue.username}  name="username" onChange={onchange} id="exampleInputUsername1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" value={formvalue.email}  name="email" onChange={onchange} id="exampleInputEmail1" placeholder="Email" />
                    </div>                 
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" value={formvalue.password}  name="password" onChange={onchange} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" value={formvalue.terms}  name="terms" onChange={onchange} />I agree to all Terms &amp; Conditions
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button onClick={onsubmit} type="submit"  className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" required>
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account?
                      <NavLink to="/login" className="text-primary">Login</NavLink>
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
    </div>
  );
}

export default Register;
