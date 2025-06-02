import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import courseStructure from './courseConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentTemplate = (title, prevPath, nextPath) => `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ${title} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">${title}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          This chapter is under development. Check back soon for comprehensive content about ${title}.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/java-course/${prevPath}"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/java-course/${nextPath}"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default ${title};
`;

// Function to convert kebab case to pascal case
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Create directories if they don't exist
Object.keys(courseStructure).forEach(category => {
  const dir = path.join(__dirname, 'chapters', category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate all chapter files
Object.entries(courseStructure).forEach(([category, { sections }]) => {
  sections.forEach((section, index) => {
    const prevSection = index > 0 ? sections[index - 1].id : '';
    const nextSection = index < sections.length - 1 ? sections[index + 1].id : '';
    
    const componentName = toPascalCase(section.id);
    const filePath = path.join(__dirname, 'chapters', category, `${componentName}.jsx`);
    
    // Skip if file already exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(
        filePath,
        componentTemplate(componentName, prevSection, nextSection)
      );
      console.log(`Created ${filePath}`);
    }
  });
});

console.log('Chapter generation complete!'); 