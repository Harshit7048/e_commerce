import React, { useContext, useState } from "react";
import UserContextProvider from "../Context/UserContextProvider";
import UserContext from "../Context/UserContext";
import './login.css'

export default function Login(){

    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const {setuser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();

        setuser({username , password})
    }




    return <div className="login-form">
            <div className="form">
                <input type="text" placeholder="Username" value={username} onChange={(e)=> setUserName(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />

                <button onClick={handleSubmit} className="handle-login">Submit</button>
                
            </div>
            <div className="form-side">
                
            </div>

 
    </div>
}