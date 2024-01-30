import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Aboutus from './Pages/Aboutus';
import Dashboard from './Pages/Dashboard';


const App = () => {
 return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
 );
};

export default App;