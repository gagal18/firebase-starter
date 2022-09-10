import React, {useEffect} from 'react';
import LoginForm from "../components/Forms/LoginForm";
import {Link} from "react-router-dom";
import {signInWithGoogle} from "../config/firebase";
import { useNavigate } from 'react-router-dom';


function Login(props) {
    let navigate = useNavigate();

    useEffect(() => {

    },[])

    return (
        <div className={"fle flex-col justify-center items-center mx-auto w-1/2"}>
            <h1 className={"text-4xl w-2/3 mb-6"}>login to your account, compete, and do some <span className={"text-6xl font-black"}>push ups</span></h1>
            <LoginForm />
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <h3 className={"mt-2 text-sm text-right mx-auto w-1/2 flex flex-col justify-end"}>Don't have account?<span className={"text-xl"}><Link to="/register">Register!</Link></span></h3>
        </div>
    );
}

export default Login;
