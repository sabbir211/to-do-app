import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    useEffect(() => {
        if (guser) {
            swal("Login", "Login successful", "success");
            navigate(from, { replace: true });
        }
    }, [ guser,from,navigate])
    if (gloading) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <p>{gerror&& gerror.message}</p>
            <p>Or</p>
            <button
                onClick={() => {
                    signInWithGoogle()
                }}
                className="btn btn-warning"
            >Continue with google</button>
        </div>
    );
};

export default SocialLogin;