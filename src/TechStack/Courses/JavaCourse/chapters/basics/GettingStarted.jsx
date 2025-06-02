import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with Java</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up Your Development Environment</h2>
        <p className="text-gray-600 mb-4">
          Before you can start programming in Java, you need to set up your development environment. 
          This involves installing the Java Development Kit (JDK) and an Integrated Development Environment (IDE).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installing Java Development Kit (JDK)</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Windows Installation</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Visit the official Oracle website or download OpenJDK</li>
              <li>Download the latest version of JDK for Windows</li>
              <li>Run the installer and follow the installation wizard</li>
              <li>Set up JAVA_HOME environment variable</li>
              <li>Add Java to your PATH environment variable</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">macOS Installation</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Install Homebrew if not already installed</li>
              <li>Run <code>brew install openjdk</code></li>
              <li>Follow the post-installation instructions</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Linux Installation</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Open terminal</li>
              <li>Run <code>sudo apt update</code> (Ubuntu/Debian)</li>
              <li>Run <code>sudo apt install openjdk-17-jdk</code></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Verifying Installation</h2>
        <p className="text-gray-600 mb-4">
          After installation, verify that Java is properly installed by opening a terminal/command prompt and running:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          <p className="text-gray-800">java --version</p>
          <p className="text-gray-800">javac --version</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up an IDE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">IntelliJ IDEA</h3>
            <p className="text-gray-600 mb-2">Recommended for professional development</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Rich feature set</li>
              <li>• Smart code completion</li>
              <li>• Built-in developer tools</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Eclipse</h3>
            <p className="text-gray-600 mb-2">Popular open-source option</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Free and open source</li>
              <li>• Large plugin ecosystem</li>
              <li>• Great for beginners</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">VS Code</h3>
            <p className="text-gray-600 mb-2">Lightweight and versatile</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Fast and lightweight</li>
              <li>• Great extensions</li>
              <li>• Modern interface</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating Your First Project</h2>
        <p className="text-gray-600 mb-4">
          Let's create a simple Java project to verify everything is working:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`// Create a new file named HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}`}
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">To compile and run:</h3>
          <ol className="text-yellow-700 space-y-1">
            <li>1. Save the file as <code>HelloWorld.java</code></li>
            <li>2. Open terminal in the file location</li>
            <li>3. Run <code>javac HelloWorld.java</code> to compile</li>
            <li>4. Run <code>java HelloWorld</code> to execute</li>
          </ol>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/java-course/introduction"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Introduction
        </Link>
        <Link
          to="/java-course/syntax"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Java Syntax →
        </Link>
      </div>
    </motion.div>
  );
};

export default GettingStarted; 