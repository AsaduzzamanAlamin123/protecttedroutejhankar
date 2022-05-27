import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Link , useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [ error , setError] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('')
    const navigate = useNavigate()
    // create user
    const [createUserWithEmailAndPassword,user,loading ] = useCreateUserWithEmailAndPassword(auth);
    // create user

  //   const location = useLocation()
  // const from = location.state?.from?.pathname || '/fornav'

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = (event) =>{
        setConfirmPassword('event.target.value');

    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError('your to password did not match')
            return;
            }
         if(password.length < 6){
             setError('password must me 6 charecter longer')
             return;
         }  
         
        //  createUserWithEmailAndPassword(email , password);

            


    }
    if(user){
        navigate('/home');
    }

    
    return (
        <div>
            <h2>Sign up</h2>
            
            <Form  onSubmit={handleOnSubmit} className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email"name='email' placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password"name='password' placeholder="Password" />
    {/* <p>{error}</p> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' placeholder="Password" />
  </Form.Group>
  {/* <p className='text-danger'>{error}</p> */}
  
  <Button onClick={() => createUserWithEmailAndPassword(email, password)}  variant="primary" type="submit">
    Login
  </Button>
  <p>already have an account  <Link to='/login'>Login</Link></p>
</Form>
        
        </div>
    );
};

export default SignUp;