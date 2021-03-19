import React from 'react'

export default function Modal ({selected, setSelectedImage}){
    return (
        <div className="backdrop" onClick={()=> setSelectedImage(null)}>
            <img src={selected} alt=""/>
        </div>
    )
}
