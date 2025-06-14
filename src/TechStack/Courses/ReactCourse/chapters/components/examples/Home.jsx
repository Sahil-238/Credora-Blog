import React from 'react';

const Home = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Welcome Home</h3>
      <p className="text-gray-600">
        This is the home page content that was loaded dynamically. In a real application,
        this component might contain much more content and functionality.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded">
          <h4 className="font-medium text-blue-800 mb-2">Quick Actions</h4>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>View Dashboard</li>
            <li>Create New Project</li>
            <li>Recent Activity</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 rounded">
          <h4 className="font-medium text-green-800 mb-2">Statistics</h4>
          <ul className="space-y-2 text-sm text-green-600">
            <li>12 Active Projects</li>
            <li>85% Task Completion</li>
            <li>24 Team Members</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home; 