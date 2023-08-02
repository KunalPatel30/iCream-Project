import React, {useState, useEffect} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"


function Editprofile() {

  const [formvalue, setFormvalue] = useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  });

  const redirect = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    if(localStorage.getItem('id'))
    {
      fetchedit();
    }
    else
    {
      redirect('/');
    }
  },[]);

  const fetchedit = async()=> {
    const profiledata = await axios.get(`http://localhost:3000/user/${id}`);
    setFormvalue({...formvalue,name:profiledata.data.name,email:profiledata.data.email,password:profiledata.data.password,mobile:profiledata.data.mobile})
  }

  const onchange  = (e) => {
    setFormvalue({...formvalue, [e.target.name]:e.target.value});
  }

  function validate() {
    var result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error('name Field required');
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('email Field required');
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('password Field required');
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
      toast.error('mobile Field required');
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
      // console.log(res.data)
      if(res.status == 200) {
        toast.success("Edit Profile Success!");
        setFormvalue({...formvalue, name:"", email:"", password:"", mobile:""});
        localStorage.setItem('name',formvalue.name);
        redirect('/profile');
      }
    }
  }

  return (
    <div>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="section-title position-relative text-center mb-4"> Edit Profile </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="contact-form bg-light rounded p-5">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate" >
                    <div className="form-row">
                      <div className="col-sm-12 control-group">
                        <input type="text" className="form-control p-4 " value={formvalue.name}  name="name" onChange={onchange} id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="email" className="form-control p-4 mt-3" value={formvalue.email} name="email" onChange={onchange} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="number" className="form-control p-4 mt-3" value={formvalue.mobile} name="mobile" onChange={onchange} id="number" placeholder="Your Mobile" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="password" className="form-control p-4 mt-3" value={formvalue.password} name="password" onChange={onchange} id="password" placeholder="Your Password" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary offset-4 py-3 px-5 mt-3" onClick={onsubmit} type="submit" id="sendMessageButton"> Save </button>
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

export default Editprofile