import { useState , useEffect} from "react"
import './multi_fun_page.css'

import { UserDetails } from "./page3/user_details"
import { UserAddress } from "./page3/user_address"
import { FileUpload } from "./page3/file_upload"
import { MultiFileUpload } from "./page3/multi_file_upload"
import { GeoLocation } from "./page3/geoLocation"
import { useNavigate } from "react-router-dom"





function ProgressBar1() {
  
    const [data,setData] = useState({
        username : "",
        email : "",
        phoneNum : "+91",
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        pincode : "",
        country : "",
        file : "",
        files : "",
        location : "",
    })
    const [page,setPage] = useState(0)
    const FormPages = ["User Info", "User Address", "File Upload1","File Upload2","Geo Location"];

    const navigate = useNavigate()
   
   


    const pageHandler = () => {
        
            
            
            
            
            if(page===0)
            {
                 return <UserDetails data={data} setData={setData} />
                // return <div>Hello</div>
            }
            else if(page===1)
            {
                return <UserAddress data={data} setData={setData}/>
            }
            else if(page===2)
            {
                return <FileUpload data={data} setData={setData}/>
            }
            else if(page===3)
            {
                return (<MultiFileUpload data={data} setData={setData}/>)
            }
            else if(page===4)
            {
                return (<GeoLocation data={data} setData={setData}/>)
            }
        

       
    }

    const isValidName = (props) => {
        return /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(props)
    }

    const isValidEmail = () => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
    }

    const submitHandler = async () => {

            console.log(data);
            if(!isValidName(data.username))
            {
                alert('enter valid username')
            }
            else if(!isValidEmail())
            {
                alert('enter valid email')
            }
            else if(data.address1=="" || data.address2=="" || data.city=="" || data.state=="" ||data.country=="" || data.pincode=="" )
            {
                alert('You missed some address fields')
            }
            else if(data.file=="" || data.files=="")
            {
                alert("You didn't choose any file. Please choose a file to move forward." )
            }
            else{
                console.log(data)
                
                await fetch("http://localhost:3000/users/",
                    {
                        method : 'POST',
                        headers : {
                                    "Content-Type" : "application/json",
                                    "Accept" : "application/json"
                                    },
                        body : JSON.stringify(data)
                    })
                    alert("Successfully submitted the data")
                    navigate('/submit_form')

                
            }

    }



    return (
               
        
            
                <div className="con">
                    <div className="container">

                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2? "60%" : page == 3 ? "80%" : "100%" }}></div>
                        </div>

                        
                    
                                <div className="pages">
                                    <h3>Fill the form</h3>
                                    {pageHandler()}
                                </div>
                            

                        <div >
                            <button className="buttons" id="previous" disabled={page == 0} onClick={() => {
                                                                                                            setPage((currPage) => currPage - 1);
                                                                                                        }}
                                                                                                                
                                                                                                                   > Prev</button>

                            <button className="buttons" id="next"  onClick={() => {
                                                                                    if (page === FormPages.length - 1) {
                                                                                        submitHandler()
                                                                                        
                                                                                    } else {
                                                                                        setPage((currPage) => currPage + 1);
                                                                                    }
                                                                                    }}
                                                                                >
                                                                                    {page === FormPages.length - 1 ? "Submit" : "Next"}</button>
                        </div>
                        
                        

                    </div>
                </div>
            
        
    )
  }

export default ProgressBar1;
