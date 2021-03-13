import React from 'react';
import Title from './comps/Title';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UploadForm from './comps/UploadForm/UploadForm';

function App() {
  return (
    <div className="App container">
      <Title/>
      <UploadForm/>
    </div>
  );
}

export default App;
