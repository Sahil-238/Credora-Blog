const fs = require('fs');
const path = require('path');

const courseConfig = {
  'basics': {
    title: 'PHP Basics',
    sections: [
      { id: 'introduction', title: 'Introduction to PHP' },
      { id: 'installation', title: 'Installation' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'variables', title: 'Variables' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'operators', title: 'Operators' },
      { id: 'control-flow', title: 'Control Flow' }
    ]
  },
  'forms': {
    title: 'Forms & Input',
    sections: [
      { id: 'form-handling', title: 'Form Handling' },
      { id: 'form-validation', title: 'Form Validation' },
      { id: 'form-security', title: 'Form Security' }
    ]
  },
  'advanced': {
    title: 'Advanced Topics',
    sections: [
      { id: 'date-time', title: 'Date and Time' },
      { id: 'file-handling', title: 'File Handling' },
      { id: 'sessions', title: 'Sessions' },
      { id: 'cookies', title: 'Cookies' }
    ]
  },
  'oop': {
    title: 'Object-Oriented PHP',
    sections: [
      { id: 'classes-objects', title: 'Classes and Objects' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'traits', title: 'Traits' }
    ]
  },
  'database': {
    title: 'MySQL Database',
    sections: [
      { id: 'database-connection', title: 'Database Connection' },
      { id: 'crud-operations', title: 'CRUD Operations' },
      { id: 'prepared-statements', title: 'Prepared Statements' }
    ]
  },
  'xml': {
    title: 'XML Processing',
    sections: [
      { id: 'xml-parsing', title: 'XML Parsing' },
      { id: 'xml-dom', title: 'XML DOM' }
    ]
  },
  'ajax': {
    title: 'AJAX with PHP',
    sections: [
      { id: 'ajax-introduction', title: 'AJAX Introduction' },
      { id: 'fetch-api', title: 'Fetch API' },
      { id: 'jquery-ajax', title: 'jQuery AJAX' }
    ]
  },
  'examples': {
    title: 'Examples',
    sections: [
      { id: 'login-system', title: 'Login System' },
      { id: 'crud-application', title: 'CRUD Application' },
      { id: 'rest-api', title: 'REST API' }
    ]
  },
  'reference': {
    title: 'Reference',
    sections: [
      { id: 'built-in-functions', title: 'Built-in Functions' },
      { id: 'constants', title: 'Constants' },
      { id: 'error-handling', title: 'Error Handling' }
    ]
  }
};

const chapterTemplate = (title, content = '') => `import React from 'react';
import { motion } from 'framer-motion';
import TopicNavigation from '../../../../../components/TopicNavigation';
import CodeBlock from '../../../../../components/CodeBlock';

const ${title} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">${title}</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600">
            Content for this section is under development. Check back soon for comprehensive material about ${title}.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Concepts</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Concept 1 (Coming Soon)</li>
            <li>Concept 2 (Coming Soon)</li>
            <li>Concept 3 (Coming Soon)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Code Examples</h2>
          <div className="space-y-6">
            <CodeBlock
              code="// Example code coming soon"
              language="php"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Best Practice 1 (Coming Soon)</li>
            <li>Best Practice 2 (Coming Soon)</li>
            <li>Best Practice 3 (Coming Soon)</li>
          </ul>
        </section>
      </article>

      <TopicNavigation />
    </motion.div>
  );
};

export default ${title};`;

// Create base directories
const baseDir = path.join(__dirname, '../../src/TechStack/Courses/PHPCourse/chapters');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Create category directories and chapter files
Object.entries(courseConfig).forEach(([category, { sections }]) => {
  const categoryDir = path.join(baseDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  sections.forEach(section => {
    const componentName = section.id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    const filePath = path.join(categoryDir, `${componentName}.jsx`);
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, chapterTemplate(componentName));
      console.log(`Created: ${filePath}`);
    }
  });
});

console.log('PHP chapter generation complete!'); 