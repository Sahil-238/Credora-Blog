import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';

// Import course routes
import reactRoutes from './TechStack/Courses/ReactCourse/routes';
import jsRoutes from './TechStack/Courses/JavaScriptCourse/routes';
import cppRoutes from './TechStack/Courses/CPPCourse/routes';
import jqueryRoutes from './TechStack/Courses/JQueryCourse/routes';
import csharpRoutes from './TechStack/Courses/CSharpCourse/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      // Course routes
      reactRoutes,
      jsRoutes,
      cppRoutes,
      jqueryRoutes,
      csharpRoutes
    ]
  },
  // Catch-all route for 404
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default router; 