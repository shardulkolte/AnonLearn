import React from 'react'
import './Aboutus.css';
import au1 from './aboutus1.jpg';
import au2 from './aboutus2.jpg';
import Navbar from '../pcomponents/Navbar';
import Footer from '../pcomponents/Footer';


function Aboutus() {
  return (
    <div className='page-container'> 
    <div className='backcolor'>
      <Navbar />
      <div className="home1">
      
      <div className='row' id='btm1'>
         {/* Column1 */}
         <div className="col" >
         <img className="imgau1" src={au1} width="500" height="400" alt="">
          </img>
         </div>
         {/* Column2 */}
         <div className='col' id='homeinfo'>
          <div id='au1'>
            <br></br>
            <p><h1>Welcome to AnonLearn:</h1><h2>Where Knowledge Connects Anonymously</h2></p>
            
            <p id='text'>At AnonLearn, we believe in the power of knowledge to transform lives.
               Our platform is a dynamic space where students can engage, collaborate, 
               and share insights without the constraints of identity.
                We understand the importance of open dialogue and the freedom to express ideas without fear or judgment.</p>

          </div> 
         </div>
      </div> 

      <div className='row' id='btm2'>
         {/* Column1 */}
         <div className='col' id='homeinfo2'>
          <div id='au2'>
            <br></br>
            <p><h1>Our Mission: Fostering Anonymous Learning Communities</h1></p>
            
            <p id='text2'>AnonLearn is more than just a platform; 
            it's a movement towards inclusive education. 
            We are on a mission to break down barriers and create a secure environment 
            where students from diverse backgrounds can come together to learn, grow, and inspire each other.</p>
          </div> 
         </div>
         {/* Column2 */}
        <div className="col" >
         <img className="imgau2" src={au2} width="500" height="400" alt="">
          </img>
        </div> 
      </div> 

      <div className='row' id='btm3'>
        {/* Column1 */}
        <div className="col"></div>
        {/* Column2 */}
        <div className="col"></div>
        {/* Column3 */}
        <div className="col" id='fbtm'>
          <h1>FEATURES</h1>
        </div>
         {/* Column4 */}
         <div className="col"></div>
          {/* Column3 */}
        <div className="col"></div>

      </div>

      <div className='row' id='btm2'>
         {/* Column1 */}
         <div className='col' id='homeinfo2'>
          <div id='au3'>
            <br></br>
            <p><h1>Anonymous Interaction:</h1></p>
            
            <p id='text2'>Speak your mind without revealing your identity. 
            AnonLearn ensures that every voice is heard, irrespective of who you are.</p>
          </div> 
         </div>
         {/* Column2 */}
         <div className='col' id='homeinfo2'>
          <div id='au3'>
            <br></br>
            <p><h1>Secure and Private:</h1></p>
            
            <p id='text2'>Your privacy is our priority. 
            We employ robust security measures to safeguard your data and ensure a safe online space.</p>
          </div> 
         </div>
          {/* Column3 */}
          <div className='col' id='homeinfo3'>
          <div id='au3'>
            <br></br>
            <p><h1>Collaborative Learning:</h1></p>
            
            <p id='text2'>Connect with peers, join study groups, and collaborate on projects. 
            AnonLearn encourages teamwork and collective knowledge-building.</p>
          </div> 
         </div>
      </div> 



    </div>
      </div>
        <Footer />
      </div>
  )
}

export default Aboutus