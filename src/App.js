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
import DataScienceCourse from './TechStack/Courses/DataScienceCourse/DataScienceCourse';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';

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
import CCourse from './TechStack/Courses/CCourse/CCourse';
import CPPCourse from './TechStack/Courses/CPPCourse/CPPCourse';

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
import cConfig from './TechStack/Courses/CCourse/courseConfig';
import cppConfig from './TechStack/Courses/CPPCourse/courseConfig';

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
  if (!componentCache[section.id]) {
    componentCache[section.id] = React.lazy(() => {
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
        'bootstrap': 'BootstrapCourse',
        'c': 'CCourse'
      };
      
      const courseDir = courseMapping[course.toLowerCase()] || 
        (course.charAt(0).toUpperCase() + course.slice(1) + 'Course');
      
      // Special cases for components that are directly in the chapters directory
      const directComponents = {
        JavaScriptCourse: ['Introduction', 'Basics', 'DOM', 'Advanced', 'Projects'],
        CSSCourse: ['Introduction', 'Basics', 'Layout', 'Advanced'],
        ReactCourse: ['Introduction', 'Basics', 'Hooks', 'Advanced'],
        // Add other courses' direct components as needed
      };

      // Special cases for file names that don't follow the standard convention
      const specialFileNames = {
        'typeof': 'typeofOperator',
        'type-conversion': 'TypeConversion',
        'data-types': 'DataTypesOverview',
        'string-methods': 'StringMethods',
        'string-search': 'StringSearch',
        'string-templates': 'StringTemplates',
        'number-methods': 'NumberMethods',
        'BigInt': 'BigInt',
        'arrow-function': 'ArrowFunctions',
        'json': 'JSON',
        'ajax': 'AJAX',
        'fetch-api': 'FetchAPI',
        'dom-intro': 'DOMIntro',
        'dom-methods': 'DOMMethods',
        'dom-elements': 'DOMElements',
        'dom-events': 'DOMEvents',
        'dom-navigation': 'DOMNavigation',
        'window': 'WindowObject',
        'this-keyword': 'thisKeyword',
        'regexp': 'RegExp',
        'errors': 'ErrorHandling',
        'rwd-intro': 'RWDIntro'
      };
      
      // Get the component name, handling special cases
      const rawComponentName = section.id;
      const componentName = specialFileNames[rawComponentName] || 
        rawComponentName.split('-').map(part => 
          part.charAt(0).toUpperCase() + part.slice(1)
        ).join('');
      
      if (directComponents[courseDir]?.includes(componentName)) {
        return import(`./TechStack/Courses/${courseDir}/chapters/${componentName}`);
      }
      
      // For other components, try the category subfolder with both .jsx and .js extensions
      return import(`./TechStack/Courses/${courseDir}/chapters/${category}/${componentName}.jsx`)
        .catch(error => 
          import(`./TechStack/Courses/${courseDir}/chapters/${category}/${componentName}.js`)
        )
        .catch(error => {
          console.error(`Failed to load component: ${componentName} in ${category} for ${courseDir}`, error);
          throw error;
        });
    });
  }
  return componentCache[section.id];
};

function App() {
  return (
    <ErrorBoundary>
      <>
        <Navbar/>
        <Suspense fallback={<LoadingFallback />}>
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
            
            {/* TechStack Routes */}
            <Route path="/techstack/courses/data-science/*" element={<DataScienceCourse />} />
            
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
              { path: "/c-course", element: CCourse, config: cConfig },
              { path: "/cpp-course", element: CPPCourse, config: cppConfig }
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
                        path={`${category}/${section.id}`}
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
        <Footer/>
      </>
    </ErrorBoundary>
  );
}

export default App;
