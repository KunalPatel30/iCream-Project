import React,{useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {

  const redirect = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('id'))
    {
      fetchprofile();
    }
    else
    {
      redirect('/');
    }
  },[]);

  const [userdata,setUserdata] = useState({});

  const fetchprofile = async() => {
    const profiledata=await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    setUserdata(profiledata.data);
  }


  return (
    <div>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }} >
        <div className="container text-center py-3">
          <h1 className="text-white display-3 mt-lg-5">Profile</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0"> <a className="text-white" href> Home </a> </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">Profile</p>
          </div>
        </div>
      </div>
      {/* Header End */}

      <div className="container-fluid py-2">
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="section-title position-relative text-center mb-5">Profile</h1>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4" style={{ minHeight: 400 }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img className="position-absolute w-100 h-100" src="img/about.jpg" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-6 py-5 mx-auto text-center">
              <h2 className="font-weight-bold mb-3">{userdata.name}</h2>
              <h5 className="text-muted mb-3"> {userdata.email} </h5>
              <p>{userdata.mobile}</p>
              <a className="btn btn-secondary mt-2" onClick={()=>{redirect('/editprofile/'+userdata.id)}} href="javascript:void(0)">View Profile</a>
            </div>
          </div>
        </div>
      </div>
     

      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>
        <script src="js/main.js"></script>
      </Helmet>
    </div>
  );
}

export default Profile;
