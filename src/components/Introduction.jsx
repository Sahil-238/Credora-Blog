import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function Introduction() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="text-gray-800 hover:text-blue-600"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">JavaScript Tutorial</h1>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              JavaScript is the world's most popular programming language. Start your journey into web development here.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">1. Basic Concepts</h3>
                  <p className="text-gray-600">Learn about variables, data types, and basic operations</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">2. Control Flow</h3>
                  <p className="text-gray-600">Master conditions, loops, and program flow</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">3. Functions</h3>
                  <p className="text-gray-600">Understand functions and code organization</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Example Code</h2>
              <div className="bg-gray-800 text-white p-6 rounded-lg">
                <pre className="overflow-x-auto">
                  <code>
{`// Your first JavaScript code
console.log("Hello, World!");

// Variables and data types
let name = "John";
const age = 25;
let isStudent = true;

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
        </div>
      </div>
    </div>
    
  );
}
<Footer/>

export default Introduction;