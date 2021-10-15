import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleSingIn} = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={googleSingIn} className ="btn btn-success">Login with Google</button>
        </div>
    );
};

export default Login;