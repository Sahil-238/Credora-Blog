import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarJS from './NavbarJS';
import CourseSidebar from './CourseSidebar';

function PythonPage() {
  const sections = [
    { id: 'introduction', title: 'Introduction to Python' },
    { id: 'basics', title: 'Python Basics' },
    { id: 'variables', title: 'Variables and Data Types' },
    { id: 'functions', title: 'Functions and Modules' },
    { id: 'data-structures', title: 'Data Structures' },
    { id: 'oop', title: 'Object-Oriented Programming' },
    { id: 'file-handling', title: 'File Handling' },
    { id: 'libraries', title: 'Python Libraries' },
    { id: 'advanced', title: 'Advanced Python' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarJS />
      
      <div className="flex">
        <CourseSidebar sections={sections} />
        
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default PythonPage; 