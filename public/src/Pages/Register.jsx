import React,{useState,useEffect} from 'react'
import './Register.css';
import Navbar from '../pcomponents/Navbar';
import Footer from '../pcomponents/Footer';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';



function Register() {

  const navigate = useNavigate()

  const [values,setValues]= useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
      
    const { password, username, email } = values;
      const {data} = await axios.post(registerRoute,{
        username,
        email,
        password,
      });
      if(data.status === false){
        toast.error(data.msg, toastOptions);
      }
      if(data.status === true){
        localStorage.setItem("anonlearn-user",JSON.stringify(data.user));
        navigate("/dashboard");
      }
      
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password === ""&& username === "" && email === "") {
      toast.error(
        "Credentials are Required",
        toastOptions
      );
      return false;
    } else if (username === "") {
      toast.error(
        "Username is Required for your privacy",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    }  else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error(
        "Password is Required for your safty",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } 

    return true;
  };

  const handleChange = (event) =>{
    setValues({...values,[event.target.name]:event.target.value });
  };

  return (
    <div className='page-container'> 
    <div className='backimg'>
      <Navbar />
      <>
      <div className='info'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className='brand'>
              <img  src={logo} width="60" height="60" alt='' />
              <h1>AnonLearn</h1>
            </div> 
            <input 
              type="text" 
              placeholder='Username' 
              name='username' 
              onChange={(e) => handleChange(e)} 
            />
            <input 
              type="email" 
              placeholder='Email' 
              name='email' 
              onChange={(e) => handleChange(e)} 
            />
            <input 
              type="password" 
              placeholder='Password' 
              name='password' 
              onChange={(e) => handleChange(e)} 
            />
            <input 
              type="password" 
              placeholder='Confirm Password' 
              name='confirmPassword' 
              onChange={(e) => handleChange(e)} 
            />
            <button type='submit'>Create User</button>
            <span>Already have an account ?<Link to="/login">Login.</Link></span>
          </form>
        </div>
        <ToastContainer />
      </>
    </div>
        
        <Footer />
      </div>
  )
}



export default Register