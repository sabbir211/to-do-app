import React, { useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    useEffect(() => {
        if (user) {
            swal("Login","Login successful","success");
        }
    }, [user])
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
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </div>
        <p>Or</p>
        <button className="btn btn-warning">Continue with google</button>
       
    </div>
       
    );
};

export default Login;