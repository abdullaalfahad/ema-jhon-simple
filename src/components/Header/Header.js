import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={() => signOut(auth)} style={{ marginLeft: '30px' }}>Logout</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;