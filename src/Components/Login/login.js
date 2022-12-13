import { useRef } from "react"
import React from 'react'

const Login=() =>{
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;

        
    }

    return (
        <div className='container-fluid justify-content-center col-lg-3 col-sm-6 col-8 bg-white mt-5 p-5'>
            <h4 className='text-dark text-center'>Login</h4>
            <form onSubmit={submitHandler}>
                <div class="form-group col-12 mt-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input ref={emailInputRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        
                </div>
                <div class="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input ref={passwordInputRef} type="password" class="form-control" id="exampleInputPassword1"required/>
                </div>
                
                <button type="submit" class="btn btn-dark w-100 my-5">Login</button>
            </form>
        </div>
    )
}

export default Login