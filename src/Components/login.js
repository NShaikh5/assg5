import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import '../App.css';


function Login() {
    return <>
    <div className="dashboard">
    <ul>
        <li>
            <Link to="/dashboard">Home Page</Link>
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
    <h1 className="log">Login</h1>
    
    <TextField id="outlined-basic" type="text" label="Enter email Address" variant="outlined" />
    <TextField id="outlined-basic" type="password" label="Enter Password" variant="outlined" /><br />
    <Button variant="contained" size="large">LogIn</Button>
    <Button variant="contained"  size="large">SignUp ?</Button>
    
    </div>
    </>
}
export default Login;