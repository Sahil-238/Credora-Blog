import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Modal = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Modal in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Modal</h2>
        <p>Content for Modal goes here...</p>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Modal;