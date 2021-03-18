import React from 'react';
import Title from './comps/Title';

import UploadForm from './comps/UploadForm/UploadForm';

function App() {
  return (
    <div className="App">
        {console.log("App")}
              <Title />
      <div className="upload-form-container">

        <UploadForm />
      </div>
    </div>
  );
}

export default App;
