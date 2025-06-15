import React from 'react';

function JavaScriptIntro() {
  return (
    <div className="prose max-w-none">
      <section id="introduction">
        <h1 className="text-3xl font-bold mb-6">Introduction to JavaScript</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            JavaScript is the world's most popular programming language. It is the programming language of the Web.
          </p>
        </div>
      </section>

      <section id="basics" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What is JavaScript?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>JavaScript is a high-level, interpreted programming language</li>
          <li>It is one of the core technologies of the World Wide Web</li>
          <li>It enables interactive web pages and is essential for web applications</li>
          <li>It is supported by all modern web browsers</li>
        </ul>
      </section>

      <section id="variables" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Learn JavaScript?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Frontend Development</h3>
            <p>Create interactive websites and web applications</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Backend Development</h3>
            <p>Build server-side applications with Node.js</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Mobile Development</h3>
            <p>Create mobile apps with React Native</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Desktop Development</h3>
            <p>Build desktop applications with Electron</p>
          </div>
        </div>
      </section>

      <section id="functions" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your First JavaScript Code</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <pre className="overflow-x-auto">
            <code>
{`console.log("Hello, World!");

// Variables
let message = "Welcome to JavaScript!";
console.log(message);

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Learner"));`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default JavaScriptIntro;