import React from 'react';
import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  
  let errorMessage = "Sorry, an unexpected error has occurred.";
  let errorDetails = "";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Sorry, the page you're looking for doesn't exist.";
    }
    errorDetails = error.statusText || error.data?.message;
  } else if (error instanceof Error) {
    errorDetails = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">
          {errorMessage}
        </p>
        {errorDetails && (
          <p className="text-gray-500 mb-6">
            {errorDetails}
          </p>
        )}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage; 