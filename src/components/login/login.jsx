import React, { useState } from "react";
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({setLoginUser}){

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const login = () => {
        axios.post("https://login-backend-yiba.onrender.com/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user);
            navigate("/");
        })
    }

    const handleChange = e => {
        const {name,value} = e.target;

        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password}  placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            {/* <div>or</div>
            <div className="button" onClick={() => navigate("/signup")}>Register</div> */}
        </div>
    )
}