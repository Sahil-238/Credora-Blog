import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Introduction from './pages/Introduction';
// import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
