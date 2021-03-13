import React, {useState, useEffect} from 'react';
import Style from './UploadForm.module.css';

export default function UploadForm (){
    const [images, setImages]= useState(null);
    const [fileStatus, setFileStatus] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        console.log(images);
    },[images])
    const allowedTypes = /^.*\/(jpg|JPG|JPEG|jpeg|png|PNG)$/;
    const changeInputhandler = (e)=>{
        let selected = e.target.files[0];
        let typeMatch = allowedTypes.test(selected.type);
        if(selected){
            if (typeMatch){
                setFileStatus(true);
                setSelectedImage(selected);
            }else{
                setFileStatus(false);
                console.log("Invalid file type");
            }
        }else{
            setFileStatus(false);
            console.log("No files selected!")
        }

    }
    const onSubmitHandler = (event)=> {
        event.preventDefault();
        setImages(selectedImage);
        setSelectedImage(null);
    }
    return(
        <div className="container">
            {(selectedImage===null)&&<div className="alert alert-info" role="alert">Please select png/jpeg image</div>}
            <form>
                <div className={Style.input}>
                    <input  type='file' onChange={changeInputhandler} />
                </div>
                {(!fileStatus)? <div className="alert alert-danger" role="alert">Invalid File Type!</div>:''}
                <button disabled={!selectedImage} onClick={e=>onSubmitHandler(e)}>Submit</button>
            </form>
        </div>
    );
}