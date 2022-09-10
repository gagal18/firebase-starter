import React from 'react';
import {Link} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Profile(props) {
    console.log(props)
    let navigate = useNavigate();

    const {email, username, uid} = props.userData
    const auth = getAuth();
    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('ASD')
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <>
        <div>
            Welcome {username}
        </div>
        <button className={"px-3"} onClick={signOutUser}>SIGN OUT</button>
        </>
);
}

export default Profile;
