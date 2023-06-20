import { useState } from 'react'
import './user_details.css'
import '../multi_fun_page.css'
import '../login.css'
import propTypes from 'prop-types'




export function UserAddress(props)
{


    function changeHandle(e)
    {
        console.log(props.data)
        props.setData({...props.data,
                    [e.target.name]:[e.target.value]
                    })
    }

    // let {address1,address2,city,state,pincode,country} = inputData


    return(
        <>
           
                <div className='user_Details'>
                    <div>
                        <label className=''>Address Line 1<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="text" autoComplete='off' name="address1"  placeholder='Street' value={props.data.address1} onChange={changeHandle} autoFocus required/>
                    </div>

                    <div>
                        <label>Address Line 2<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="textarea" autoComplete='off' name="address2"  placeholder='Apartment,Building or Floor' value={props.data.address2} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Town/City<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="text" autoComplete='off' name="city"  placeholder='' value={props.data.city} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>State<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="text" autoComplete='off' name="state"  placeholder='' value={props.data.state} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Postal Code<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="text" autoComplete='off' name="pincode"  placeholder='' value={props.data.pincode} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Country<span className='required'>*</span></label><br></br>
                        <input className='inputField' type="text" autoComplete='off' name="country"  placeholder='' value={props.data.country} onChange={changeHandle} required/>
                    </div>
                </div>
          
        </>
    )
}

UserAddress.propTypes = {
    data : propTypes.object,
    setData : propTypes.func
}