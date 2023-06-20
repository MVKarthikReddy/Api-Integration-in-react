import { useState , useEffect} from "react"
import './multi_fun_page.css'
import './page3/user_details.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './login.css'



let details = {personName:"",email:"",contactNum:'+91',address1:"",address2:"",city:'',state:'',pincode:'',country:'',file:'',files:'',location:''}



function UserDetails()
{

    const [inputData,setInputData] = useState({personName:"",email:"",});

    function changeHandle(e)
    {

        setInputData({...inputData,
                    [e.target.name]:[e.target.value]
                    },
                    {...details,
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
                        <div>
                            {}
                        </div>
                    </div>
                </div>
          
        
    )
}







function UserAddress()
{

    const [inputData,setInputData] = useState({address1:"",address2:"",city:'',state:'',pincode:'',country:''});

    function changeHandle(e)
    {
        setInputData({...inputData,
                    [e.target.name]:[e.target.value]
                    },
                    {...details,
                        [e.target.name]:[e.target.value]
                    },
                    )
    }

    let {address1,address2,city,state,pincode,country} = inputData


    return(
        
           
                <div className='user_Details'>
                    <div>
                        <label className=''>Address Line 1<span className='required'>*</span></label><br></br>
                        <input  type="text" autoComplete='off' name="address1"  placeholder='Street' value={inputData.address1} onChange={changeHandle} autoFocus required/>
                    </div>

                    <div>
                        <label>Address Line 2<span className='required'>*</span></label><br></br>
                        <input  type="textarea" autoComplete='off' name="address2"  placeholder='Apartment,Building or Floor' value={inputData.address2} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Town/City<span className='required'>*</span></label><br></br>
                        <input  type="text" autoComplete='off' name="city"  placeholder='' value={inputData.city} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>State<span className='required'>*</span></label><br></br>
                        <input  type="text" autoComplete='off' name="state"  placeholder='' value={inputData.state} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Postal Code<span className='required'>*</span></label><br></br>
                        <input  type="text" autoComplete='off' name="pincode"  placeholder='' value={inputData.pincode} onChange={changeHandle} required/>
                    </div>

                    <div>
                        <label>Country<span className='required'>*</span></label><br></br>
                        <input type="text" autoComplete='off' name="state"  placeholder='' value={inputData.country} onChange={changeHandle} required/>
                    </div>
                </div>
          
        
    )
}






function FileUpload() {

	const [uploadedFile, setUploadedFile] = useState()
    // const [fileLimit, setFileLimit] = useState(false);



    const handleUploadFiles = file => {
        const uploaded = [...uploadedFile];
        let limitExceeded = false;
        uploaded.push(file);
        if (!limitExceeded) setUploadedFile(uploaded)
        details[file] = uploaded

    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    return (
		<div className="upload-file">

			<input id='fileUpload' type='file'
					accept='application/pdf, image/png'
                    onChange={handleFileEvent}
                    
			/>

			<div className="uploaded-files-list">
                {uploadedFile}
			</div>

		</div>
	);
}




const MAX_COUNT = 5;

function MultiFileUpload() {

	const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);


    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded)
        {
            console.log(uploaded)
            setUploadedFiles(uploaded)
            details[files] = uploaded
        }

    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    return (
		<div className="upload-file">

			<input id='fileUpload' type='file' multiple
					accept='application/pdf, image/png'
                    onChange={handleFileEvent}
                    disabled={fileLimit}
			/>

			<div className="uploaded-files-list">
                {uploadedFiles.map((file,id) => (
                     <div key={id} className="user">{file.name}</div>
                 ))}
			</div>

		</div>
	);
}






function GeoLocation() {
    const [currLocationJs, setCurrLocationJs] = useState({});
    useEffect(() => {
      getLocationJs();
    }, []);
  
  
    const getLocationJs = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setCurrLocationJs({ latitude, longitude });
        details[location] = position
      });
    };
  
    return (
      <div className="location">
        <h1>Current Location</h1>
        <div className="coordinates">
            <p>Latitude: {currLocationJs.latitude}</p>
            <p>Longitude: {currLocationJs.longitude}</p>
        </div>
      </div>
    );
  }







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
                console.log(details)
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
