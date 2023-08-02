import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

function Profile() {

  const redirect = useNavigate();
    const [userData,setUserdata] = useState([]);
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        username:'',
      })
    
    useEffect(()=>{
        if(localStorage.getItem('adminid')){
            fetch()
            fetchEditProfile()
        }
        else{
            redirect('/index')
        }
    },[])

    const fetch = async() => {
        const response = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('adminid')}`)
        setUserdata(response.data)
    }

    const fetchEditProfile = async() => {
        const response = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('adminid')}`)
        setFormData({...formData,name:response.data.name, email:response.data.email, username:response.data.username})
    }

    // Edit Profile

      const onchange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
        console.log(formData)
      }
    
      const validate = () => {
        var res = true
        if(formData.name == "" || formData.name == null){
          res = false;
          toast.error('name required');
        }
        if(formData.email == "" || formData.email == null){
          res = false;
          toast.error('email required');
        }
        if(formData.username == "" || formData.username == null){
          res = false;
          toast.error('mobile required');
        }
        return res;
      }
    
      const onsubmit = async(e) => {
        e.preventDefault();
        if(validate()){
          const result = await axios.patch(`http://localhost:3000/admin/${localStorage.getItem('adminid')}`, formData);
          // console.log(result);
          if(result.status >=200 && result.status<300){
            toast.success('Success');
            localStorage.setItem('adminusername', formData.username)
            localStorage.setItem('adminname',formData.name)
            setFormData({...formData,name:"",username:"",terms:"",password:"",email:""});
            redirect('/profile')
            window.location.reload(true);
          }
        }
      }

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="pagetitle">
                <h3>PROFILE</h3>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item">Users</li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ol>
                </nav>
              </div>
              <div className="row profile">
                <div className="col-md-4 grid-margin">
                  <div className="card">
                    <div className="card-body profile-card pt-3 d-flex flex-column align-items-center">
                      <img src="images/faces/face1.jpg" alt="Profile" className="rounded-circle" />
                      <h2>{userData.name}</h2>
                      <h3>Web Designer</h3>
                      <div className="social-links mt-2">
                        <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pt-3">
                      <ul className="nav nav-tabs nav-tabs-bordered ">
                        <li className="nav-item">
                          <button className="nav-link active main-text" data-toggle="tab" data-target="#profile-overview" >Overview</button>
                        </li>

                        <li className="nav-item">
                          <button className="nav-link main-text" data-toggle="tab" data-target="#profile-edit" >Edit Profile</button>
                        </li>

                        <li className="nav-item">
                          <button className="nav-link main-text" data-toggle="tab" data-target="#profile-change-password" >Change Password</button>
                        </li>
                      </ul>
                      <div className="tab-content pt-2">
                        <div className="tab-pane fade show active profile-overview" id="profile-overview" >
                          <h5 className="card-title">About</h5>
                          <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nammaiores cumque temporibus. Tempora libero non estunde veniam est qui dolor. Ut sunt iure rerum quaequisquam autem eveniet perspiciatis odit. Fuga sequised ea saepe at unde.</p>
                          <h5 className="card-title">Profile Details</h5>

                          <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Full Name</div>
                            <div className="col-lg-9 col-md-8">{userData.name}</div>
                          </div>

                          {/* <div className="row">
                            <div className="col-lg-3 col-md-4 label">Company</div>
                            <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
                          </div> */}

                          {/* <div className="row">
                            <div className="col-lg-3 col-md-4 label">Job</div>
                            <div className="col-lg-9 col-md-8">Web Designer</div>
                          </div> */}

                          {/* <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Country
                            </div>
                            <div className="col-lg-9 col-md-8">USA</div>
                          </div> */}

                          {/* <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Address
                            </div>
                            <div className="col-lg-9 col-md-8">
                              A108 Adam Street, New York, NY 535022
                            </div>
                          </div> */}

                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">Username</div>
                            <div className="col-lg-9 col-md-8">{userData.username}</div>
                          </div>

                          <div className="row">
                              <div className="col-lg-3 col-md-4 label">Email</div>
                              <div className="col-lg-9 col-md-8">{userData.email}</div>
                          </div>
                        </div>

                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                    <div className="col-md-8 col-lg-9">
                                        <img src="images/faces/face1.jpg" alt="Profile" />
                                        <div className="pt-2">
                                            <a href="#" className="btn btn-primary btn-sm mr-2" title="Upload new profile image"><i className="fa fa-upload" /></a>
                                            <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="fa fa-trash" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                    <div className="col-md-8 col-lg-9">
                                        <input name="name" type="text" className="form-control" id="fullName" value={formData.name} onChange={onchange}/>
                                    </div>
                                </div>
                                            {/* <div className="row mb-3">
                                                <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea name="about" className="form-control" id="about" style={{ height: 100 }} defaultValue={"Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."} />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="company" type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="job" type="text" className="form-control" id="Job" defaultValue="Web Designer" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="country" type="text" className="form-control" id="Country" defaultValue="USA" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="address" type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
                                                </div>
                                            </div> */}
                                <div className="row mb-3">
                                    <label htmlFor="Username" className="col-md-4 col-lg-3 col-form-label">Username</label>
                                    <div className="col-md-8 col-lg-9">
                                        <input name="username" type="text" className="form-control" id="username" value={formData.username} onChange={onchange}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                    <div className="col-md-8 col-lg-9">
                                        <input name="email" type="email" className="form-control" id="Email" value={formData.email} onChange={onchange}/>
                                    </div>
                                </div>
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" />
                                                </div>
                                            </div> */}
                                            {/* <div className="row mb-3">
                                                <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" />
                                                </div>
                                            </div> */}
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" onClick={onsubmit}>Save Changes</button>
                                </div>
                            </form>{/* End Profile Edit Form */}
                        </div>

                        <div className="tab-pane fade pt-3" id="profile-change-password" >
                          <form>
                            <div className="row mb-3">
                              <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label" >
                                Current Password
                              </label>
                              <div className="col-md-8 col-lg-9">
                                <input name="password" type="password" className="form-control" id="currentPassword" />
                              </div>
                            </div>

                            <div className="row mb-3">
                              <label for="newPassword" className="col-md-4 col-lg-3 col-form-label" >
                                New Password
                              </label>
                              <div className="col-md-8 col-lg-9">
                                <input name="newpassword" type="password" className="form-control" id="newPassword" />
                              </div>
                            </div>

                            <div className="row mb-3">
                              <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">
                                Re-enter New Password
                              </label>
                              <div className="col-md-8 col-lg-9">
                                <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                              </div>
                            </div>

                            <div className="text-center">
                              <button type="submit" className="btn btn-primary">Change Password</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
