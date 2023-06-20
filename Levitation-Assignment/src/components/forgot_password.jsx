
import React, { useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import "./login.css"

const ForgotPassword = () => {

    
    const navigate = useNavigate();

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const handleClick = () => {
        navigate('/')
    }

    const handleLogin = () => {
      
    }

    

    return (
      <form onSubmit={handleClick}>
        <div className="page">
            
              <div className="cover">
                  <h3>Email</h3>
                  <input type="text" placeholder="enter email" autoFocus/>
                  <h3>Change Password</h3>
                  <input type="text" placeholder="change password" />
                  <h3>Confirm Password</h3>
                  <input type="password" placeholder="confirm password" />

                  
                  <button className="login-btn" type="submit">Save</button>
                
              </div>
            
          </div>
        </form>
    )
}

export default ForgotPassword