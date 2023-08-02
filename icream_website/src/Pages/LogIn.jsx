import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LogIn() {

  const redirect = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem('id')) {
  //     redirect('/')
  //   }
  // },[])

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: ""
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value});
  }

  function validate() {
    var result = true;
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('email Field required');
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('password Field required');
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      if (res.data.length > 0) {
        if(res.data[0].password == formvalue.password){
          if(res.data[0].status == "Unblock") {

            //session varible store in browser
            localStorage.setItem('id',res.data[0].id);
            localStorage.setItem('name',res.data[0].name);

            toast.success("LogIn Successfull !");
            setFormvalue({...formvalue,email:"",password:""});
            return redirect('/');

          }
          else {
            toast.error("LogIn Failed due to Blocked User !");
            setFormvalue({...formvalue,email:"",password:""});
          }
        }
        else {
          toast.error("LogIn Failed Please enter correct password !");
          setFormvalue({...formvalue,email:"",password:""});
        }
      }
      else {
        toast.error("LogIn Failed Please enter correct email !");
        setFormvalue({...formvalue,email:"",password:""});
      }
    }
  }


  return (
    <div>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="section-title position-relative text-center mb-4"> Log In </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="contact-form bg-light rounded p-5">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate" >
                    <div className="form-row">
                      <div className="col-sm-12  control-group">
                        <input type="email" className="form-control p-4 mt-3" value={formvalue.email} name="email" onChange={onchange} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12  control-group">
                        <input type="password" className="form-control p-4 mt-3" value={formvalue.password} name="password" onChange={onchange} id="email" placeholder="Your Password" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary offset-4 py-3 px-5 mt-3" href="javascript:void(0)" onClick={onsubmit} type="submit" id="sendMessageButton"> Log In </button>
                      <p className='offset-3 mt-4'>Create an Account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LogIn