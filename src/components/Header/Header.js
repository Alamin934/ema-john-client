import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {user.email
                    ? <span>
                        <span style={{ color: '#fff' }}>{user.displayName}</span>
                        <button onClick={logOut}>Log Out</button>
                    </span>
                    : <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default Header;