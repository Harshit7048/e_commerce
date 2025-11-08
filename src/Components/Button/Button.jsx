import React from "react";
import './button.css'
import { Link , NavLink } from "react-router-dom";

export default function Button({name="Visit me" ,  css='bg-grey' , whereTo=''}){
    return <button className={css}>
        <Link to={whereTo}>
        {name}
        </Link>
    </button>
}