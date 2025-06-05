import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingFallback; 