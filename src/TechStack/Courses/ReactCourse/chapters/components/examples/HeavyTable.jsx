import React from 'react';

const HeavyTable = () => {
  // Simulate complex table data
  const data = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active', progress: 75 },
    { id: 2, name: 'Jane Smith', role: 'Designer', status: 'Away', progress: 45 },
    { id: 3, name: 'Mike Johnson', role: 'Manager', status: 'Active', progress: 90 },
    { id: 4, name: 'Sarah Wilson', role: 'Developer', status: 'Busy', progress: 60 },
    { id: 5, name: 'Tom Brown', role: 'Designer', status: 'Active', progress: 85 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-4">Team Members</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Role</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((person) => (
              <tr key={person.id}>
                <td className="px-4 py-3 text-sm text-gray-900">{person.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{person.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      person.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : person.status === 'Away'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${person.progress}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{person.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeavyTable; 