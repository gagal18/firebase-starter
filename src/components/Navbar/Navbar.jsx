import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    const {email, username, uid} = props.userData
    return (
        <nav
            className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
            </div>
            <div>
                <span>welcome</span><Link to="/profile" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{username}</Link>
            </div>
        </nav>
    );
}

export default Navbar;
