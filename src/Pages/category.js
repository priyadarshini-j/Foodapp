import React from "react";
import { Link } from "react-router-dom";
import TitlebarBelowImageList from "./TitlebarBelowImageList";

function Category() {
    return (<nav>
        <ul>
            <li className="active">
                <Link to="/veg" className="Veg">Veg</Link>
            </li>
            <li className="active">
                <Link to="/NonVeg" className="NonVeg">Non-Veg</Link>
            </li>
            <li className="active">
                <Link to="/cake" className="Cake">Cake</Link>
            </li>
            <li className="active">
                <Link to="/icecreame" className="Icecreame">Icecreame</Link>
            </li><br></br>
            <h2>What's On Your Mind?</h2><br></br>
            <TitlebarBelowImageList/>
        </ul>
    </nav>
    )
}
export default Category;