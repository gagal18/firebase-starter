import React from 'react';
import RegisterForm from "../components/Forms/RegisterForm";
import {Link} from "react-router-dom";
import {signInWithGoogle} from "../config/firebase";


function Register(props) {
    return (
        <div className={"fle flex-col justify-center items-center mx-auto w-1/2"}>
            <h1 className={"text-4xl w-2/3 mb-6"}>register to compete, get notified and track your <span className={"text-6xl font-black"}>push ups</span></h1>
            <RegisterForm />
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <h3 className={"mt-2 text-sm text-right mx-auto w-1/2 flex flex-col justify-end"}>Already registred?<span className={"text-xl"}><Link to="/login">Log in!</Link></span></h3>
        </div>
    );
}

export default Register;
