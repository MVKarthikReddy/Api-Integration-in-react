

import React, {useEffect, useState} from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import "./login.css"

const Login = () => {

    const [data,setData] = useState({
        'username':'',
        'password':''
    })

    
    const navigate = useNavigate();

    
    const {username,password} = data
    

    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const handleClick = () => {
        navigate('/forgot_password')
    }

    const handleLogin = (e) => {

        e.preventDefault()
        if(validate()){
            console.log(data.username)
            fetch("http://localhost:3000/admin/"+username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }
                else {
                    if (resp.password === password[0]) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        sessionStorage.setItem('userpass',resp.password);
                        navigate('/submit_form')
                        
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
        
    }

    const validate = () => {
        console.log(data)
        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert('enter valid username')
        }
        else if (data.password === '' || data.password === null) {
            result = false;
            alert('Please Enter Password');
        }
        return result;
    }

    

    return (

        <form onSubmit={handleLogin} >
                 
            <div className="page">
            
            
                <div className="cover">
                
                    <h1>Login</h1>
                    <input type="email" placeholder="email" name="username" value={data.username} onChange={changeHandler} autoFocus/>
                    <input type="password" placeholder="password" name="password" value={data.password} onChange={changeHandler}/>

                    <div className="forgot-password" onClick={handleClick}> Forgot Password?</div>
                    <button className="login-btn" type="submit">Login</button>
              
                </div>
            </div> 
        </form>
        
    )
}

export default Login
  