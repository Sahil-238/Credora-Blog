import React from 'react';

const HeavyChart = () => {
  // Simulate a complex chart component
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-4">Sales Analytics</h3>
      <div className="relative h-64">
        {/* Simulated chart bars */}
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end space-x-2">
          {[65, 45, 75, 55, 85, 35, 95].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-blue-500 rounded-t transition-all duration-500"
              style={{ height: `${height}%` }}
            >
              <div className="text-xs text-white text-center mt-2">
                {height}%
              </div>
            </div>
          ))}
        </div>
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 py-4 border-t">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-sm text-gray-600">
              {day}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Weekly sales performance visualization
      </p>
    </div>
  );
};

export default HeavyChart; 