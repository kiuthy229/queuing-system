import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>   
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
