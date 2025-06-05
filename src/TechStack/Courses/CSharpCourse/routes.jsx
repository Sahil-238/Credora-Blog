import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import CSharpCourse from './CSharpCourse';
import ErrorBoundary from '../../../components/ErrorBoundary';
import LoadingFallback from '../../../components/LoadingFallback';

const wrapInErrorBoundary = (Component) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {Component}
    </Suspense>
  </ErrorBoundary>
);

// Import all course components lazily
const Introduction = React.lazy(() => import('./chapters/basics/Introduction'));
const GetStarted = React.lazy(() => import('./chapters/basics/GetStarted'));
const Syntax = React.lazy(() => import('./chapters/basics/Syntax'));
const Output = React.lazy(() => import('./chapters/basics/Output'));
const Comments = React.lazy(() => import('./chapters/basics/Comments'));
const Variables = React.lazy(() => import('./chapters/basics/Variables'));
const DataTypes = React.lazy(() => import('./chapters/basics/DataTypes'));
const TypeCasting = React.lazy(() => import('./chapters/basics/TypeCasting'));
const UserInput = React.lazy(() => import('./chapters/basics/UserInput'));
const Operators = React.lazy(() => import('./chapters/basics/Operators'));
const Math = React.lazy(() => import('./chapters/basics/Math'));
const Strings = React.lazy(() => import('./chapters/basics/Strings'));
const Booleans = React.lazy(() => import('./chapters/basics/Booleans'));

const IfElse = React.lazy(() => import('./chapters/control_flow/IfElse'));
const Switch = React.lazy(() => import('./chapters/control_flow/Switch'));
const WhileLoop = React.lazy(() => import('./chapters/control_flow/WhileLoop'));
const ForLoop = React.lazy(() => import('./chapters/control_flow/ForLoop'));
const BreakContinue = React.lazy(() => import('./chapters/control_flow/BreakContinue'));
const Arrays = React.lazy(() => import('./chapters/control_flow/Arrays'));

const Methods = React.lazy(() => import('./chapters/methods/Methods'));
const MethodParameters = React.lazy(() => import('./chapters/methods/MethodParameters'));
const MethodOverloading = React.lazy(() => import('./chapters/methods/MethodOverloading'));

const OopIntro = React.lazy(() => import('./chapters/oop/OopIntro'));
const ClassesObjects = React.lazy(() => import('./chapters/oop/ClassesObjects'));
const ClassMembers = React.lazy(() => import('./chapters/oop/ClassMembers'));
const Constructors = React.lazy(() => import('./chapters/oop/Constructors'));
const AccessModifiers = React.lazy(() => import('./chapters/oop/AccessModifiers'));
const Properties = React.lazy(() => import('./chapters/oop/Properties'));
const Inheritance = React.lazy(() => import('./chapters/oop/Inheritance'));
const Polymorphism = React.lazy(() => import('./chapters/oop/Polymorphism'));
const Abstraction = React.lazy(() => import('./chapters/oop/Abstraction'));
const Interface = React.lazy(() => import('./chapters/oop/Interface'));
const Enums = React.lazy(() => import('./chapters/oop/Enums'));

const Exceptions = React.lazy(() => import('./chapters/error_handling/Exceptions'));
const Files = React.lazy(() => import('./chapters/error_handling/Files'));

const Examples = React.lazy(() => import('./chapters/practice/Examples'));
const Exercises = React.lazy(() => import('./chapters/practice/Exercises'));
const Quiz = React.lazy(() => import('./chapters/practice/Quiz'));
const Projects = React.lazy(() => import('./chapters/practice/Projects'));

const Linq = React.lazy(() => import('./chapters/advanced/Linq'));
const AsyncAwait = React.lazy(() => import('./chapters/advanced/AsyncAwait'));
const Delegates = React.lazy(() => import('./chapters/advanced/Delegates'));
const Generics = React.lazy(() => import('./chapters/advanced/Generics'));
const Collections = React.lazy(() => import('./chapters/advanced/Collections'));

const routes = (
  <Route path="csharp-course" element={<CSharpCourse />}>
    {/* Basics */}
    <Route path="introduction" element={wrapInErrorBoundary(<Introduction />)} />
    <Route path="get-started" element={wrapInErrorBoundary(<GetStarted />)} />
    <Route path="syntax" element={wrapInErrorBoundary(<Syntax />)} />
    <Route path="output" element={wrapInErrorBoundary(<Output />)} />
    <Route path="comments" element={wrapInErrorBoundary(<Comments />)} />
    <Route path="variables" element={wrapInErrorBoundary(<Variables />)} />
    <Route path="data-types" element={wrapInErrorBoundary(<DataTypes />)} />
    <Route path="type-casting" element={wrapInErrorBoundary(<TypeCasting />)} />
    <Route path="user-input" element={wrapInErrorBoundary(<UserInput />)} />
    <Route path="operators" element={wrapInErrorBoundary(<Operators />)} />
    <Route path="math" element={wrapInErrorBoundary(<Math />)} />
    <Route path="strings" element={wrapInErrorBoundary(<Strings />)} />
    <Route path="booleans" element={wrapInErrorBoundary(<Booleans />)} />

    {/* Control Flow */}
    <Route path="if-else" element={wrapInErrorBoundary(<IfElse />)} />
    <Route path="switch" element={wrapInErrorBoundary(<Switch />)} />
    <Route path="while-loop" element={wrapInErrorBoundary(<WhileLoop />)} />
    <Route path="for-loop" element={wrapInErrorBoundary(<ForLoop />)} />
    <Route path="break-continue" element={wrapInErrorBoundary(<BreakContinue />)} />
    <Route path="arrays" element={wrapInErrorBoundary(<Arrays />)} />

    {/* Methods */}
    <Route path="methods-intro" element={wrapInErrorBoundary(<Methods />)} />
    <Route path="method-parameters" element={wrapInErrorBoundary(<MethodParameters />)} />
    <Route path="method-overloading" element={wrapInErrorBoundary(<MethodOverloading />)} />

    {/* OOP */}
    <Route path="oop-intro" element={wrapInErrorBoundary(<OopIntro />)} />
    <Route path="classes-objects" element={wrapInErrorBoundary(<ClassesObjects />)} />
    <Route path="class-members" element={wrapInErrorBoundary(<ClassMembers />)} />
    <Route path="constructors" element={wrapInErrorBoundary(<Constructors />)} />
    <Route path="access-modifiers" element={wrapInErrorBoundary(<AccessModifiers />)} />
    <Route path="properties" element={wrapInErrorBoundary(<Properties />)} />
    <Route path="inheritance" element={wrapInErrorBoundary(<Inheritance />)} />
    <Route path="polymorphism" element={wrapInErrorBoundary(<Polymorphism />)} />
    <Route path="abstraction" element={wrapInErrorBoundary(<Abstraction />)} />
    <Route path="interface" element={wrapInErrorBoundary(<Interface />)} />
    <Route path="enums" element={wrapInErrorBoundary(<Enums />)} />

    {/* Error Handling & Files */}
    <Route path="exceptions" element={wrapInErrorBoundary(<Exceptions />)} />
    <Route path="files" element={wrapInErrorBoundary(<Files />)} />

    {/* Practice */}
    <Route path="examples" element={wrapInErrorBoundary(<Examples />)} />
    <Route path="exercises" element={wrapInErrorBoundary(<Exercises />)} />
    <Route path="quiz" element={wrapInErrorBoundary(<Quiz />)} />
    <Route path="projects" element={wrapInErrorBoundary(<Projects />)} />

    {/* Advanced */}
    <Route path="linq" element={wrapInErrorBoundary(<Linq />)} />
    <Route path="async-await" element={wrapInErrorBoundary(<AsyncAwait />)} />
    <Route path="delegates" element={wrapInErrorBoundary(<Delegates />)} />
    <Route path="generics" element={wrapInErrorBoundary(<Generics />)} />
    <Route path="collections" element={wrapInErrorBoundary(<Collections />)} />
  </Route>
);

export default routes; 