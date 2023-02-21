import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


export default function SignUp() {
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        const reqBody = {
            username: username,
            email: email,
            password: password
        }
        
    
        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json',
            }
        }
    
        console.log(url, options)
        if (password!==confirmPassword) {
            console.log(' Please try again.  ')
        }
        
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            setRedirect(true)
        }
        
    };
    

    return redirect?<Navigate to='/login' />:
    
    (
        <div className='container my-5'>
            <h1 className='row d-flex justify-content-center'>Sign Up</h1>
            <div className='row d-flex justify-content-center my-5'>
                <form className='col-3 text-center' onSubmit={handleSubmit}>
                    <input type='text' name='username' className='form-control' placeholder='Username'></input>
                    <input type='text' name='email' className='form-control' placeholder='Email'></input>
                    <input type='password' name='password' className='form-control' placeholder='Password'></input>
                    <input type='password' name='confirmPassword' className='form-control' placeholder='Confirm Password'></input>
                    <button type='submit' className='btn btn-primary my-2'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}