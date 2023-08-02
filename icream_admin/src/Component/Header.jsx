import React,{useEffect} from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Header() {

  useEffect(()=> {
    if(!(localStorage.getItem("adminid")))
    {
      redirect("/");
    }
  },[])

  const redirect = useNavigate();

  const onlogout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminusername");
    redirect("/login")
    toast.success("Logout Successful")
  }
  return (
    <div>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent"><i className="input-group-text border-0 mdi mdi-magnify"/></div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {(() => {
              if(localStorage.getItem("adminid")) {
                return(
                  <li className="nav-item nav-profile dropdown">
                    <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false" >
                      <div className="nav-profile-img">
                        <img src="images/faces/face1.jpg" alt="image" />
                        <span className="availability-status online" />
                      </div>
                      <div className="nav-profile-text">
                        <p className="mb-1 text-black">{localStorage.getItem("adminname")}</p>
                      </div>
                    </a>
                    <ul className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                    {/* <div  > */}
                      <li className='dropdown-header'>
                        <h6 className='text-center px-2 pt-2'>{localStorage.getItem('adminusername')}</h6>
                        <span className='ps-2 pb-3'>Front End Developer</span> 
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/profile"><i className="mdi mdi-account-circle mr-2 text-primary"/>My Profile</NavLink>
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="mdi mdi-cached mr-2 text-success"/>Activity Log</a>
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <a onClick={onlogout} className="dropdown-item" href="#"><i className="mdi mdi-logout mr-2 text-primary"/>Signout</a>
                      </li>
                    {/* </div> */}
                    </ul>
                  </li>
                )
              }
              // else{
              //   return(
              //     <li className="nav-profile-text ">
              //         <NavLink className="mb-1 text-black text-weight-bold" to="/login">Log In</NavLink>
              //     </li>
              //   )
              // }
            })()}
            
            <li className="nav-item d-none d-lg-block full-screen-link">
              <a className="nav-link"><i className="mdi mdi-fullscreen" id="fullscreen-button"/></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false" >
                <i className="mdi mdi-email-outline" />
                <span className="count-symbol bg-warning" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown" >
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                    <p className="text-gray mb-0">1 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                    <p className="text-gray mb-0">15 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                    <p className="text-gray mb-0">18 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown" >
                <i className="mdi mdi-bell-outline" />
                <span className="count-symbol bg-danger" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown" >
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p className="text-gray ellipsis mb-0">Just a reminder that you have an event today</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning"><i className="mdi mdi-settings" /></div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                    <p className="text-gray ellipsis mb-0">Update dashboard</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info"><i className="mdi mdi-link-variant" /></div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                    <p className="text-gray ellipsis mb-0">New admin wow!</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="#"><i className="mdi mdi-power" /></a>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" href="#"><i className="mdi mdi-format-line-spacing" /></a>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
