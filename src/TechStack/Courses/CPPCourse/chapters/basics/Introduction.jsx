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
      <h1>Introduction to C++</h1>
      <p>
        Welcome to the C++ programming course! C++ is a powerful general-purpose programming
        language that offers a high level of control over system resources and memory.
        Created by Bjarne Stroustrup in 1979, C++ is an extension of the C programming
        language with added object-oriented features.
      </p>

      <h2>Why Learn C++?</h2>
      <ul>
        <li>High performance and efficiency</li>
        <li>Direct memory manipulation</li>
        <li>Rich standard library</li>
        <li>Object-oriented programming support</li>
        <li>Wide range of applications</li>
      </ul>

      <h2>Course Overview</h2>
      <p>
        In this course, you'll learn everything from basic C++ syntax to advanced topics
        like memory management and the Standard Template Library (STL). We'll cover:
      </p>
      <ul>
        <li>Basic syntax and data types</li>
        <li>Control structures and functions</li>
        <li>Object-oriented programming concepts</li>
        <li>Memory management</li>
        <li>STL and modern C++ features</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>
        While no prior programming experience is strictly necessary, familiarity with
        basic programming concepts will be helpful. We'll start from the basics and
        gradually move to more advanced topics.
      </p>
    </motion.div>
  );
};

export default Introduction;