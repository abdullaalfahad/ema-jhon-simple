import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePhone = event => {
        setPhone(event.target.value);
    }

    const handleAddress = event => {
        setAddress(event.target.value);
    }

    const handleShipping = event => {
        event.preventDefault();

    }
    return (
        <div style={{ marginBottom: '70px' }} className='login-container'>
            <h1 className='login-title'>Shipping Information</h1>
            <form onSubmit={handleShipping}>
                <div className='input-group'>
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleNameBlur} type="name" name="name" id="name" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="email" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="phone">Phone</label>
                    <input onBlur={handlePhone} type="text" name="phone" id="phone" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="address" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input style={{ marginBottom: '30px' }} className='login-button' type="submit" value="Checkout" />
            </form>
        </div>
    );
};

export default Shipping;