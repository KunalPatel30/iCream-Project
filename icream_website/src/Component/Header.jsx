import React from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {

  const redirect=useNavigate();
    const logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        return redirect('/');
    }

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary py-3 d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                {(() => {
                  if (localStorage.getItem('id')) {
                    return ( 
                      <>
                        <a href="javascript:void(0)" className="text-primary px-3  btn btn-light py-md-2 px-md-3"  onClick={logout}>Log Out</a>
                        <span className="text-white pl-3">|</span>
                        <i class="fas fa-user-circle pl-3 text-white"></i>
                        <Link className="text-white px-2" to="/profile">Hi, {localStorage.getItem('name').toLocaleUpperCase()}</Link>
                      </>
                    )
                  }
                  else{
                    return(
                      // <NavLink className="text-white px-3" to="/login"> Log In </NavLink>
                      <NavLink className="text-primary px-3 btn btn-light py-md-2 px-md-3" to="/login"> Log In</NavLink>
                    )
                  }
                })()
                }
                
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <Link className="text-white px-3" to="#"> <i className="fab fa-facebook-f"/> </Link>
                <Link className="text-white px-3" to="#"> <i className="fab fa-twitter"/> </Link>
                <Link className="text-white px-3" to="#"> <i className="fab fa-linkedin-in"/> </Link>
                <Link className="text-white px-3" to="#"> <i className="fab fa-instagram"/> </Link>
                <Link className="text-white pl-3" to="#"> <i className="fab fa-youtube"/> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }} >
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
            <Link href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary"> <span className="text-secondary">i</span>CREAM </h1>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse" >
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/" className="nav-item nav-link"> Home </NavLink>
                <NavLink to="/about" className="nav-item nav-link"> About </NavLink>
                <NavLink to="/product" className="nav-item nav-link"> Product </NavLink>
              </div>
              <Link href="index.html" className="navbar-brand mx-5 d-none d-lg-block" >
                <h1 className="m-0 display-4 text-primary"> <span className="text-secondary">i</span>CREAM </h1>
              </Link>
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/service" className="nav-item nav-link"> Service </NavLink>
                <NavLink to="/gallery" className="nav-item nav-link"> Gallery </NavLink>
                <NavLink to="/contact" className="nav-item nav-link"> Contact </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default Header;
