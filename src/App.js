import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './components/Routes/Contacts/Contacts';
import Homepage from './components/Routes/Homepage/Homepage';
import Projects from './components/Routes/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
