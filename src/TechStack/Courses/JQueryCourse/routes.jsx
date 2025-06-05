import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import JQueryCourse from './JQueryCourse';
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
const Installation = React.lazy(() => import('./chapters/basics/Installation'));
const Syntax = React.lazy(() => import('./chapters/basics/Syntax'));
const Selectors = React.lazy(() => import('./chapters/basics/Selectors'));
const Events = React.lazy(() => import('./chapters/basics/Events'));
const Effects = React.lazy(() => import('./chapters/basics/Effects'));

const GetContent = React.lazy(() => import('./chapters/dom/GetContent'));
const SetContent = React.lazy(() => import('./chapters/dom/SetContent'));
const AddElements = React.lazy(() => import('./chapters/dom/AddElements'));
const RemoveElements = React.lazy(() => import('./chapters/dom/RemoveElements'));
const CssClasses = React.lazy(() => import('./chapters/dom/CssClasses'));
const CssManipulation = React.lazy(() => import('./chapters/dom/CssManipulation'));

const Ancestors = React.lazy(() => import('./chapters/traversing/Ancestors'));
const Descendants = React.lazy(() => import('./chapters/traversing/Descendants'));
const Siblings = React.lazy(() => import('./chapters/traversing/Siblings'));
const Filtering = React.lazy(() => import('./chapters/traversing/Filtering'));

const AjaxIntro = React.lazy(() => import('./chapters/ajax/AjaxIntro'));
const LoadMethod = React.lazy(() => import('./chapters/ajax/LoadMethod'));
const GetPost = React.lazy(() => import('./chapters/ajax/GetPost'));
const AjaxMethods = React.lazy(() => import('./chapters/ajax/AjaxMethods'));

const HideShow = React.lazy(() => import('./chapters/effects/HideShow'));
const Fade = React.lazy(() => import('./chapters/effects/Fade'));
const Slide = React.lazy(() => import('./chapters/effects/Slide'));
const Animate = React.lazy(() => import('./chapters/effects/Animate'));
const Chaining = React.lazy(() => import('./chapters/effects/Chaining'));

const Callbacks = React.lazy(() => import('./chapters/advanced/Callbacks'));
const Promises = React.lazy(() => import('./chapters/advanced/Promises'));
const Plugins = React.lazy(() => import('./chapters/advanced/Plugins'));
const NoConflict = React.lazy(() => import('./chapters/advanced/NoConflict'));
const Performance = React.lazy(() => import('./chapters/advanced/Performance'));

const routes = (
  <Route path="jquery-course" element={<JQueryCourse />}>
    {/* Basics */}
    <Route path="introduction" element={wrapInErrorBoundary(<Introduction />)} />
    <Route path="installation" element={wrapInErrorBoundary(<Installation />)} />
    <Route path="syntax" element={wrapInErrorBoundary(<Syntax />)} />
    <Route path="selectors" element={wrapInErrorBoundary(<Selectors />)} />
    <Route path="events" element={wrapInErrorBoundary(<Events />)} />
    <Route path="effects" element={wrapInErrorBoundary(<Effects />)} />

    {/* DOM Manipulation */}
    <Route path="get-content" element={wrapInErrorBoundary(<GetContent />)} />
    <Route path="set-content" element={wrapInErrorBoundary(<SetContent />)} />
    <Route path="add-elements" element={wrapInErrorBoundary(<AddElements />)} />
    <Route path="remove-elements" element={wrapInErrorBoundary(<RemoveElements />)} />
    <Route path="css-classes" element={wrapInErrorBoundary(<CssClasses />)} />
    <Route path="css-manipulation" element={wrapInErrorBoundary(<CssManipulation />)} />

    {/* Traversing */}
    <Route path="ancestors" element={wrapInErrorBoundary(<Ancestors />)} />
    <Route path="descendants" element={wrapInErrorBoundary(<Descendants />)} />
    <Route path="siblings" element={wrapInErrorBoundary(<Siblings />)} />
    <Route path="filtering" element={wrapInErrorBoundary(<Filtering />)} />

    {/* AJAX */}
    <Route path="ajax-intro" element={wrapInErrorBoundary(<AjaxIntro />)} />
    <Route path="load-method" element={wrapInErrorBoundary(<LoadMethod />)} />
    <Route path="get-post" element={wrapInErrorBoundary(<GetPost />)} />
    <Route path="ajax-methods" element={wrapInErrorBoundary(<AjaxMethods />)} />

    {/* Effects & Animations */}
    <Route path="hide-show" element={wrapInErrorBoundary(<HideShow />)} />
    <Route path="fade" element={wrapInErrorBoundary(<Fade />)} />
    <Route path="slide" element={wrapInErrorBoundary(<Slide />)} />
    <Route path="animate" element={wrapInErrorBoundary(<Animate />)} />
    <Route path="chaining" element={wrapInErrorBoundary(<Chaining />)} />

    {/* Advanced */}
    <Route path="callbacks" element={wrapInErrorBoundary(<Callbacks />)} />
    <Route path="promises" element={wrapInErrorBoundary(<Promises />)} />
    <Route path="plugins" element={wrapInErrorBoundary(<Plugins />)} />
    <Route path="noconflict" element={wrapInErrorBoundary(<NoConflict />)} />
    <Route path="performance" element={wrapInErrorBoundary(<Performance />)} />
  </Route>
);

export default routes; 