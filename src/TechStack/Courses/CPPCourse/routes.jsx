import React, { Suspense } from 'react';
import CPPCourse from './CPPCourse';
import ErrorBoundary from '../../../components/ErrorBoundary';
import LoadingFallback from '../../../components/LoadingFallback';
import ErrorPage from '../../../pages/ErrorPage';

const wrapInErrorBoundary = (Component) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {Component}
    </Suspense>
  </ErrorBoundary>
);

// Import all course components lazily
const Introduction = React.lazy(() => import('./chapters/basics/Introduction'));
const EnvironmentSetup = React.lazy(() => import('./chapters/basics/EnvironmentSetup'));
const Syntax = React.lazy(() => import('./chapters/basics/Syntax'));
const DataTypes = React.lazy(() => import('./chapters/basics/DataTypes'));
const Variables = React.lazy(() => import('./chapters/basics/Variables'));
const Constants = React.lazy(() => import('./chapters/basics/Constants'));
const Operators = React.lazy(() => import('./chapters/basics/Operators'));
const ControlFlow = React.lazy(() => import('./chapters/basics/ControlFlow'));

const Functions = React.lazy(() => import('./chapters/functions/Functions'));
const FunctionParameters = React.lazy(() => import('./chapters/functions/FunctionParameters'));
const FunctionOverloading = React.lazy(() => import('./chapters/functions/FunctionOverloading'));
const InlineFunctions = React.lazy(() => import('./chapters/functions/InlineFunctions'));
const Recursion = React.lazy(() => import('./chapters/functions/Recursion'));

const ClassesObjects = React.lazy(() => import('./chapters/oop/ClassesObjects'));
const Constructors = React.lazy(() => import('./chapters/oop/Constructors'));
const Inheritance = React.lazy(() => import('./chapters/oop/Inheritance'));
const Polymorphism = React.lazy(() => import('./chapters/oop/Polymorphism'));
const Encapsulation = React.lazy(() => import('./chapters/oop/Encapsulation'));
const Abstraction = React.lazy(() => import('./chapters/oop/Abstraction'));

const Pointers = React.lazy(() => import('./chapters/memory/Pointers'));
const References = React.lazy(() => import('./chapters/memory/References'));
const DynamicMemory = React.lazy(() => import('./chapters/memory/DynamicMemory'));
const MemoryLeaks = React.lazy(() => import('./chapters/memory/MemoryLeaks'));
const SmartPointers = React.lazy(() => import('./chapters/memory/SmartPointers'));

const Containers = React.lazy(() => import('./chapters/stl/Containers'));
const Iterators = React.lazy(() => import('./chapters/stl/Iterators'));
const Algorithms = React.lazy(() => import('./chapters/stl/Algorithms'));
const Vectors = React.lazy(() => import('./chapters/stl/Vectors'));
const Lists = React.lazy(() => import('./chapters/stl/Lists'));
const Maps = React.lazy(() => import('./chapters/stl/Maps'));

const Templates = React.lazy(() => import('./chapters/advanced/Templates'));
const ExceptionHandling = React.lazy(() => import('./chapters/advanced/ExceptionHandling'));
const FileHandling = React.lazy(() => import('./chapters/advanced/FileHandling'));
const Namespaces = React.lazy(() => import('./chapters/advanced/Namespaces'));
const Multithreading = React.lazy(() => import('./chapters/advanced/Multithreading'));

const routes = {
  path: 'cpp-course',
  element: <CPPCourse />,
  errorElement: <ErrorPage />,
  children: [
    // Basics
    { path: 'introduction', element: wrapInErrorBoundary(<Introduction />) },
    { path: 'environment-setup', element: wrapInErrorBoundary(<EnvironmentSetup />) },
    { path: 'syntax', element: wrapInErrorBoundary(<Syntax />) },
    { path: 'data-types', element: wrapInErrorBoundary(<DataTypes />) },
    { path: 'variables', element: wrapInErrorBoundary(<Variables />) },
    { path: 'constants', element: wrapInErrorBoundary(<Constants />) },
    { path: 'operators', element: wrapInErrorBoundary(<Operators />) },
    { path: 'control-flow', element: wrapInErrorBoundary(<ControlFlow />) },

    // Functions
    { path: 'functions', element: wrapInErrorBoundary(<Functions />) },
    { path: 'function-parameters', element: wrapInErrorBoundary(<FunctionParameters />) },
    { path: 'function-overloading', element: wrapInErrorBoundary(<FunctionOverloading />) },
    { path: 'inline-functions', element: wrapInErrorBoundary(<InlineFunctions />) },
    { path: 'recursion', element: wrapInErrorBoundary(<Recursion />) },

    // OOP
    { path: 'classes-objects', element: wrapInErrorBoundary(<ClassesObjects />) },
    { path: 'constructors', element: wrapInErrorBoundary(<Constructors />) },
    { path: 'inheritance', element: wrapInErrorBoundary(<Inheritance />) },
    { path: 'polymorphism', element: wrapInErrorBoundary(<Polymorphism />) },
    { path: 'encapsulation', element: wrapInErrorBoundary(<Encapsulation />) },
    { path: 'abstraction', element: wrapInErrorBoundary(<Abstraction />) },

    // Memory Management
    { path: 'pointers', element: wrapInErrorBoundary(<Pointers />) },
    { path: 'references', element: wrapInErrorBoundary(<References />) },
    { path: 'dynamic-memory', element: wrapInErrorBoundary(<DynamicMemory />) },
    { path: 'memory-leaks', element: wrapInErrorBoundary(<MemoryLeaks />) },
    { path: 'smart-pointers', element: wrapInErrorBoundary(<SmartPointers />) },

    // STL
    { path: 'containers', element: wrapInErrorBoundary(<Containers />) },
    { path: 'iterators', element: wrapInErrorBoundary(<Iterators />) },
    { path: 'algorithms', element: wrapInErrorBoundary(<Algorithms />) },
    { path: 'vectors', element: wrapInErrorBoundary(<Vectors />) },
    { path: 'lists', element: wrapInErrorBoundary(<Lists />) },
    { path: 'maps', element: wrapInErrorBoundary(<Maps />) },

    // Advanced
    { path: 'templates', element: wrapInErrorBoundary(<Templates />) },
    { path: 'exception-handling', element: wrapInErrorBoundary(<ExceptionHandling />) },
    { path: 'file-handling', element: wrapInErrorBoundary(<FileHandling />) },
    { path: 'namespaces', element: wrapInErrorBoundary(<Namespaces />) },
    { path: 'multithreading', element: wrapInErrorBoundary(<Multithreading />) }
  ]
};

export default routes; 