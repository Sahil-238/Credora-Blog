import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Syllabus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Course Syllabus</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">This comprehensive Bootstrap course covers everything from basic concepts to advanced implementations. You'll learn how to create responsive, mobile-first websites using Bootstrap's powerful framework.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Course Duration: 8 weeks</li>
            <li>Prerequisites: Basic HTML, CSS, and JavaScript knowledge</li>
            <li>Level: Beginner to Advanced</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 1: Introduction to Bootstrap</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>What is Bootstrap?</li>
            <li>Setting up Bootstrap</li>
            <li>Bootstrap's grid system basics</li>
            <li>Responsive breakpoints</li>
            <li>Container types</li>
            <li>Basic typography</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 2: Layout & Grid System</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Grid system in depth</li>
            <li>Responsive classes</li>
            <li>Column ordering</li>
            <li>Nesting grids</li>
            <li>Gutters</li>
            <li>Alignment options</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 3: Components Part 1</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Buttons and button groups</li>
            <li>Navigation components</li>
            <li>Navbar</li>
            <li>Cards</li>
            <li>Lists</li>
            <li>Badges and alerts</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 4: Components Part 2</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Forms and form controls</li>
            <li>Input groups</li>
            <li>Dropdowns</li>
            <li>Modals</li>
            <li>Tooltips and popovers</li>
            <li>Progress bars</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 5: Utilities</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Spacing utilities</li>
            <li>Color utilities</li>
            <li>Display properties</li>
            <li>Flex utilities</li>
            <li>Position utilities</li>
            <li>Shadows and borders</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 6: Advanced Topics</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Customizing Bootstrap</li>
            <li>Sass variables and maps</li>
            <li>Creating custom components</li>
            <li>Theme creation</li>
            <li>Performance optimization</li>
            <li>Browser compatibility</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 7: Responsive Design</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Mobile-first design principles</li>
            <li>Responsive images</li>
            <li>Responsive tables</li>
            <li>Media queries</li>
            <li>Testing responsive designs</li>
            <li>Common responsive patterns</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Week 8: Projects & Best Practices</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-world project implementation</li>
            <li>Code organization</li>
            <li>Performance optimization</li>
            <li>Accessibility considerations</li>
            <li>SEO best practices</li>
            <li>Final project presentation</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Materials</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-6 space-y-2">
            <li>Video lectures and demonstrations</li>
            <li>Hands-on exercises</li>
            <li>Code examples</li>
            <li>Project templates</li>
            <li>Documentation references</li>
            <li>Quizzes and assessments</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">By the end of this course, you will be able to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Build responsive websites using Bootstrap</li>
            <li>Customize Bootstrap themes and components</li>
            <li>Implement complex layouts using the grid system</li>
            <li>Create interactive components and forms</li>
            <li>Optimize Bootstrap implementations</li>
            <li>Follow Bootstrap best practices</li>
          </ul>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Syllabus; 