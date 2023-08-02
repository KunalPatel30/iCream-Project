import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import LogIn from './Pages/LogIn'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile'
import Editprofile from './Pages/Editprofile'


function Main_Routing() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route index path="/" element={<> <Header/> <Home/> <Footer/> </>}></Route>
          <Route  path="about" element={<> <Header/> <About/> <Footer/> </>}></Route>
          <Route  path="product" element={<> <Header/> <Product/> <Footer/> </>}></Route>
          <Route  path="service" element={<> <Header/> <Service/> <Footer/> </>}></Route>
          <Route  path="gallery" element={<> <Header/> <Gallery/> <Footer/> </>}></Route>
          <Route  path="contact" element={<> <Header/> <Contact/> <Footer/> </>}></Route>
          <Route  path="signup" element={<> <Header/> <Signup/> <Footer/> </>}></Route>
          <Route  path="profile" element={<> <Header/> <Profile/> <Footer/> </>}></Route>
          <Route  path="editprofile/:id" element={<> <Header/> <Editprofile/> <Footer/> </>}></Route>
          <Route  path="login" element={<> <Header/> <LogIn/> <Footer/> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main_Routing