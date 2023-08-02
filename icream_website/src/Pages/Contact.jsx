import React, {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';


function Contact() {

  const [formvalue, setFormvalue] = useState({
    id:"",
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const onchange  = (e) => {
    setFormvalue({...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
    if (formvalue.subject == "" || formvalue.subject == null) {
      result = false;
      toast.error('subject Field required');
    }
    if (formvalue.message == "" || formvalue.message == null) {
      result = false;
      toast.error('message Field required');
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      const res = await axios.post(`http://localhost:3000/contact`, formvalue);
      // console.log(res.data)
      if(res.status == 201) {
        toast.success("Contact Success!");
        setFormvalue({...formvalue, name:"", email:"", subject:"", message:""});
      }
    }
  }

  return (
      <div>
        {/* Header Start */}
        <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }} >
          <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Contact</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0"> <Link className="text-white" to="/"> Home </Link> </p>
              <i className="fa fa-circle px-3" />
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Contact Start */}
        <div className="container-fluid py-2">
          <div className="container py-2">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="section-title position-relative text-center mb-5"> Contact Us For Any Query </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="contact-form bg-light rounded p-5">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate" >
                    <div className="form-row">
                      <div className="col-sm-6 control-group">
                        <input type="text" className="form-control p-4" value={formvalue.name} name="name" onChange={onchange} id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-6 control-group">
                        <input type="email" className="form-control p-4" value={formvalue.email} name="email" onChange={onchange} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <input type="text" className="form-control p-4" value={formvalue.subject} name="subject" onChange={onchange} id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea className="form-control p-4" value={formvalue.message} rows={5} name="message" onChange={onchange} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button className="btn btn-primary offset-4 py-3 px-5" onClick={onsubmit} type="submit" id="sendMessageButton"> Send Message </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
       
      </div>
  );
}

export default Contact;
