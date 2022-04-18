import React, {useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import googleicon from '../../images/google.png';
import './Login.css'

const LogIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
  auth
);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [user,googleUser]);

  
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
        await sendPasswordResetEmail(email);
        toast('Password reset mail Sent!');
    }
    else{
        toast('please enter your email address');
    }
}


  if (loading || sending) {
    return <Loading></Loading>
  }


  return (
    <div className="w-25 mx-auto my-5">
      <h3 className="text-center text-primary">Please Log in</h3>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>       
      </Form>
      <div className="d-flex text-center my-3 google-btn p-2 rounded pe-auto" onClick={() => signInWithGoogle()} >
         <img className="googleicon" src={googleicon} alt="" /> <span className="ms-2">Sign in with google</span>
        </div>

      <p className="mt-3">
        Forgot password? <button  onClick={resetPassword} className="btn btn-link text-danger">Reset password</button>
      </p>

      
      <p className="mt-3">
        New to Raju Tea Stall? <Link to="/signup">Sign Up</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
