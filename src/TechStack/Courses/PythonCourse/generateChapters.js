import fs from 'fs';
import path from 'path';
import { courseStructure } from './courseConfig.js';

const toPascalCase = (str) => {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

const chapterTemplate = (title, id) => `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ${toPascalCase(id)} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">${title}</h1>

      {/* Add content here */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <p className="text-gray-600">
          Content for ${title} will be added here.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/python-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/python-course"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default ${toPascalCase(id)};
`;

// Create directories and files
Object.entries(courseStructure).forEach(([category, { sections }]) => {
  const categoryDir = path.join('chapters', category);
  
  // Create category directory if it doesn't exist
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  // Create chapter files
  sections.forEach(({ id, title }) => {
    const fileName = `${toPascalCase(id)}.jsx`;
    const filePath = path.join(categoryDir, fileName);
    
    // Skip if file already exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, chapterTemplate(title, id));
      console.log(`Created: ${filePath}`);
    }
  });
});

console.log('Chapter generation complete!'); 