import { useState } from 'react'
import './user_details.css'
import '../multi_fun_page.css'
import '../login.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import propTypes from 'prop-types'


export function UserDetails(props)
{

    

    function changeHandle(e)
    {
        console.log(props.data)
        props.setData({...props.data,
                    [e.target.name]:[e.target.value]
                    },
                    
                    )
    }

   


    return(
        
           
                <div className='user_Details'>
                    <div className="user-form">
                        <div>
                            <label className=''>Person Name<span className='required'>*</span></label><br></br>
                            <input  type="text" autoComplete='off' name="username"  placeholder='Enter Name' value={props.data.username} onChange={changeHandle} autoFocus required/>
                        </div>

                        <div>
                            <label>Email<span className='required'>*</span></label><br></br>
                            <input type="email" autoComplete='off' name="email"  placeholder='Enter email' value={props.data.email} onChange={changeHandle} required/>
                        </div>

                        <div>
                            <label>Contact<span className='required'>*</span></label><br></br>
                            <div><PhoneInput  placeholder="Enter phone Num" name="contactNum" value={props.data.phoneNum} onChange={(e) => {props.setData({...props.data,phoneNum:e})}}/></div>
                        </div>
                        
                    </div>
                </div>
          
        
    )
}

UserDetails.propTypes = {
    data : propTypes.object,
    setData : propTypes.func
    
}

