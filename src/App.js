import React, { Suspense } from 'react';
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
import Notifications from './pages/Notifications';

// Course imports
import JavaScriptCourse from './TechStack/Courses/JavaScriptCourse/JavaScriptCourse';
import CSSCourse from './TechStack/Courses/CSSCourse/CSSCourse';
import ReactCourse from './TechStack/Courses/ReactCourse/ReactCourse';
import NodeJSCourse from './TechStack/Courses/NodeJSCourse/NodeJSCourse';
import JavaCourse from './TechStack/Courses/JavaCourse/JavaCourse';
import SQLCourse from './TechStack/Courses/SQLCourse/SQLCourse';
import PythonCourse from './TechStack/Courses/PythonCourse/PythonCourse';
import PHPCourse from './TechStack/Courses/PHPCourse/PHPCourse';
import BootstrapCourse from './TechStack/Courses/BootstrapCourse/BootstrapCourse';

// Course configurations
import jsConfig from './TechStack/Courses/JavaScriptCourse/courseConfig';
import cssConfig from './TechStack/Courses/CSSCourse/courseConfig';
import reactConfig from './TechStack/Courses/ReactCourse/courseConfig';
import nodeConfig from './TechStack/Courses/NodeJSCourse/courseConfig';
import javaConfig from './TechStack/Courses/JavaCourse/courseConfig';
import sqlConfig from './TechStack/Courses/SQLCourse/courseConfig';
import pythonConfig from './TechStack/Courses/PythonCourse/courseConfig';
import phpConfig from './TechStack/Courses/PHPCourse/courseConfig';
import bootstrapConfig from './TechStack/Courses/BootstrapCourse/courseConfig';

// HTML Course Components
import HTMLCourse from './TechStack/Courses/HTMLCourse/HTMLCourse';
import Introduction from './TechStack/Courses/HTMLCourse/chapters/basics/Introduction';
import Editors from './TechStack/Courses/HTMLCourse/chapters/basics/Editors';
import Basic from './TechStack/Courses/HTMLCourse/chapters/basics/Basic';
import Elements from './TechStack/Courses/HTMLCourse/chapters/basics/Elements';
import Attributes from './TechStack/Courses/HTMLCourse/chapters/basics/Attributes';
import Headings from './TechStack/Courses/HTMLCourse/chapters/basics/Headings';
import Paragraphs from './TechStack/Courses/HTMLCourse/chapters/basics/Paragraphs';
import Styles from './TechStack/Courses/HTMLCourse/chapters/basics/Styles';
import Formatting from './TechStack/Courses/HTMLCourse/chapters/basics/Formatting';

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
  // Create a unique cache key that includes the course name and category
  const cacheKey = `${course}-${category}-${section.id}`;
  
  if (!componentCache[cacheKey]) {
    componentCache[cacheKey] = React.lazy(() => {
      // Convert course name to match directory structure with correct casing
      const courseMapping = {
        'javascript': 'JavaScriptCourse',
        'css': 'CSSCourse',
        'react': 'ReactCourse',
        'nodejs': 'NodeJSCourse',
        'java': 'JavaCourse',
        'sql': 'SQLCourse',
        'python': 'PythonCourse',
        'php': 'PHPCourse',
        'bootstrap': 'BootstrapCourse'
      };
      
      const courseDir = courseMapping[course.toLowerCase()];
      if (!courseDir) {
        throw new Error(`Unknown course: ${course}`);
      }

      // Get the component name
      const componentName = isPascalCase(section.id) ? section.id : 
        toPascalCase(section.id);

      // Construct the import path
      const importPath = `./TechStack/Courses/${courseDir}/chapters/${category}/${componentName}`;
      console.log(`Attempting to import: ${importPath} for ${course} course`);
      
      return import(`${importPath}.jsx`)
        .catch(error => import(`${importPath}.js`))
        .catch(error => {
          console.error(`Failed to load component: ${importPath}`, error);
          return {
            default: () => (
              <div className="p-6 text-center">
                <h2 className="text-xl text-red-600">Component Not Found</h2>
                <p className="text-gray-600">Could not load: {section.title}</p>
                <p className="text-gray-600 mt-2">Course: {course}, Category: {category}</p>
              </div>
            )
          };
        });
    });
  }
  return componentCache[cacheKey];
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading Component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <h3>Loading...</h3>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar/>
        <main className="pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/introduction" element={<MainIntroduction />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/data-science" element={<DataScience />} />
              <Route path="/mobile-development" element={<MobileDevelopment />} />
              <Route path="/ui-ux-design" element={<UIUXDesign />} />

              {/* HTML Course Routes */}
              <Route path="/html-course" element={<HTMLCourse />}>
                <Route path="introduction" element={<Introduction />} />
                <Route path="editors" element={<Editors />} />
                <Route path="basic" element={<Basic />} />
                <Route path="elements" element={<Elements />} />
                <Route path="attributes" element={<Attributes />} />
                <Route path="headings" element={<Headings />} />
                <Route path="paragraphs" element={<Paragraphs />} />
                <Route path="styles" element={<Styles />} />
                <Route path="formatting" element={<Formatting />} />
              </Route>

              {/* Course Routes with Error Boundaries */}
              {[
                { path: "/javascript-course", element: JavaScriptCourse, config: jsConfig },
                { path: "/css-course", element: CSSCourse, config: cssConfig },
                { path: "/react-course", element: ReactCourse, config: reactConfig },
                { path: "/nodejs-course", element: NodeJSCourse, config: nodeConfig },
                { path: "/java-course", element: JavaCourse, config: javaConfig },
                { path: "/sql-course", element: SQLCourse, config: sqlConfig },
                { path: "/python-course", element: PythonCourse, config: pythonConfig },
                { path: "/php-course", element: PHPCourse, config: phpConfig },
                { path: "/bootstrap-course", element: BootstrapCourse, config: bootstrapConfig },
              ].map(({ path, element: CourseComponent, config }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ErrorBoundary>
                      <CourseComponent />
                    </ErrorBoundary>
                  }
                >
                  {Object.entries(config).map(([category, { sections }]) =>
                    sections.map(section => {
                      const courseName = path.slice(1).split('-')[0]; // Get the course name without the dash and 'course'
                      const LazyComponent = importComponent(
                        courseName,
                        category,
                        section
                      );
                      return (
                        <Route
                          key={section.id}
                          path={section.id}
                          element={
                            <ErrorBoundary>
                              <Suspense fallback={<LoadingFallback />}>
                                <LazyComponent />
                              </Suspense>
                            </ErrorBoundary>
                          }
                        />
                      );
                    })
                  )}
                </Route>
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </Router>
    </ErrorBoundary>
  );
}

export default App;