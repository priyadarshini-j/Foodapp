import { Button, TextField } from "@mui/material";
import React from "react";
import "./LandingPage.css";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            error: ""
        }
    }

    handleLocation(e) {
        var value = e.target.value;
        this.setState({
            location: value,
        });
    }

    goToHomePage() {
        if(this.state.location.length > 0) {
            localStorage.setItem("location", this.state.location)
            window.location.pathname = "/home"
        } else {
            this.setState({
                error: "Please enter location"
            })
        }
    }

    render() {
        return <div className="landing-page-container">
            <div className="landing-left-portion">
                <div className="location-input">
                    <TextField 
                        id="outlined-basic" 
                        label="" 
                        variant="outlined"
                        placeholder="Enter Location"
                        sx={{width: "100%", div: { borderRadius: "unset" }}}
                        onChange={this.handleLocation.bind(this)}
                    />
                    <Button 
                        variant="contained" 
                        onClick={this.goToHomePage.bind(this)}
                        style={{borderRadius: "unset", height: "55px"}}>Search</Button>
                </div>
                {this.state.error ? <div style={{color: "red", marginTop: "15px"}}>{this.state.error}</div> : null}
            </div>
            <div className="landing-right-portion">
            </div>
        </div>
    }
}

export default LandingPage;