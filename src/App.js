import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Introduction from './pages/Introduction';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import DataScience from './pages/DataScience';
import MobileDevelopment from './pages/MobileDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/courses/web-development" element={<WebDevelopment />} />
        <Route path="/courses/data-science" element={<DataScience />} />
        <Route path="/courses/mobile-development" element={<MobileDevelopment />} />
        <Route path="/courses/ui-ux-design" element={<UIUXDesign />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
