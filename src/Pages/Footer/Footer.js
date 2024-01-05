import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = (props) => {
    return <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="http://localhost:3000/AboutUs">about us</a></li><br></br>
                    {/* <li className="active"></li>
                    <Link to="/aboutus" className="Aboutus">Aboutus</Link> */}
                    <li><a href="http://localhost:3000/OurServices">our services</a></li><br></br>
                    <li><a href="http://localhost:3000/PrivacyPolicy">privacy policy</a></li>
                    {/* <li><a href="#">affiliate program</a></li> */}
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="http://localhost:3000/Shipping">shipping</a></li><br></br>
                    <li><a href="http://localhost:3000/ContactUs">contact us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/accounts/login/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/login"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
}

export default Footer;