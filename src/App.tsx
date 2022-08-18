import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import DeviceList from './pages/Devices/DeviceList';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>   
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/' element={<DeviceList/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
