import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col" id="footerh1">
            <h3>Discover,Share,Thrive with</h3>
            <Link className="lin" to="/">AnonLearn</Link>
          </div>
          {/* Column2 */}
          <div className="col"></div>
          {/* Column3 */}
          <div className="col"></div>
          {/* Column4 */}
          <div className="col"></div>
          {/* Column5 */}
          <div className="col"></div>
          {/* Column6 */}
          <div className="col">
            <div className="footer-icon">
              <p>Follow us on:</p>
              <a href="https://www.facebook.com/profile.php?id=61555018514254"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com/anon_learn"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/anonlearn/"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/anonlearn/?viewAsMember=true"><i class="fa-brands fa-linkedin"></i></a>
            </div>

          </div>
        </div>
        <hr />
        <div className="row">
            {/* Column1 */}
            <div className="col">
                <p>Contact us at:</p>
                <i class="fa-solid fa-envelope"></i>anonlearncommunity@gmail.com
            </div>
            {/* Column2 */}
          <div className="col"></div>
          {/* Column3 */}
          <div className="col"></div>
            {/* Column4 */}
            <div className="col">
                <p></p>
                <p></p>
                <p></p>
                <a href="/"><p>Privacy Policy | Terms & Conditions</p></a>
            </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default Footer;

