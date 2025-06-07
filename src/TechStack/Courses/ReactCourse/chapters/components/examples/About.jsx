import React from 'react';

const About = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">About Us</h3>
      <p className="text-gray-600">
        This is the about page content that was loaded dynamically. It demonstrates how
        route-based code splitting can improve initial load times by only loading the
        content when needed.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-purple-50 rounded">
          <h4 className="font-medium text-purple-800 mb-2">Our Mission</h4>
          <p className="text-sm text-purple-600">
            To create innovative solutions that help businesses grow and succeed in the
            digital age.
          </p>
        </div>
        <div className="p-4 bg-pink-50 rounded">
          <h4 className="font-medium text-pink-800 mb-2">Our Values</h4>
          <ul className="space-y-2 text-sm text-pink-600">
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 