import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi ='pk_test_ZW5nYWdpbmctbW9sZS05MC5jbGVyay5hY2NvdW50cy5kZXYk';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
    <App />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
