import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import GraphManager from './components/GraphManager';
import Snake from './components/snake';

function App() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [filteredData, setFilteredData] = useState(null); 
  const [showTableView, setShowTableView] = useState(false);
  const [showAbout, setShowAbout] = useState(false);



  const handleUploadClick = () => {
    console.log('uploading');
    setFileUploaded(false); // Set fileUploaded to false
    console.log(fileUploaded);
  };

  const handleResetClick = () => {
  };

  const toggleTableView = () => {
    setShowTableView(prev => {
      const newState = !prev;
      if (newState) setShowAbout(false);
      return newState;
    });
  };
  
  const toggleAbout = () => {
    setShowAbout(prev => {
      const newState = !prev;
      if (newState) setShowTableView(false);
      return newState;
    });
  };
    
  return (
    <div className="App">
      <Navbar
        onUploadClick={handleUploadClick}
        onResetClick={handleResetClick}
        showTableView={showTableView}
        toggleTableView={toggleTableView}
        fileUploaded={fileUploaded}
        setFilteredData={setFilteredData}
        showAbout={showAbout}
        toggleAbout={toggleAbout}
      />
      <div className="Main">
        <Snake
          fileUploaded={fileUploaded}
          setFileUploaded={setFileUploaded}
          showTableView={showTableView}
          showAbout={showAbout}
          filteredData={filteredData}
        />
      </div>
    </div>
  );
}

export default App;
