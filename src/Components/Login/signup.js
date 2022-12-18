import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup=()=> {
  const namesignInputRef=useRef();

  const emailsignInputRef=useRef();
  const passwordsignInputRef=useRef();
  const Navigate=useNavigate()


  const signUp=async(e)=>{
     e.preventDefault();
      const enteredEmail=emailsignInputRef.current.value;
      const enteredPassword=passwordsignInputRef.current.value;
      const enteredname=namesignInputRef.current.value;

      const response=await fetch("http://localhost:9000/api/login/createuser",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
            name:enteredname,
            email:enteredEmail,
            password:enteredPassword
        })
    })

    const json=await response.json()
    
    if(json.success){
        alert("New account created");
        localStorage.setItem("token",json.authtoken);
        localStorage.setItem('email',enteredEmail);

        Navigate("/");
    }
    else{
        alert(json.error)
    }

      
  }

  return (
      <div className='container-fluid justify-content-center col-lg-3 col-sm-6 col-8 bg-white mt-5 p-5'>
          <h4 className='text-dark text-center'>Signup</h4>
          <form onSubmit={signUp}>
              <div className="form-group col-12 mt-4">
                  <label htmlFor="name">Name</label>
                  <input ref={namesignInputRef} type="text" className="form-control" id="name" required/>
                      
              </div>
              <div className="form-group col-12 mt-3">
                  <label htmlFor="email">Email</label>
                  <input ref={emailsignInputRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                      
              </div>
              <div className="form-group col-12 mt-3">
                  <label htmlFor="password">Password</label>
                  <input ref={passwordsignInputRef} type="password" className="form-control" id="password"required/>
              </div>
              
              <button type="submit" className="btn btn-dark w-100 my-5">Create new account</button>
          </form>
      </div>
  )
}

export default Signup