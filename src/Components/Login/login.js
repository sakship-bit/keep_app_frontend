import { useRef } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom";

const Login=() =>{
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const Navigate=useNavigate();

    const submitHandler=async(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        const response=await fetch("http://localhost:9000/api/login/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword
            })
        })

        const json=await response.json()
        console.log(json)

       if(json.success){
            //redirect
            localStorage.setItem('token',json.authtoken);
            localStorage.setItem('email',enteredEmail);

            
            alert("Logged in successfully")
            Navigate("/")
       }
       else{
        alert(json.error)
       }
        
    }

    return (
        <div className='container-fluid justify-content-center col-lg-3 col-sm-6 col-8 bg-white mt-5 p-5'>
            <h4 className='text-dark text-center'>Login</h4>
            <form onSubmit={submitHandler}>
                <div class="form-group col-12 mt-4">
                    <label for="email">Email address</label>
                    <input ref={emailInputRef} type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                        
                </div>
                <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input ref={passwordInputRef} type="password" class="form-control" id="password"required/>
                </div>
                
                <button type="submit" class="btn btn-dark w-100 my-5">Login</button>
            </form>
        </div>
    )
}

export default Login