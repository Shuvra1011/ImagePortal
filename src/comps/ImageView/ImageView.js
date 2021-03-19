import React from 'react'
import useFireStoreHook from '../../hooks/useFireSotreHook'

export default function ImageView({setSelectedImage}) {
    const { docs } = useFireStoreHook('images');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => {
                return (<div className="img-wrap" key={doc.id} 
                            onClick={()=>{return setSelectedImage(doc.url)}}>
                    <img src={doc.url} alt="" />
                </div>)
            })

            }
        </div>
    )
}
