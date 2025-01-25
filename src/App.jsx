import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DataForm from './Components/DataForm';  // Import the DataForm component
import FloatingIcons from './Components/FloatingIcons';
import ProjectsVideo from './Pages/ProjectsVideo';
import Review from './Pages/Review';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project-videos' element={<ProjectsVideo />} />
        <Route path='/review' element={<Review />} />
      </Routes>
      <Footer />
      <FloatingIcons />
      <DataForm />
    </Router>
  );
};

export default App;
