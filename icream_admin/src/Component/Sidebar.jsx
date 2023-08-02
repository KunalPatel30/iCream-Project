import React,{useEffect} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify';

function Sidebar() {

  useEffect(()=> {
    if(!(localStorage.getItem("adminid")))
    {
      redirect("/");
    }
  },[])

  const redirect = useNavigate();

  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
        {(() => {
              if(localStorage.getItem("adminid")) {
                return(
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="images/faces/face1.jpg" alt="profile" />
                <span className="login-status online" />
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">{localStorage.getItem("adminname")}</span>
                <span className="text-secondary text-small"> Developer </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
            </a>
          </li>
          )
        }
      })()}
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="menu-title">Dashboard</span><i className="mdi mdi-home menu-icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-crosshairs-gps menu-icon" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/typography.html" >Typography</a>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <span className="menu-title">Icons</span><i className="mdi mdi-contacts menu-icon" />
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#form" aria-expanded="false" aria-controls="form">
              <span className="menu-title">Forms</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-format-list-bulleted menu-icon" />
            </a>
            <div className="collapse" id="form">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addproduct">Add Product</NavLink>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="menu-title">Charts</span><i className="mdi mdi-chart-bar menu-icon" />
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#table" aria-expanded="false" aria-controls="table">
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-table-large menu-icon" />
            </a>
            <div className="collapse" id="table">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">User Data</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Data</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">Product Data</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages" >
              <span className="menu-title">Sample Pages</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-medical-bag menu-icon" />
            </a>
            <div className="collapse" id="general-pages">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/404">404</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blank">Blank Page</NavLink>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="nav-item sidebar-actions">
            <span className="nav-link">
              <div className="border-bottom"><h6 className="font-weight-normal mb-3">Projects</h6></div>
              <button className="btn btn-block btn-lg btn-gradient-primary mt-4">
                + Add a project
              </button>
              <div className="mt-4">
                <div className="border-bottom">
                  <p className="text-secondary">Categories</p>
                </div>
                <ul className="gradient-bullet-list mt-4">
                  <li>Free</li>
                  <li>Pro</li>
                </ul>
              </div>
            </span>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
