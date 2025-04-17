import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                if (
                    error.code === 'auth/user-not-found' || 
                    error.code === 'auth/invalid-credential'
                ) {
                    alert("User does not exist. Please click on 'Create your eShop Account' to register.");
                } else if (error.code === 'auth/wrong-password') {
                    alert("Wrong password. Please try again.");
                } else {
                    alert(error.message);
                }
            });
    };
    

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Account created successfully!");
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    alert("This email is already registered. Please sign in.");
                } else if (error.code === 'auth/weak-password') {
                    alert("Password should be at least 6 characters.");
                } else {
                    alert(error.message);
                }
            });
    };

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='login-logo'>
                    <StorefrontIcon className='login-logoimage' fontSize='large' />
                    <h2 className='login-logoTitle'>eSHOP</h2>
                </div>
            </Link>
            <div className='login-container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='login-signInButton'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale.
                    Please see our Privacy Notice, Cookies Notice and Interest-Based Ads Notice.
                </p>

                <button
                    className='login-registerButton'
                    onClick={register}
                >
                    Create your eShop Account
                </button>
            </div>
        </div>
    );
}

export default Login;
