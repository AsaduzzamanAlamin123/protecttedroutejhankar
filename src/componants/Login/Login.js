import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link , useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
  const [ email , setEmail ] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  const handleEmailBlur= event =>{
    setEmail(event.target.value);
  }

  const handlePasswordBlur = (event) =>{
    setPassword(event.target.value)
  }


  const handleOnSubmit = event =>{
    event.preventDefault();
  }
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from , {replace: true})
  }
    return (
        <div>
            <h2>log in</h2>
            <Form onSubmit={handleOnSubmit} className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>
  <p>{error?.message}</p>
  {
    loading && <p>Loading....</p>
  }
  
  <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
    Login
  </Button>
  <p>new to this site <Link to='/signUp'>Create An Accout</Link></p>
</Form>
        </div>
    );
};

export default Login;