import React, { useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from './../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const SignUp = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate();
    const location = useLocation();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // error handling
    let errorElement;
    if (error) {
        errorElement = <>{error?.message}</>
    }

    // // private route redirect handleing
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    // register new user handle
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // if (email) {
        //     toast('Varification Email Sent')
        // }
    }

    return (
        <div className='mt-5' style={{ height: '600px' }}>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
                <p className='text-center text-danger'>{errorElement}</p>
                {/* <>{loading && <Loading></Loading>}</> */}

                <Button className='w-50 d-block mx-auto' variant="dark" type="submit">
                    Sign Up
                </Button>
            </Form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUp;