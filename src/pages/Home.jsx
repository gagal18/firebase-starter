import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>Home
            <h3 className={"mt-2 text-sm mx-auto"}>Don't have account?<span className={"text-xl"}><Link to="/register">Register!</Link></span></h3>
            <h3 className={"mt-2 text-sm mx-auto"}>Already registred?<span className={"text-xl"}><Link to="/login">Log in!</Link></span></h3>
        </div>
    );
}

export default Home;
