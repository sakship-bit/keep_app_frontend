import React from 'react'

function Login() {
    return (
        <div className='container-fluid justify-content-center col-3 bg-white mt-5 p-5'>
            <h4 className='text-dark text-center'>Login</h4>
            <form>
                <div class="form-group col-12 mt-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <div class="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" class="btn btn-dark w-100 my-5">Login</button>
            </form>
        </div>
    )
}

export default Login