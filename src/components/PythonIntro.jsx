import React from 'react';

function PythonIntro() {
  return (
    <div className="prose max-w-none">
      <section id="introduction">
        <h1 className="text-3xl font-bold mb-6">Introduction to Python</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            Python is a versatile, high-level programming language known for its simplicity and readability.
            It's widely used in web development, data science, artificial intelligence, and more.
          </p>
        </div>
      </section>

      <section id="basics" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What is Python?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Python is a high-level, interpreted programming language</li>
          <li>It emphasizes code readability with its clean syntax</li>
          <li>It has a vast ecosystem of libraries and frameworks</li>
          <li>It's used by major companies like Google, Instagram, and Spotify</li>
        </ul>
      </section>

      <section id="variables" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Learn Python?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Data Science</h3>
            <p>Analyze data and build machine learning models</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p>Build web applications with Django and Flask</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Automation</h3>
            <p>Automate tasks and workflows</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">AI & ML</h3>
            <p>Develop artificial intelligence and machine learning solutions</p>
          </div>
        </div>
      </section>

      <section id="functions" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your First Python Code</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <pre className="overflow-x-auto">
            <code>
{`print("Hello, World!")

# Variables
message = "Welcome to Python!"
print(message)

# Functions
def greet(name):
    return f"Hello, {name}!"

print(greet("Learner"))`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default PythonIntro; 