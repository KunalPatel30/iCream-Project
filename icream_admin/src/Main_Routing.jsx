import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Manage_Contact from './Pages/Manage_Contact'
import Manage_User from './Pages/Manage_User'
import Add_Product from './Pages/Add_Product';
import Manage_Product from './Pages/Manage_Product';
import Register from './Pages/Register';
import Profile from './Pages/Profile';


function Main_Routing() {
  return (
    <div>
        <BrowserRouter>
        <ToastContainer></ToastContainer>
            <Routes>
                <Route index path='/' element={<> <Dashboard/> </>}></Route>
                <Route path='/login' element={<> <Login/> </>}></Route>
                <Route path='/profile' element={<> <Profile/> </>}></Route>
                <Route path='/register' element={<> <Register/> </>}></Route>
                <Route path='/contact' element={<> <Manage_Contact/> </>}></Route>
                <Route path='/user' element={<>  <Manage_User/>  </>}></Route>
                <Route path='/product' element={<>  <Manage_Product/>  </>}></Route>
                <Route path='/addproduct' element={<> <Add_Product/> </>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main_Routing