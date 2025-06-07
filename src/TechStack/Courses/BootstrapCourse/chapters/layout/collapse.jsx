import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Collapse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Collapse in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Collapse</h2>
        <p>Content for Collapse goes here...</p>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Collapse;