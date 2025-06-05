import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const clerkFrontendApi ='pk_test_ZW5nYWdpbmctbW9sZS05MC5jbGVyay5hY2NvdW50cy5kZXYk';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
