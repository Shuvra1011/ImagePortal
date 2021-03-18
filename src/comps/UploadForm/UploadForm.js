import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Style from './UploadForm.module.css';

export default function UploadForm() {
    const [image, setImage] = useState();
    const [fileStatus, setFileStatus] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState('');

    const [uploadButtonDisable, setUploadButtonDisable] = useState(true);
    const [uploadButtonClicked, setUploadButtonClicked] = useState(false);
    // const [alertDanger, setAlertDanger] = useState(false);
    // const [alertInfo, setAlertInfo] = useState(true);
    // const [alertSuccess, setAlertSuccess] = useState(false);
const [alerts, setAlerts] = useState({
    info:     true,
    danger:   false,
    success:  false,
});
    // useEffect(()=>{
    //     // console.log(images);
    // },[images])

    // const alerInfotRef = useRef();
    // const alertDangerRef = useRef();
    // const alertSuccessRef = useRef();
    const fileInput = useRef();
    const allowedTypes = /^.*\/(jpg|JPG|JPEG|jpeg|png|PNG)$/;

    const changeInputhandler = (e) => {
        // alerInfotRef.current.disabled = true;
        let selected = e.target.files[0];
        let typeMatch = allowedTypes.test(selected.type);
        // alertSuccessRef.current.className = `${Style.hideDiv}`;

        if (typeMatch) {
            setUploadButtonDisable(false);
                // setFileStatus(true);
            setSelectedImage(selected);
            setAlerts((alerts)=>{
               return({ ...alerts, danger:false, info:false});
            });
            // setAlertSuccess(false);
            // setAlertInfo(true)
            // alerInfotRef.current.className = `${Style.hideDiv}`;
            //     alertDangerRef.current.className = `${Style.hideDiv}`;
        } else {
            setAlerts((alerts)=>{
                return({ ...alerts, info:false, danger:true});
             });
             setUploadButtonDisable(true);
            // setFileStatus(false);
            // console.log("Invalid file type");
            //alertDangerRef.current.className = `alert alert-danger`;
        }
        // } else {
        //     setFileStatus(false);
        //     console.log("No files selected!")
        //     alertDangerRef.current.disabled = true;
        // }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // setImage( selectedImage);
        fileInput.current.value = ""
        setUploadButtonClicked(true);
        // setTimeout(() => {
        //     setAlerts((alerts)=>{
        //         return({ ...alerts, info:false, danger:false});
        //      });
        //     // setFileStatus(false);

        // }, 3000)
        setAlerts((alerts)=>{
            return({ ...alerts, info:true, danger:false}); ///Check
         });
        // if (fileStatus){
        //     alertSuccessRef.current.className = `alert alert-success`;
        // }
        // alerInfotRef.current.className = 'alert alert-info'

    }
    return (
        <div className="container">
            {console.log("UploadForm")}
            {alerts.info&&<div className="alert alert-info" role="alert">Please select png/jpeg image</div>}
            <form>
                <div className={Style.input}>

                        <input ref={fileInput} type='file' onChange={changeInputhandler} />
                        <button className={Style.uploadButton} disabled={uploadButtonDisable} onClick={e => onSubmitHandler(e)}>+</button>

                    {/* Show preview of the image */}
                </div>
                {alerts.danger&&<div className="alert alert-danger" role="alert">Invalid File Type!</div>}

                {/* <button  onClick=>Submit</button> */}

                {/* {(!selectedImage===null)?<div ref={alertSuccessRef} className={Style.hideDiv} role="alert">{` ${image.name} uploaded successfully`}</div>:<div></div>} */}
                <div className= "output">
                    {error && <div className="error">{error}</div>}
                    {image && <div>{image.name}</div>}
                    {/* {console.log(file)} */}
                    {/* {image && <ProgressBar file={image} setFile={setImage}/>} */}
                    {/* <FileUpload file={image} setImage={setImage}/> */}
                    {(uploadButtonClicked)?<ProgressBar file={selectedImage} setFile={setSelectedImage} click={setUploadButtonClicked} />:<div></div>}
                </div>
            </form>
        </div>
    );
}