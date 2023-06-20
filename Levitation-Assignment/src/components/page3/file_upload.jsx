import { useState } from "react";
import '../multi_fun_page.css'
import '../login.css'
import propTypes from 'prop-types'


 export function FileUpload(props) {

	const [uploadedFile, setUploadedFile] = useState()

    const handleUploadFile = f => {
            setUploadedFile(f)
            console.log(f)
            props.setData({...props.data,file:f})
            console.log(props.data)
    }

    const handleFileEvent =  (e) => {
        const chosenFile = e.target.files
        handleUploadFile(chosenFile);
    }

    return (
		<>
            <div className="upload-file">

            <input id='fileUpload' type='file'
                    accept='application/pdf, image/png'
                    onChange={handleFileEvent}
                    
            />

            </div>
        </>
	);
}

FileUpload.propTypes = {
    data : propTypes.object,
    setData : propTypes.func
  }