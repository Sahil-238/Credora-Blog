import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarJS from './NavbarJS';
import CourseSidebar from './CourseSidebar';

function JavaScriptPage() {
  const sections = [
    { id: 'introduction', title: 'Introduction to JavaScript' },
    { id: 'basics', title: 'JavaScript Basics' },
    { id: 'variables', title: 'Variables and Data Types' },
    { id: 'functions', title: 'Functions and Scope' },
    { id: 'objects', title: 'Objects and Arrays' },
    { id: 'dom', title: 'DOM Manipulation' },
    { id: 'events', title: 'Events and Event Handling' },
    { id: 'async', title: 'Asynchronous JavaScript' },
    { id: 'advanced', title: 'Advanced Concepts' },
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

export default JavaScriptPage;