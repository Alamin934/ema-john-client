import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setUser, setError, setIsLoading } = useAuth();

    let location = useLocation();
    let navigate = useNavigate();
    let redirect_uri = location.state?.from || "/";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                navigate(redirect_uri, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="form">
            <form>
                <div>
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter your password" />
                </div>
                <button>Login</button>
                <div>-------- Or --------</div>
                <button onClick={handleGoogleLogin} type="button" className="btn-regular">Google Sign In</button>
                <p>New on Ema john please <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;