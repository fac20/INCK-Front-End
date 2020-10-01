import React from "react";
import { Link } from "react-router-dom"

export function Logout() {
    const removeToken = () => {
        localStorage.removeItem('key');
    }

    return (
        <button
            className="logout"
            onClick={removeToken}
        >Logout</button>
        

    )
}