import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPass = event => {
        setConfirmPass(event.target.value);
    }

    if (user) {
        navigate('/');
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Enter six character password');
            return;
        }

        if (password !== confirmPass) {
            setError('Your two password do not match');
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <h1 className='login-title'>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="email" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="password" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPass} type="password" name="confirm-password" id="confirm-password" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className='login-button' type="submit" value="Sign Up" />
            </form>
            <p className='create-new'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;