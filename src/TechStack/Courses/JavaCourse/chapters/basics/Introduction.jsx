import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to Java</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Java?</h2>
        <p className="text-gray-600 mb-4">
          Java is a popular, versatile, class-based, object-oriented programming language that is designed to have as few 
          implementation dependencies as possible. It follows the principle of WORA (Write Once, Run Anywhere), meaning 
          that compiled Java code can run on all platforms that support Java without the need for recompilation.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Key Features of Java:</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Object-Oriented: Everything in Java is an object</li>
            <li>Platform Independent: Can run on any platform with JVM</li>
            <li>Secure: Runs in JVM sandbox environment</li>
            <li>Robust: Strong type checking and exception handling</li>
            <li>Multithreaded: Supports concurrent programming</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Learn Java?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Career Opportunities</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Enterprise Software Development</li>
              <li>• Android App Development</li>
              <li>• Web Applications</li>
              <li>• Cloud Computing</li>
              <li>• Big Data Processing</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Technical Benefits</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Strong Community Support</li>
              <li>• Rich API Library</li>
              <li>• Excellent Development Tools</li>
              <li>• High Performance</li>
              <li>• Backward Compatibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Java Development Kit (JDK)</h2>
        <p className="text-gray-600 mb-4">
          To start developing with Java, you need to install the Java Development Kit (JDK). The JDK includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Java Runtime Environment (JRE)</li>
          <li>Development Tools (like javac compiler)</li>
          <li>Java API Documentation</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          <p className="text-gray-700">// Check if Java is installed</p>
          <p className="text-gray-800">java -version</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your First Java Program</h2>
        <p className="text-gray-600 mb-4">
          Here's a simple "Hello, World!" program in Java:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Code Explanation:</h3>
          <ul className="text-yellow-700 space-y-1">
            <li>• <code>public class HelloWorld</code> - Defines a public class</li>
            <li>• <code>public static void main(String[] args)</code> - The main method (program entry point)</li>
            <li>• <code>System.out.println()</code> - Prints text to the console</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Java Development Tools</h2>
        <p className="text-gray-600 mb-4">
          Popular Integrated Development Environments (IDEs) for Java development:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Eclipse</h3>
            <p className="text-gray-600">Popular open-source IDE with extensive plugin support</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">IntelliJ IDEA</h3>
            <p className="text-gray-600">Feature-rich IDE by JetBrains with smart code assistance</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">NetBeans</h3>
            <p className="text-gray-600">Official IDE for Java 8, great for beginners</p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/java-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Course Overview
        </Link>
        <Link
          to="/java-course/getting-started"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Getting Started →
        </Link>
      </div>
    </motion.div>
  );
};

export default Introduction; 