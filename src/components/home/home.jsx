import React from "react";
import "./home.css"

export default function Home({newuser, setLoginUser}){
    return (
        <div className="homepage">
            <h1>Hello {newuser.name}</h1>
            <h1>Here is your flag: PCC(T@$k_1_I%f0rM@tion_D1$)</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}