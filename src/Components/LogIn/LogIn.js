import React, { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const LogIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignin=()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
  auth
);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };


  if (loading || sending) {
    return <Loading></Loading>
  }


  return (
    <div className="w-25 mx-auto my-5">
      <h3 className="text-center text-primary">Please Log in</h3>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>   
           
      </Form>
      <button onClick={handleGoogleSignin}>Sign in with google</button> 
      <p className="mt-3">
        Forgot password? <button className="btn btn-link text-white">Reset password</button>
      </p>

      
      <p className="mt-3">
        New to Raju Tea Stall? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;
