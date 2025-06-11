import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const StudyPlan = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Study Plan</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Week 1-2: Fundamentals</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Daily Schedule:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>1 hour reading documentation</li>
                <li>2 hours hands-on practice</li>
                <li>30 minutes review and notes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Topics to Cover:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bootstrap installation and setup</li>
                <li>Grid system basics</li>
                <li>Typography and utilities</li>
                <li>Basic components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Practice Projects:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create a simple landing page</li>
                <li>Build a responsive navigation bar</li>
                <li>Design a grid-based layout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Building Momentum</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Week 3-4: Components & Forms</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Daily Schedule:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>1.5 hours component exploration</li>
                <li>2 hours project work</li>
                <li>30 minutes code review</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Topics to Cover:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Form controls and validation</li>
                <li>Cards and content containers</li>
                <li>Navigation components</li>
                <li>Modals and dialogs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Practice Projects:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Build a contact form with validation</li>
                <li>Create a card-based portfolio</li>
                <li>Implement a modal gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Concepts</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Week 5-6: Layout & Utilities</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Daily Schedule:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>2 hours advanced topic study</li>
                <li>2 hours complex project work</li>
                <li>1 hour experimentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Topics to Cover:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Advanced grid techniques</li>
                <li>Utility classes mastery</li>
                <li>Responsive design patterns</li>
                <li>Custom component creation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Practice Projects:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Build a complex dashboard layout</li>
                <li>Create a responsive e-commerce page</li>
                <li>Design a custom component library</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mastery Phase</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Week 7-8: Real-world Applications</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Daily Schedule:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>3 hours project development</li>
                <li>1 hour optimization</li>
                <li>1 hour documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Topics to Cover:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance optimization</li>
                <li>Accessibility implementation</li>
                <li>Theme customization</li>
                <li>Production deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Final Projects:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete website with multiple pages</li>
                <li>Custom theme implementation</li>
                <li>Progressive web application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Study Resources</h2>
        <div className="bg-gray-100 p-4 rounded">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Documentation:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Official Bootstrap documentation</li>
                <li>MDN Web Docs</li>
                <li>Bootstrap blog and examples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Code editor (VS Code recommended)</li>
                <li>Browser developer tools</li>
                <li>Bootstrap snippets extension</li>
                <li>Version control (Git)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Additional Learning:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online tutorials and courses</li>
                <li>Community forums</li>
                <li>Code repositories</li>
                <li>Bootstrap themes and templates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Success Tips</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain consistent study hours</li>
            <li>Build projects from scratch</li>
            <li>Document your learning process</li>
            <li>Join Bootstrap communities</li>
            <li>Practice responsive design regularly</li>
            <li>Review and refactor your code</li>
            <li>Stay updated with Bootstrap releases</li>
            <li>Focus on best practices</li>
            <li>Build a portfolio of projects</li>
          </ul>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default StudyPlan; 