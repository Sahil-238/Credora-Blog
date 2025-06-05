import React from 'react';
import { motion } from 'framer-motion';

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with C#</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up Your Development Environment</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            To start programming in C#, you'll need to set up your development environment. Here are the essential tools:
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Required Tools:</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>.NET SDK:
                <ul className="list-none pl-6 pt-1 text-blue-600">
                  <li>• Download from <a href="https://dotnet.microsoft.com/download" className="underline">dotnet.microsoft.com</a></li>
                  <li>• Includes the C# compiler and runtime</li>
                </ul>
              </li>
              <li>Code Editor/IDE:
                <ul className="list-none pl-6 pt-1 text-blue-600">
                  <li>• Visual Studio (recommended for Windows)</li>
                  <li>• Visual Studio Code with C# extension</li>
                  <li>• JetBrains Rider</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating Your First C# Program</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <p className="text-gray-400 mb-2">// Program.cs</p>
          <pre>{`using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`}</pre>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Let's break down this simple program:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li><code className="bg-gray-100 px-2 py-1 rounded">using System;</code> - Imports the System namespace</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">namespace HelloWorld</code> - Declares a namespace for your code</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">class Program</code> - Defines the main class</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">static void Main(string[] args)</code> - The entry point of the program</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">Console.WriteLine()</code> - Prints text to the console</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Running Your Program</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Using Visual Studio</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open Visual Studio</li>
              <li>Create a new Console Application project</li>
              <li>Press F5 or click "Start Debugging" to run</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Using Command Line</h3>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <p className="text-gray-400 mb-2"># Create a new console application</p>
              <pre>dotnet new console -n HelloWorld</pre>
              <p className="text-gray-400 mb-2 mt-4"># Run the application</p>
              <pre>dotnet run</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Structure</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">A basic C# project includes these files:</p>
          <ul className="space-y-2 text-gray-600">
            <li><code className="bg-gray-100 px-2 py-1 rounded">Program.cs</code> - Main entry point</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">[ProjectName].csproj</code> - Project configuration</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">obj/</code> - Temporary build files</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">bin/</code> - Compiled output</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </motion.div>
  );
};

export default GetStarted; 