import { useState } from 'react'
import './user_details.css'
import '../multi_fun_page.css'
import '../login.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export function UserDetails()
{

    const [inputData,setInputData] = useState({personName:"",email:"",});

    function changeHandle(e)
    {

        setInputData({...inputData,
                    [e.target.name]:[e.target.value]
                    },
                    
                    )
    }

    let {personName,email,contactNum} = inputData


    return(
        
           
                <div className='user_Details'>
                    <div className="user-form">
                        <div>
                            <label className=''>Person Name<span className='required'>*</span></label><br></br>
                            <input  type="text" autoComplete='off' name="personName"  placeholder='Enter Name' value={inputData.personName} onChange={changeHandle} autoFocus required/>
                        </div>

                        <div>
                            <label>Email<span className='required'>*</span></label><br></br>
                            <input type="email" autoComplete='off' name="email"  placeholder='Enter email' value={inputData.email} onChange={changeHandle} required/>
                        </div>

                        <div>
                            <label>Contact<span className='required'>*</span></label><br></br>
                            <div><PhoneInput  placeholder="Enter phone Num" name="contactNum" value={inputData.contactNum} onChange={changeHandle}/></div>
                        </div>
                        
                    </div>
                </div>
          
        
    )
}
