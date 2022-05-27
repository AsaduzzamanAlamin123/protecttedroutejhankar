import { signOut } from 'firebase/auth';
import React from 'react';
import {Navbar} from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';


const Header = () => {
    const {user} = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
        <nav>
            <Link to='/home'>Home</Link>
            <br></br>
            {user ?
            <button onClick={handleSignOut}>signout</button>:
                
                <Link to='/login'>Login</Link>
                }
            <br></br>
            <Link to='/signUp'>Sign Up</Link>
        </nav>
        </div>
    );
};

export default Header;