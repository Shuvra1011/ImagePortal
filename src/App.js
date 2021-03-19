import React, { useState } from 'react';
import ImageView from './comps/ImageView/ImageView';
import Modal from './comps/Modal/Modal';
import Title from './comps/Title';

import UploadForm from './comps/UploadForm/UploadForm';

function App() {
  const [selected, setSelectedImage] = useState(null);
  // const [backdrop, setBackdrop] = useState(false);
  return (
    <div className="App">
        {/* {console.log("App")} */}
              <Title />
      <div className="upload-form-container">

        <UploadForm />
      </div>
      <ImageView setSelectedImage={setSelectedImage}/>
      {selected&&<Modal selected={selected} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
