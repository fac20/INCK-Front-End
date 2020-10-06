import React from "react";
import { Link } from "react-router-dom";
import { Paragraph } from "./../styled-components/Paragraph";
import { Head1, Head2, Head3 } from "./../styled-components/Headers";

export const Welcome = () => {
    return (
        <>
        <Head1>Welcome to Zenpal</Head1>
        <Paragraph>Zenpal is designed to monitor your work/life balance so you can reach the most ultimate level of Zen</Paragraph>
        
        <Head2>How to Use Zenpal</Head2>
        <Paragraph>First of all, you're in the right place, this page contains all the instructions to using Zenpal. Also, feel free to refer back to this page when you need a reminder.
        <br/>Head over to the balance page. Here, you will see your current state and level of zen, indicated by the floating woman. You will have forms  </Paragraph>
        <Head2>TL;DR:</Head2>
        <Paragraph>The <str><Link to="/profile">Profile</Link></str> page is where you can find your username and change your password.<br/>
        The <str><Link to="/stats">Stats</Link></str> page shows you how much you have worked compared to how much you have played, in several pleasing visualisations.<br/>
        The <str><Link to="/balance">Balance</Link></str> page is where you can log how much you worked or played today and view what level of zen you have achieved.</Paragraph>
        </>
    );
}