import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import DeviceList from './pages/Devices/DeviceList/DeviceList';
import AddDevice from './pages/Devices/AddDevice/AddDevice';
import Device from './pages/Devices/Device';
import Dashboard from './pages/Dashboard/Dashboard';
import Panel from './pages/Dashboard/Panel/Panel';


function App() {
  return (
        <div className="App">
            <BrowserRouter>
            <Routes>   
              <Route path='/' element={<Login/>}>
                <Route path='forgot-password' element={<ForgotPassword/>}/>
                <Route path='reset-password' element={<ResetPassword/>}/>
              </Route>

              <Route path='/dashboard' element={<Dashboard/>}>
                <Route path='panel' element={<Panel/>}/>
              </Route>

              <Route path='/device' element={<Device/>}>
                    <Route path='list' element={<DeviceList/>}/>
                    <Route path='add' element={<AddDevice/>}/>
              </Route>

            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
