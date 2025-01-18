import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DataForm from './Components/DataForm';  // Import the DataForm component
import FloatingIcons from './Components/FloatingIcons';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      <FloatingIcons />
      <DataForm /> {/* Include the DataForm component */}
    </Router>
  );
};

export default App;
