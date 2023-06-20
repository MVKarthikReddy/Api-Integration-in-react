import { useState , useEffect} from "react"
import './multi_fun_page.css'
import './page3/user_details.css'
import './login.css'

import { UserDetails } from "./page3/user_details"
import { UserAddress } from "./page3/user_address"
import { FileUpload } from "./page3/file_upload"
import { MultiFileUpload } from "./page3/multi_file_upload"
import { GeoLocation } from "./page3/geoLocation"





function ProgressBar1() {
  
    const [progress,setProgress] = useState(0)
    const [page,setPage] = useState(<UserDetails/>)
    const [count,setCount] = useState(0)

    const SubmitHandler = () => {
        
        return true

    }

    const progressHandler = () => {
        if(progress<100)
        {
            setProgress(progress+20)
            setCount(count+1)
            // console.log("User details" + inputData)
            
            if(count===0)
            {
                setPage(<UserAddress/>)
            }
            else if(count===1)
            {
                setPage(<FileUpload/>)
            }
            else if(count===2)
            {
                setPage(<MultiFileUpload/>)
            }
            else if(count===3)
            {
                setPage(<GeoLocation/>)
            }
        }

        if(progress>=80)
        {
            setBut("Submit")
            if(SubmitHandler())
            {
                console.log("Great Job")
            }
        }
        else{
            setBut("Next")
        }
    }

    const previousHandler = () => {

        if(progress>0)
        {
            setProgress(progress-20)
            setCount(count-1)
            console.log("count : "+count)

            if(count===4)
            {
                setPage(<MultiFileUpload/>)
            }
            else if(count===3)
            {
                setPage(<FileUpload/>)
            }
            else if(count===2)
            {
                setPage(<UserAddress/>)
            }
            else if(count===1)
            {
                setPage(<UserDetails/>)
            }
        }
        if(progress===100)
        {
            setBut("Next")
        }
    }

    
    const [but,setBut] = useState("Next")


    return (
               
        
            <div className="con">
                <div className="container">

                    <div className="progress-bar">
                        <div className="progress-fill" style={{width:`${progress}%`,backgroundColor:"rgb(79, 195, 241)"}}></div>
                    </div>

                    <div className="progress-label">{progress}%</div>
                
                            <div className="pages">
                                <h3>Fill the form</h3>
                                {page}
                            </div>
                        

                    <div >
                        <button className="buttons" id="previous" onClick={previousHandler}>Previous</button>
                        <button className="buttons" id="next" onClick={progressHandler}>{but}</button>
                    </div>
                    
                    

                </div>
            </div>
        
    )
  }

export default ProgressBar1;
