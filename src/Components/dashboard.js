import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import '../App.css';


function Dashboard() {
    return <>
    <div className="dashboard">
    <h1 className="log">Home</h1>
    <ul>
         <li>
            <Link to="/dashboard">Home </Link>
          </li>
          
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
    </div>
    <div className="login">
    
    
    
    </div>
    </>
}
export default Dashboard;