import React from 'react';
import {Link, Outlet, Route, Routes } from 'react-router-dom';
import Login from '../Login/login';
import Logo from '../Logo';
import './index.css'

function NavigationBar() {
    return(
        
        <div className= "navigationBar">
            
            <Routes>
                <Route path="/login" element={<Login/>}  />
            </Routes>
            <Link to ="/login">Login</Link>
        </div>
       
       
    )
}
export default NavigationBar;