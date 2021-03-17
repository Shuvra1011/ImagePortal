import React, { useState, useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
 import './ProgressBar.css';
export default function ProgressBar({file, setFile}) {
    // const [fileStatus, setFileStatus] = useState(null);
    // if (props.file !== null){
    //     setFileStatus(useStorage)
    // }

    const { url, progress } = useStorage(file);
    const [style, setStyle] = useState({width:'0%'});
    console.log(progress);
    
    useEffect(()=>{
        setStyle(progress)
    },[progress])

    useEffect(()=>{
        if (url){
          setFile(null);  
        }
    },[url, setFile])

    if (!isNaN(progress)) {
        return (
            <div className="progress-bar">
                <div className="progress" style={{width: progress + '%'}}>
                </div>
            </div>
                
        )
    } else {
        return (
            <div >

            </div>
        )
    }
}







