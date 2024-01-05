import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Image from "../../assests/images/foodie2.jpg"

function Home() {
    return (<nav>
        <ul>
            <li className="active">
                <Link to="/login" className="Login">Login</Link>
            </li>
            <li className="active">
                <Link to="/register" className="Register">Register</Link>
            </li>
            <li className="active">
                <Link to="/category" className="Category">Category</Link>
            </li>
            <h1>Welcome To Food Portal!!!</h1>
            <center>
            <img src={Image} width={1000} height={800}/>
            </center>
        </ul>
    </nav>
    )
}
export default Home;