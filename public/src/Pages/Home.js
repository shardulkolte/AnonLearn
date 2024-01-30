
import './Home.css';
import study from './study.png';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () =>{
  return(
    <div className='backcolor'>
    <Navbar /> 

    

<div className="page-container">
  <div className="home">
    <div className='row'>
       {/* Column1 */}
       <div className="col" >
       <img className="avatar" src={study} width="500" height="400" alt="">
        </img>

       </div>
       {/* Column2 */}
       <div className='col' id='homeinfo'>

    <div className="welcome">
      <h1>Welcome To</h1>
      <h2>AnonLearn</h2>
      <h3>Your Gateway To Collaborative Learning!!!</h3>
    </div>
    <div className="intro">
      <p>Experience the future of collaborative learning at AnonLearn!</p>
      <p>Join our global community of students to share knowledge, access study resources, and connect anonymously with peers.</p>
      <p>Get enrolled in groups & unlock a world of seamless, anonymous learning today.</p>
    </div>
    <div className="links">
      <p>Get started now!</p>
      <button onClick={() => window.location.href = '/register'} >Let's Go!!</button>
    </div>
    </div>
    </div>

    
  </div>
  <Footer />
  </div>
  </div>
  )

}
export default Home;