import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Introduction to C#</h1>
      <p>
        Welcome to the C# programming course! C# (pronounced "C-sharp") is a modern,
        object-oriented programming language developed by Microsoft as part of the .NET
        framework. It combines the power of C++ with the simplicity of Visual Basic.
      </p>

      <h2>Why Learn C#?</h2>
      <ul>
        <li>Modern and elegant syntax</li>
        <li>Robust type system</li>
        <li>Extensive standard library</li>
        <li>Cross-platform development</li>
        <li>Strong enterprise support</li>
      </ul>

      <h2>Course Overview</h2>
      <p>
        This comprehensive course will take you from C# basics to advanced concepts.
        You'll learn:
      </p>
      <ul>
        <li>Basic syntax and data types</li>
        <li>Object-oriented programming</li>
        <li>LINQ and collections</li>
        <li>Asynchronous programming</li>
        <li>Error handling and debugging</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>
        No prior programming experience is required, though familiarity with basic
        programming concepts will be helpful. We'll start from the fundamentals and
        gradually progress to more advanced topics.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-700">
          <strong>Pro Tip:</strong> C# is an excellent choice for both beginners and
          experienced developers. It's widely used in game development (Unity), web
          development (ASP.NET), desktop applications (WPF, WinForms), and more.
        </p>
      </div>
    </motion.div>
  );
};

export default Introduction; 