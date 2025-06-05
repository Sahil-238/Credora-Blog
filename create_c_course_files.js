const fs = require('fs');
const path = require('path');

const courseStructure = {
  basics: {
    title: 'C Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'get-started', title: 'Get Started' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'output', title: 'Output' },
      { id: 'comments', title: 'Comments' },
      { id: 'variables', title: 'Variables' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'constants', title: 'Constants' },
      { id: 'operators', title: 'Operators' },
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
  data_structures: {
    title: 'Data Structures',
    sections: [
      { id: 'arrays', title: 'Arrays' },
      { id: 'strings', title: 'Strings' },
      { id: 'pointers', title: 'Pointers' },
      { id: 'memory-address', title: 'Memory Address' },
      { id: 'structures', title: 'Structures' },
      { id: 'unions', title: 'Unions' },
      { id: 'enums', title: 'Enums' }
    ]
  },
  functions: {
    title: 'Functions',
    sections: [
      { id: 'functions-intro', title: 'Functions Introduction' },
      { id: 'function-parameters', title: 'Function Parameters' },
      { id: 'function-declaration', title: 'Function Declaration' },
      { id: 'scope', title: 'Scope' },
      { id: 'recursion', title: 'Recursion' },
      { id: 'math-functions', title: 'Math Functions' }
    ]
  },
  files_io: {
    title: 'Files & I/O',
    sections: [
      { id: 'user-input', title: 'User Input' },
      { id: 'create-files', title: 'Create Files' },
      { id: 'write-files', title: 'Write To Files' },
      { id: 'read-files', title: 'Read Files' }
    ]
  },
  advanced: {
    title: 'Advanced Topics',
    sections: [
      { id: 'memory-management', title: 'Memory Management' },
      { id: 'macros', title: 'Macros' },
      { id: 'error-handling', title: 'Error Handling' },
      { id: 'debugging', title: 'Debugging' }
    ]
  },
  libraries: {
    title: 'Standard Libraries',
    sections: [
      { id: 'stdio', title: '<stdio.h>' },
      { id: 'stdlib', title: '<stdlib.h>' },
      { id: 'string', title: '<string.h>' },
      { id: 'math', title: '<math.h>' },
      { id: 'ctype', title: '<ctype.h>' }
    ]
  },
  projects: {
    title: 'Projects & Practice',
    sections: [
      { id: 'examples', title: 'Examples' },
      { id: 'real-life-examples', title: 'Real-Life Examples' },
      { id: 'exercises', title: 'Exercises' },
      { id: 'quiz', title: 'Quiz' },
      { id: 'projects', title: 'Projects' }
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

const baseDir = 'src/TechStack/Courses/CCourse/chapters';

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

console.log('All course files have been created!'); 