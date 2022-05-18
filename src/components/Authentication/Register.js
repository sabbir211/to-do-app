
import React, { useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    useEffect(() => {
        if (user) {
            swal("Register","Register successful","success");
            navigate(from, { replace: true });
        }
    }, [user,from,navigate])
    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <div className='text-center'>
            <h2>Register</h2>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleRegister}>
                    <p>{error && error?.message} </p>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
           <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;