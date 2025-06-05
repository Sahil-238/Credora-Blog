import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import JavaScriptCourse from './JavaScriptCourse';
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

const routes = (
  <Route path="javascript-course" element={<JavaScriptCourse />}>
    {/* Basics */}
    <Route path="introduction" element={wrapInErrorBoundary(<Introduction />)} />
  </Route>
);

export default routes; 