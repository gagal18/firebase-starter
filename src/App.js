import "./index.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import {doc, getDoc} from "firebase/firestore";
import {db} from "./config/firebase";
import Profile from "./pages/Profile";

function App() {
    const [currentUserData, setCurrentUserData] = useState('')
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    useEffect(() => {
        if(currentUser){
            funcGetUserData(currentUser.uid)
        }

    },[currentUser])
    const funcGetUserData = async ( userID ) => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setCurrentUserData(docSnap.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return (
        <div>
                <Router>
                {currentUser ? <Navbar userData={currentUserData} /> : null}
                <div  className={"w-full h-screen flex justify-center items-center"}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile userData={currentUserData}/>}/>
                        <Route exact path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
