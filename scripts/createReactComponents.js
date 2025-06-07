import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import courseConfig from '../TechStack/Courses/ReactCourse/courseConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentTemplate = (name, title, prevPath, nextPath) => `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ${name} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">${title}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding ${title}</h2>
        <p className="text-gray-600 mb-4">
          Content for ${title} component.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="${prevPath}"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="${nextPath}"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default ${name};`;

const toPascalCase = (str) => {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

const createComponentFile = (category, section, prevPath, nextPath) => {
  const componentName = toPascalCase(section.id);
  const dirPath = path.join(__dirname, '..', 'TechStack', 'Courses', 'ReactCourse', 'chapters', category);
  const filePath = path.join(dirPath, `${componentName}.jsx`);

  // Delete any existing files with different casing
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    const matchingFiles = files.filter(file => 
      file.toLowerCase() === `${componentName.toLowerCase()}.jsx`
    );
    matchingFiles.forEach(file => {
      if (file !== `${componentName}.jsx`) {
        fs.unlinkSync(path.join(dirPath, file));
        console.log(`Deleted incorrectly cased file: ${file}`);
      }
    });
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Always recreate the component to ensure it has the latest structure
  fs.writeFileSync(filePath, componentTemplate(componentName, section.title, prevPath, nextPath));
  console.log(`Created/Updated component: ${filePath}`);
};

// Create components for each section
Object.entries(courseConfig).forEach(([category, { sections }]) => {
  sections.forEach((section, index) => {
    const prevPath = index > 0 
      ? `/react-course/${sections[index - 1].id}`
      : '/react-course';
    const nextPath = index < sections.length - 1
      ? `/react-course/${sections[index + 1].id}`
      : '/react-course';
    
    createComponentFile(category, section, prevPath, nextPath);
  });
});

console.log('Component creation complete!'); 