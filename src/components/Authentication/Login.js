import React, { useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        if (user ) {
            swal("Login", "Login successful", "success");
            navigate(from, { replace: true });
        }
    }, [user,from,navigate])
    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <div className='text-center'>
            <h2>Login</h2>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleLogin}>
                    <p>{error && error?.message}</p>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>

<SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;