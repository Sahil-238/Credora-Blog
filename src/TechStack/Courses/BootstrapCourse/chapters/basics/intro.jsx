import React from 'react';
import ChapterTemplate from '../../components/ChapterTemplate';

const Intro = () => {
  const content = (
    <div>
      <p className="text-gray-600 mb-4">
        Welcome to the Bootstrap 5 course! This comprehensive guide will teach you everything you need to know about Bootstrap 5, from basic concepts to advanced features.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Bootstrap?</h2>
        <p className="text-gray-600">
          Bootstrap is the world's most popular framework for building responsive, mobile-first websites. 
          It provides a collection of HTML, CSS, and JavaScript tools that make web development faster and easier.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What You'll Learn</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>How to set up Bootstrap in your projects</li>
          <li>Understanding the Bootstrap grid system</li>
          <li>Working with Bootstrap components</li>
          <li>Customizing Bootstrap themes</li>
          <li>Building responsive layouts</li>
          <li>Best practices and common patterns</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Prerequisites</h2>
        <p className="text-gray-600 mb-4">
          To get the most out of this course, you should have:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Basic understanding of HTML and CSS</li>
          <li>Familiarity with web development concepts</li>
          <li>A code editor (VS Code recommended)</li>
          <li>A modern web browser</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Structure</h2>
        <p className="text-gray-600">
          This course is divided into several sections, each focusing on different aspects of Bootstrap 5. 
          You'll find practical examples, interactive demos, and exercises to help you learn effectively.
        </p>
      </section>
    </div>
  );

  return <ChapterTemplate title="Introduction to Bootstrap 5" content={content} />;
};

export default Intro; 