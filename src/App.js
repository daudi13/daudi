import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Routes/Homepage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
