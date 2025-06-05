const fs = require('fs');
const path = require('path');

const courseStructure = {
  basics: {
    title: 'C++ Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'get-started', title: 'Get Started' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'output', title: 'Output' },
      { id: 'comments', title: 'Comments' },
      { id: 'variables', title: 'Variables' },
      { id: 'user-input', title: 'User Input' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'operators', title: 'Operators' },
      { id: 'strings', title: 'Strings' },
      { id: 'math', title: 'Math' },
      { id: 'booleans', title: 'Booleans' }
    ]
  },
  control_flow: {
    title: 'Control Flow',
    sections: [
      { id: 'if-else', title: 'If...Else' },
      { id: 'switch', title: 'Switch' },
      { id: 'while-loop', title: 'While Loop' },
      { id: 'for-loop', title: 'For Loop' },
      { id: 'break-continue', title: 'Break/Continue' }
    ]
  },
  data_types: {
    title: 'Data Types & Memory',
    sections: [
      { id: 'arrays', title: 'Arrays' },
      { id: 'structures', title: 'Structures' },
      { id: 'enums', title: 'Enums' },
      { id: 'references', title: 'References' },
      { id: 'pointers', title: 'Pointers' },
      { id: 'memory-management', title: 'Memory Management' }
    ]
  },
  functions: {
    title: 'Functions',
    sections: [
      { id: 'functions-intro', title: 'Functions Introduction' },
      { id: 'function-parameters', title: 'Function Parameters' },
      { id: 'function-overloading', title: 'Function Overloading' },
      { id: 'scope', title: 'Scope' },
      { id: 'recursion', title: 'Recursion' },
      { id: 'lambda', title: 'Lambda Functions' }
    ]
  },
  classes: {
    title: 'Classes & OOP',
    sections: [
      { id: 'oop', title: 'OOP Concepts' },
      { id: 'classes-objects', title: 'Classes/Objects' },
      { id: 'class-methods', title: 'Class Methods' },
      { id: 'constructors', title: 'Constructors' },
      { id: 'access-specifiers', title: 'Access Specifiers' },
      { id: 'encapsulation', title: 'Encapsulation' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'polymorphism', title: 'Polymorphism' },
      { id: 'templates', title: 'Templates' },
      { id: 'files', title: 'Files' },
      { id: 'date', title: 'Date & Time' }
    ]
  },
  error_handling: {
    title: 'Error Handling',
    sections: [
      { id: 'errors', title: 'Errors' },
      { id: 'debugging', title: 'Debugging' },
      { id: 'exceptions', title: 'Exceptions' },
      { id: 'input-validation', title: 'Input Validation' }
    ]
  },
  data_structures: {
    title: 'Data Structures & STL',
    sections: [
      { id: 'stl-intro', title: 'Data Structures & STL' },
      { id: 'vectors', title: 'Vectors' },
      { id: 'list', title: 'List' },
      { id: 'stacks', title: 'Stacks' },
      { id: 'queues', title: 'Queues' },
      { id: 'deque', title: 'Deque' },
      { id: 'sets', title: 'Sets' },
      { id: 'maps', title: 'Maps' },
      { id: 'iterators', title: 'Iterators' },
      { id: 'algorithms', title: 'Algorithms' }
    ]
  },
  namespaces: {
    title: 'Namespaces',
    sections: [
      { id: 'namespaces', title: 'Namespaces' }
    ]
  },
  projects: {
    title: 'Projects & Examples',
    sections: [
      { id: 'projects', title: 'Projects' },
      { id: 'add-numbers', title: 'Add Two Numbers' },
      { id: 'random-numbers', title: 'Random Numbers' }
    ]
  },
  reference: {
    title: 'Reference',
    sections: [
      { id: 'reference', title: 'Reference' },
      { id: 'keywords', title: 'Keywords' },
      { id: 'iostream', title: '<iostream>' },
      { id: 'fstream', title: '<fstream>' },
      { id: 'cmath', title: '<cmath>' },
      { id: 'string', title: '<string>' },
      { id: 'cstring', title: '<cstring>' },
      { id: 'ctime', title: '<ctime>' },
      { id: 'vector', title: '<vector>' },
      { id: 'algorithm', title: '<algorithm>' }
    ]
  },
  examples: {
    title: 'Examples & Practice',
    sections: [
      { id: 'examples', title: 'Examples' },
      { id: 'real-life-examples', title: 'Real-Life Examples' },
      { id: 'compiler', title: 'Compiler' },
      { id: 'exercises', title: 'Exercises' },
      { id: 'quiz', title: 'Quiz' },
      { id: 'syllabus', title: 'Syllabus' },
      { id: 'study-plan', title: 'Study Plan' }
    ]
  }
};

const template = (title) => `import React from 'react';
import { motion } from 'framer-motion';

const ${title} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">${title}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          Content for ${title} will go here.
        </p>
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

export default ${title};`;

const baseDir = 'src/TechStack/Courses/CPPCourse/chapters';

// Create directories and files
Object.entries(courseStructure).forEach(([category, { sections }]) => {
  const categoryDir = path.join(baseDir, category);
  
  // Create category directory if it doesn't exist
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  // Create files for each section
  sections.forEach(({ id, title }) => {
    const componentName = id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    const filePath = path.join(categoryDir, `${componentName}.jsx`);
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, template(componentName));
      console.log(`Created ${filePath}`);
    }
  });
});

console.log('All C++ course files have been created!'); 