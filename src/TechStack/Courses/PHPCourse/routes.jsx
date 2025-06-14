import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import courseConfig from './courseConfig';
import PHPCourse from './PHPCourse';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

const ErrorFallback = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-semibold text-gray-800">Content Coming Soon</h2>
    <p className="text-gray-600 mt-2">
      This chapter is under development. Please check back later.
    </p>
  </div>
);

export const phpCourseRoutes = (
  <Route path="php-course" element={<PHPCourse />}>
    {Object.values(courseConfig).flatMap(category =>
      category.sections.map(section => (
        <Route
          key={section.id}
          path={section.id}
          element={
            <Suspense fallback={<LoadingFallback />}>
              {React.lazy(() =>
                import(`./chapters/${category.id}/${section.id}`).catch(() => ({
                  default: ErrorFallback
                }))
              )}
            </Suspense>
          }
        />
      ))
    )}
  </Route>
); 