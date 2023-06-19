import './App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Body from './Body';

function App() {

  const [page, setPage] = useState("Home");

  

  return (
    <div className="App">
      <div>
        <h2>{page}</h2>
      </div>
      <Navbar setPage={setPage} />
      <Body page={page}/>
    </div>
  );
}

export default App;
