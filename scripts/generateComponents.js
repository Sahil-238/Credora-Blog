const fs = require('fs');
const path = require('path');

// Import the course structure
const courseStructure = require('../TechStack/Courses/JavaScriptCourse/courseConfig.js');

// List of JavaScript reserved words that need special handling
const reservedWords = ['typeof', 'delete', 'void', 'new', 'class', 'function', 'return'];

const componentTemplate = (title, componentName) => `import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TopicNavigation from '../../../../../components/TopicNavigation';

const ${componentName} = () => {
  const sections = [
    {
      title: '${title}',
      content: \`Add your content here.\`,
      code: \`// Add your code examples here
console.log("Hello from ${title}!");\`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">${title}</h1>
      
      {/* Main Content */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="prose max-w-none mb-6">
              <p className="whitespace-pre-line text-gray-700">{section.content}</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <SyntaxHighlighter 
                language="javascript" 
                style={atomDark}
                className="rounded-lg"
              >
                {section.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default ${componentName};`;

function createComponentFile(category, section) {
  let componentName = section.title.replace(/[^a-zA-Z0-9]/g, '');
  
  // If the component name is a reserved word, append 'Operator' to it
  if (reservedWords.includes(componentName.toLowerCase())) {
    componentName += 'Operator';
  }
  
  const dirPath = path.join(__dirname, `../TechStack/Courses/JavaScriptCourse/chapters/${category}`);
  const filePath = path.join(dirPath, `${componentName}.jsx`);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create component file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, componentTemplate(section.title, componentName));
    console.log(`Created component: ${filePath}`);
  }
}

// Generate components for each section
Object.entries(courseStructure).forEach(([category, { sections }]) => {
  sections.forEach(section => {
    createComponentFile(category, section);
  });
});

console.log('Component generation complete!'); 