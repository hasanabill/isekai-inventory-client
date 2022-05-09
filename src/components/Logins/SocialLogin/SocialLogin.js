import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from './../../Loading/Loading';
import useToken from './../../../Hooks/useToken';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user)
    // private route redirect handleing
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    // error handling
    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }

    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img src='' height="30" className='mx-2' alt="" />
                    Google Sign In
                </button>
            </div>
            <>{loading && <Loading></Loading>}</>
            <p className='text-center text-danger'>{errorElement}</p>
        </div>
    );
};

export default SocialLogin;