import React,{useState,useEffect} from 'react'
import './Login.css';
import Navbar from '../pcomponents/Navbar';
import Footer from '../pcomponents/Footer';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';



function Login() {

  const navigate = useNavigate()

  const [values,setValues]= useState({
    username:"",
    password:"",
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
    if(validateForm()){
      
    const { username ,password } = values;
      const { data } = await axios.post(loginRoute,{
        username,
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

  const validateForm = () => {
    const { password, username } = values;
    if (password === "" && username === "" ) {
      toast.error(
        "Credentials are Required",
        toastOptions
      );
      return false;
    } else if (username === "") {
      toast.error(
        "Username is Required ",
        toastOptions
      );
      return false;
    }  else if (password === "") {
      toast.error(
        "Password is Required for your safty",
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
      <div className='logininfo'>
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
              min="3"
            />
           
            <input 
              type="password" 
              placeholder='Password' 
              name='password' 
              onChange={(e) => handleChange(e)} 
            />
            
            <button type='submit'>Login</button>
            <span>Don't have an account ?<Link to="/register">Register.</Link></span>
          </form>
        </div>
        <ToastContainer />
      </>
    </div>
        
        <Footer />
      </div>
  )
}



export default Login