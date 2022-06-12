import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="form">
            <form onSubmit="">
                <div>
                    <input type="name" name="name" placeholder="Enter your name" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter your password" />
                </div>
                <button>Register</button>
                <div>-------- Or --------</div>
                <button type="button" className="btn-regular">Google Sign In</button>
                <p>Already have an account? Please <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;