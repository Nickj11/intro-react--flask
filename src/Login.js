import React, {useState} from 'react'
import Nav from './Nav';



export default function Login({ logMeIn }) {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;


    const url = 'http://127.0.0.1:5000/api/login'
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(username + ':' + password)}`
      }
    }


    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
      logMeIn(data.user)
      setRedirect(true)
    }

  }




    return(
      <div className='container my-5'>
        <h1 className='row d-flex justify-content-center'>Login</h1>
        <div className='row d-flex justify-content-center my-5'>
          <form className='col-3 text-center' onSubmit={handleSubmit}>
            <input type='text' className='form-control' placeholder='Username' name='username'></input>
            <input type='text' className='form-control' placeholder='Password' name='password'></input>
            <button type='submit' className='btn btn-primary my-2'>Submit</button>
          </form>
        </div>
      </div>
    )
  }