import { LocationCity, LocationOn, Person } from "@mui/icons-material";
import { Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assests/images/logopic.jpg"

const Header = (props) => {

    const [userLocation, updateLocation] = useState("");
    const [userDetails, updateUserDetails] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        var loc = localStorage.getItem("location");
        var user = localStorage.getItem("user");
        updateLocation(loc);
        if (user && user.length) {
            updateUserDetails(JSON.parse(user))
        }

    });

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserClose = () => {
        setAnchorEl(null);
    };

    const goToLocation = () => {
        window.location.pathname = "/"
    }
    const goToHomePage = () => {
        window.location.pathname = "/home"
    }
    const goToLoginPage = () => {
        if (userDetails && Object.keys(userDetails)) {

        } else {
            window.location.pathname = "/login"
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("location");
        updateLocation('');
        updateUserDetails('');
        setAnchorEl(null);
    }
    return <div className="header-container">
        <div className="header-logo">
              <img src={Logo} />
            <h2 onClick={goToHomePage}>Foodie</h2>
            {userLocation && userLocation.length > 0 ? <div className="location-portion" onClick={goToLocation}>
                <LocationOn />
                <span>{userLocation}</span>
            </div> : null}
        </div>
        <div className="header-right-portion">
            {
            userDetails && userDetails.id ? <div className="login-portion" onClick={handleUserClick}>
                <Person />
                <span>{userDetails.name}</span>
            </div> : <div className="login-portion" onClick={goToLoginPage}>
                <Person />
                <span>Login</span>
            </div>
            }
        </div>
        <Popover
            id={"id"}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleUserClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'middle',
            }}
        >
            <Typography sx={{ p: 2, cursor: "pointer" }} onClick={handleLogout}>Logout</Typography>
        </Popover>
    </div>
}

export default Header;