import React from "react";

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