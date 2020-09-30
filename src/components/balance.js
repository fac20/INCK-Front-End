import React from "react";
import { Logout } from "./logout.js";


export function Balance() {
    return (
        <>
        <Logout />
        <h1>Balance Page</h1>
        <button 
            className="work-buttom"
            // onClick= handle click log .5 of activity
            >Work</button>
        <button 
            className="play-buttom"
            // onClick= handle click log .5 of activity
            >Play</button>
        </>
    )
}