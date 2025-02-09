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
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar/><Home /><Footer /><FloatingIcons /><DataForm /></>} />
        <Route path='/projects' element={<><Navbar/><Projects /><Footer /><FloatingIcons /><DataForm /></>} />
        <Route path='/project-videos' element={<><Navbar/><ProjectsVideo /><Footer /><FloatingIcons /><DataForm /></>} />
        <Route path='/review' element={<><Navbar/><Review /><Footer /><FloatingIcons /><DataForm /></>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
