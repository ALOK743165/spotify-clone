import React from "react"
import './Login.css';
import { loginUrl } from "../spotify";

function Login() {
    return(
        <div className="login">
            <h1>I am the login page</h1>
            {/* Sportify logo */}
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1280px-Spotify_logo_horizontal_black.jpg" 
            alt=""
            className="logo"
            />
            {/* Login with sportify button */}

            <a href={loginUrl}>Login with Sportify</a>

        </div>
    )
}

export default Login;