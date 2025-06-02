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

// Import text formatting components
import Quotations from './chapters/basics/Quotation';
import Comments from './chapters/basics/Comments';
import Colors from './chapters/basics/Colors';
import CSS from './chapters/basics/CSS';
import Links from './chapters/basics/Links';
import Images from './chapters/basics/Images';
import Favicon from './chapters/basics/Favicon';
import Tables from './chapters/basics/Tables';

// Import lists components
import Lists from './chapters/basics/Lists';
import UnorderedLists from './chapters/basics/UnorderedLists';
import OrderedLists from './chapters/basics/OrderedLists';
import DescriptionLists from './chapters/basics/DescriptionLists';

// Create a mapping of route IDs to components
const routeComponents = {
  // Basics
  'introduction': Introduction,
  'editors': Editors,
  'basic': Basic,
  'elements': Elements,
  'attributes': Attributes,
  'headings': Headings,
  'paragraphs': Paragraphs,
  'styles': Styles,
  'formatting': Formatting,

  // Text Formatting
  'quotation': Quotations,
  'comments': Comments,
  'colors': Colors,
  'css': CSS,
  'links': Links,
  'images': Images,
  'favicon': Favicon,
  'tables': Tables,

  // Lists
  'lists': Lists,
  'unordered-lists': UnorderedLists,
  'ordered-lists': OrderedLists,
  'description-lists': DescriptionLists,
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