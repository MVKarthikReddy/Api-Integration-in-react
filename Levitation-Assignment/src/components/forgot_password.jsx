
import { useState} from "react";
import {  useNavigate } from "react-router-dom";
import "./login.css"
import { toast } from "react-toastify";

const ForgotPassword = () => {


    const [data,setData] = useState({
        'username':'',
        'password':'',
        'confirmPass' : '',
    })
    
    const navigate = useNavigate();

    const {username,password,confirmPass} = data
    

    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }

   
    const handleClick =async () => {

        // console.log("Hello")
        
        let r = await fetch("http://localhost:3000/admin/"+username)
        r = await r.json()
        // console.log(r.username)
        // console.log(password.toString()==confirmPass.toString())




        if(password.toString()==confirmPass.toString() && (password.toString()!="" && confirmPass.toString()!=""))
        {
            if(r.username.toString() == username.toString()) 
            {
                await fetch("http://localhost:3000/admin/"+username,
                {
                    method : 'PUT',
                    headers : {
                        "Content-Type" : "application/json",
                        "Accept" : "application/json"
                    },
                    body : JSON.stringify({username,password})
                })

                alert("Successfully changed the Password")
                navigate('/')
            }
            else{
                alert("you are not an admin")
            }
        }
        else{
            alert("Check the password once")
        }

       


        
    }
  

    return (
      
        <div className="page">
            
              <div className="cover">
                  <h3>Email</h3>
                  <input type="text" placeholder="enter email" name="username" value={data.username} onChange={changeHandler} autoFocus/>
                  <h3>Change Password</h3>
                  <input type="password" placeholder="change password" name="password" value={data.password} onChange={changeHandler}/>
                  <h3>Confirm Password</h3>
                  <input type="password" placeholder="confirm password" name="confirmPass" value={data.confirmPass} onChange={changeHandler}/>

                  
                  <button className="login-btn" type="submit" onClick={handleClick}>Save</button>
                
              </div>
            
          </div>
        
    )
}

export default ForgotPassword