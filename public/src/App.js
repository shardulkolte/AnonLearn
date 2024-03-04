import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Aboutus from './Pages/Aboutus';
import Dashboard from './Pages/Dashboard';
import Settings from './Layouts/Settings';
import Group from './Layouts/Group';
import Profile from './Layouts/Profile';

const App = () => {
  
 return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/group" element={<Group />} />
        <Route path="/profile" element={<Profile />} />



      </Routes>
    </Router>
 );
};

export default App;