import React, { useState } from "react";
import "./signup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && password === reEnterPassword) {
            // alert("posted");
            axios.post("https://login-backend-yiba.onrender.com/signup", user)
                .then(res => {
                    alert(res.data.message);
                    res.data.message==="User already registered" ? navigate("/signup") : navigate("/login");
                })
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}