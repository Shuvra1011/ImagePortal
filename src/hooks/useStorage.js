import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../FirebaseConfig/FirebaseConfig';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const fileSizeConverter = (size) => {
        let kB = 1024;
        let mB = 1048576;
        if (size >= mB) {
            return `${Math.round(size / mB)} MB`;
        } else if (size >= kB) {
            return `${Math.round(size / kB)} KB`
        } else {
            return `${size} Byte`
        }
    }

    // if (!file.size === 0) {
    useEffect(() => {
        console.log("UseStorage", file)
         if (file !== null) {
             console.log("inside if")
            // const storageRef = projectStorage.ref().child(`images/${file.name}`);

            // console.log(`From useStorage ${fileSizeConverter(70099000)}`);

            const storageRef = projectStorage.ref().child(`images/${file.name}`);
            const collectionRef = projectFirestore.collection('images')
            const metadata = {
                name: file.name,
                contentType: file.type,
                size: fileSizeConverter(file.size),
            }
            // console.log("Projectstorage ", storageRef.fullPath);
            // console.log(metadata)
            storageRef.put(file, metadata)
                .on('state_changed',
                    (snap) => {
                        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                        setProgress(percentage);

                    },
                    (err) => {
                        setError(err);
                        console.log("err")
                    },
                    async () => {
                        const url = await storageRef.getDownloadURL();
                        const createdAt = timestamp();
                        collectionRef.add({ url, createdAt })
                        setUrl(url);
                        console.log("Done")
                    })
                }
    }, [file]);
    return { progress, url, error }
    // }else{

    // }
}

export default useStorage;