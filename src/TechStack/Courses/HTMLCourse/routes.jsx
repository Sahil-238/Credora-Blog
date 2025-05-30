import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HTMLCourse from './HTMLCourse';
import courseStructure from './courseConfig';

// Import all lesson components
import Introduction from './chapters/basics/Introduction';
import Editors from './chapters/basics/Editors';
import Basic from './chapters/basics/Basic';
import Elements from './chapters/basics/Elements';
import Attributes from './chapters/basics/Attributes';
import Headings from './chapters/basics/Headings';
import Paragraphs from './chapters/basics/Paragraphs';
import Styles from './chapters/basics/Styles';
import Formatting from './chapters/basics/Formatting';

// Create a mapping of route IDs to components
const routeComponents = {
  'introduction': Introduction,
  'editors': Editors,
  'basic': Basic,
  'elements': Elements,
  'attributes': Attributes,
  'headings': Headings,
  'paragraphs': Paragraphs,
  'styles': Styles,
  'formatting': Formatting,
  // Add more components as they are created
};

const HTMLCourseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HTMLCourse />}>
        {/* Redirect from /html-course to the first lesson */}
        <Route index element={<Navigate to="introduction" replace />} />
        
        {/* Dynamic routes for all lessons */}
        {Object.values(courseStructure).map((category) =>
          category.sections.map((section) => {
            const Component = routeComponents[section.id];
            return Component ? (
              <Route
                key={section.id}
                path={section.id}
                element={<Component />}
              />
            ) : null;
          })
        )}

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="introduction" replace />} />
      </Route>
    </Routes>
  );
};

export default HTMLCourseRoutes; 