import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainIntroduction from './pages/Introduction';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import DataScience from './pages/DataScience';
import MobileDevelopment from './pages/MobileDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import JavaScriptCourse from './TechStack/Courses/JavaScriptCourse/JavaScriptCourse';
import CSSCourse from './TechStack/Courses/CSSCourse/CSSCourse';
import ReactCourse from './TechStack/Courses/ReactCourse/ReactCourse';
import NodeJSCourse from './TechStack/Courses/NodeJSCourse/NodeJSCourse';
import JavaCourse from './TechStack/Courses/JavaCourse/JavaCourse';
import SQLCourse from './TechStack/Courses/SQLCourse/SQLCourse';
import jsConfig from './TechStack/Courses/JavaScriptCourse/courseConfig';
import cssConfig from './TechStack/Courses/CSSCourse/courseConfig';
import reactConfig from './TechStack/Courses/ReactCourse/courseConfig';
import nodeConfig from './TechStack/Courses/NodeJSCourse/courseConfig';
import javaConfig from './TechStack/Courses/JavaCourse/courseConfig';
import sqlConfig from './TechStack/Courses/SQLCourse/courseConfig';
import PythonCourse from './TechStack/Courses/PythonCourse/PythonCourse';
import pythonConfig from './TechStack/Courses/PythonCourse/courseConfig';
import PHPCourse from './TechStack/Courses/PHPCourse/PHPCourse';
import phpConfig from './TechStack/Courses/PHPCourse/courseConfig';
import BootstrapCourse from './TechStack/Courses/BootstrapCourse/BootstrapCourse';
import bootstrapConfig from './TechStack/Courses/BootstrapCourse/courseConfig';

// JavaScript Course Chapters - Basics
import JSIntroduction from './TechStack/Courses/JavaScriptCourse/chapters/basics/Introduction';
import WhereTo from './TechStack/Courses/JavaScriptCourse/chapters/basics/WhereTo';
import Output from './TechStack/Courses/JavaScriptCourse/chapters/basics/Output';
import Statements from './TechStack/Courses/JavaScriptCourse/chapters/basics/Statements';
import Syntax from './TechStack/Courses/JavaScriptCourse/chapters/basics/Syntax';
import Comments from './TechStack/Courses/JavaScriptCourse/chapters/basics/Comments';
import Variables from './TechStack/Courses/JavaScriptCourse/chapters/basics/Variables';
import Let from './TechStack/Courses/JavaScriptCourse/chapters/basics/Let';
import Const from './TechStack/Courses/JavaScriptCourse/chapters/basics/Const';
import Operators from './TechStack/Courses/JavaScriptCourse/chapters/basics/Operators';
import Arithmetic from './TechStack/Courses/JavaScriptCourse/chapters/basics/Arithmetic';
import Assignment from './TechStack/Courses/JavaScriptCourse/chapters/basics/Assignment';
import DataTypes from './TechStack/Courses/JavaScriptCourse/chapters/basics/DataTypes';

// Control Flow
import IfElse from './TechStack/Courses/JavaScriptCourse/chapters/controlFlow/IfElse';
import Switch from './TechStack/Courses/JavaScriptCourse/chapters/controlFlow/Switch';
import Loops from './TechStack/Courses/JavaScriptCourse/chapters/controlFlow/Loops';
import BreakContinue from './TechStack/Courses/JavaScriptCourse/chapters/controlFlow/BreakContinue';
import TryCatch from './TechStack/Courses/JavaScriptCourse/chapters/controlFlow/TryCatch';

// Functions
import Functions from './TechStack/Courses/JavaScriptCourse/chapters/functions/Functions';
import Parameters from './TechStack/Courses/JavaScriptCourse/chapters/functions/Parameters';
import ArrowFunctions from './TechStack/Courses/JavaScriptCourse/chapters/functions/ArrowFunctions';
import Callbacks from './TechStack/Courses/JavaScriptCourse/chapters/functions/Callbacks';
import Closures from './TechStack/Courses/JavaScriptCourse/chapters/functions/Closures';

// Objects & Arrays
import Objects from './TechStack/Courses/JavaScriptCourse/chapters/objects/Objects';
import Arrays from './TechStack/Courses/JavaScriptCourse/chapters/objects/Arrays';
import ArrayMethods from './TechStack/Courses/JavaScriptCourse/chapters/objects/ArrayMethods';
import ObjectMethods from './TechStack/Courses/JavaScriptCourse/chapters/objects/ObjectMethods';
import JSON from './TechStack/Courses/JavaScriptCourse/chapters/objects/JSON';

// DOM & Events
import DOMIntro from './TechStack/Courses/JavaScriptCourse/chapters/dom/DOMIntro';
import DOMMethods from './TechStack/Courses/JavaScriptCourse/chapters/dom/DOMMethods';
import DOMElements from './TechStack/Courses/JavaScriptCourse/chapters/dom/DOMElements';
import Events from './TechStack/Courses/JavaScriptCourse/chapters/dom/Events';
import EventHandling from './TechStack/Courses/JavaScriptCourse/chapters/dom/EventHandling';

// Asynchronous JS
import AsyncIntro from './TechStack/Courses/JavaScriptCourse/chapters/async/AsyncIntro';
import Promises from './TechStack/Courses/JavaScriptCourse/chapters/async/Promises';
import AsyncAwait from './TechStack/Courses/JavaScriptCourse/chapters/async/AsyncAwait';
import FetchAPI from './TechStack/Courses/JavaScriptCourse/chapters/async/FetchAPI';
import AJAX from './TechStack/Courses/JavaScriptCourse/chapters/async/AJAX';

// Advanced Topics
import Classes from './TechStack/Courses/JavaScriptCourse/chapters/advanced/Classes';
import Modules from './TechStack/Courses/JavaScriptCourse/chapters/advanced/Modules';
import ErrorHandling from './TechStack/Courses/JavaScriptCourse/chapters/advanced/ErrorHandling';
import Debugging from './TechStack/Courses/JavaScriptCourse/chapters/advanced/Debugging';
import BestPractices from './TechStack/Courses/JavaScriptCourse/chapters/advanced/BestPractices';

// Data Structures
import DataStructuresArrays from './TechStack/Courses/JavaScriptCourse/chapters/dataStructures/Arrays';
import Sets from './TechStack/Courses/JavaScriptCourse/chapters/dataStructures/Sets';
import Maps from './TechStack/Courses/JavaScriptCourse/chapters/dataStructures/Maps';
import WeakMapSet from './TechStack/Courses/JavaScriptCourse/chapters/dataStructures/WeakMapSet';

// Operators
import ArithmeticOps from './TechStack/Courses/JavaScriptCourse/chapters/operators/Arithmetic';
import ComparisonOps from './TechStack/Courses/JavaScriptCourse/chapters/operators/Comparison';

import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

// Create a cache for lazy loaded components
const componentCache = {};

// Helper function to convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

// Helper function to check if string is already in PascalCase
const isPascalCase = (str) => {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
};

// Import all components dynamically
const importComponent = (course, category, section) => {
  const path = `${course}/${category}/${section.id}`;
  const componentName = section.id;
  
  if (!componentCache[path]) {
    componentCache[path] = React.lazy(() => 
      import(`./TechStack/Courses/${course}/chapters/${category}/${componentName}`)
        .then(module => ({
          default: module.default || module
        }))
        .catch(error => {
          console.error(`Failed to load component: ${path}`, error);
          throw error;
        })
    );
  }
  
  return componentCache[path];
};

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/introduction" element={<MainIntroduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/courses/web-development" element={<WebDevelopment />} />
        <Route path="/courses/data-science" element={<DataScience />} />
        <Route path="/courses/mobile-development" element={<MobileDevelopment />} />
        <Route path="/courses/ui-ux-design" element={<UIUXDesign />} />
        
        {/* JavaScript Course Routes */}
        <Route path="/javascript-course" element={<JavaScriptCourse />}>
          {Object.entries(jsConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('JavaScriptCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* CSS Course Routes */}
        <Route path="/css-course" element={<CSSCourse />}>
          {Object.entries(cssConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('CSSCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* React Course Routes */}
        <Route path="/react-course" element={<ReactCourse />}>
          {Object.entries(reactConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('ReactCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* Node.js Course Routes */}
        <Route path="/nodejs-course" element={<NodeJSCourse />}>
          {Object.entries(nodeConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('NodeJSCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* Java Course Routes */}
        <Route path="/java-course" element={<JavaCourse />}>
          {Object.entries(javaConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('JavaCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* SQL Course Routes */}
        <Route path="/sql-course" element={<SQLCourse />}>
          {Object.entries(sqlConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('SQLCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* Python Course Routes */}
        <Route path="/python-course" element={<PythonCourse />}>
          {Object.entries(pythonConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('PythonCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* PHP Course Routes */}
        <Route path="/php-course" element={<PHPCourse />}>
          {Object.entries(phpConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('PHPCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>

        {/* Bootstrap Course Routes */}
        <Route path="/bootstrap-course" element={<BootstrapCourse />}>
          {Object.entries(bootstrapConfig).map(([category, { sections }]) =>
            sections.map(section => {
              const LazyComponent = importComponent('BootstrapCourse', category, section);
              return (
                <Route
                  key={section.id}
                  path={section.id}
                  element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <LazyComponent />
                    </React.Suspense>
                  }
                />
              );
            })
          )}
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
