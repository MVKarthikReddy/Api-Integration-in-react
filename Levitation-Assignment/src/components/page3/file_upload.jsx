import { useState } from "react";
import './user_details.css'
import '../multi_fun_page.css'
import '../login.css'

 export function FileUpload() {

	const [uploadedFile, setUploadedFile] = useState()
    // const [fileLimit, setFileLimit] = useState(false);



    const handleUploadFiles = file => {
        const uploaded = [...uploadedFile];
        let limitExceeded = false;
        uploaded.push(file);
        if (!limitExceeded) setUploadedFile(uploaded)
        

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
