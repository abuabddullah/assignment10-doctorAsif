import React, { useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Login = () => {
    const navigate = useNavigate()

    // get element PasswordReset from hook
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending4PasswordReset, error4PasswordReset] = useSendPasswordResetEmail(auth);

    // protecting private route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // get element login with google from hook
    const [signInWithGoogle, user4Google, loading4Google, error4Google] = useSignInWithGoogle(auth);

    // get element from firebase react hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // control navigation
    useEffect(() => {
        if (user || user4Google) {
            toast.success('Logging in Successful', { id: 'login' });
            navigate(from, { replace: true });
        }
    }, [user, user4Google]);

    // control error
    useEffect(() => {
        if (error || error4Google || error4PasswordReset) {
            let message = error?.message || error4Google?.message || error4PasswordReset?.message;
            toast.error(message, { id: 'error' });
        }
    }, [error, error4Google, error4PasswordReset]);

    // control loading
    if (loading || loading4Google || sending4PasswordReset) {
        return <Loading />
    }

    // control form after submit button pressed
    const handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        if (email && password && password.length >= 6) {
            signInWithEmailAndPassword(email, password)
        } else {
            toast.error('Password must be at least 6 characters long');
            return;
        }
    }

    // control google sign in button
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    // control password reset button
    const handleResetPassword = async (e) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter email');
        }
    }


    return (
        <section className='py-5 p-md-5'>
            <div className="container  my-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Login Now</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <Form onSubmit={handleSubmit} className='my-4 w-75 mx-auto'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control ref={emailRef} type="email" placeholder="name@example.com" name='email' required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </FloatingLabel>


                    <div className="d-grid gap-2">
                        <Button type='submit' variant="danger" size="lg">
                            Log in
                        </Button>
                    </div>

                    <div className="my-3 text-center">
                        <p>Not Have Account? <Link className='text-decoration-none' to='/signup'>Register now</Link></p>
                        <p onClick={handleResetPassword} style={{ color: "#0A58CA", cursor: "pointer" }}>Forgot password?</p>
                    </div>
                </Form>

                <div className='d-flex justify-content-center align-items-center my-4'>
                    <hr className="w-25" />
                    <span className='mx-2'>or</span>
                    <hr className="w-25" />
                </div>

                <div className="d-grid gap-2 w-75 mx-auto">
                    <Button variant="outline-primary" size="lg">
                        <FaFacebook /> Login with Facebook
                    </Button>
                    <Button onClick={handleGoogleSignIn} variant="outline-secondary" size="lg">
                        <FaGoogle /> Login with Google
                    </Button>
                </div>

                <ToastContainer />
            </div>
        </section>
    );
};

export default Login;