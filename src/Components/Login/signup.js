import React from 'react'
import { useRef } from 'react';

const Signup=()=> {
  const namesignInputRef=useRef();

  const emailsignInputRef=useRef();
  const passwordsignInputRef=useRef();


  const signUp=(e)=>{
      e.preventDefault();
      const enteredEmail=emailsignInputRef.current.value;
      const enteredPassword=passwordsignInputRef.current.value;
      const enteredname=namesignInputRef.current.value;

      
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