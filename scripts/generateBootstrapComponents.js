const fs = require('fs');
const path = require('path');

const componentsToCreate = [
  'components/button-groups',
  'components/progress',
  'components/spinners',
  'components/pagination',
  'layout/dropdowns',
  'layout/collapse',
  'layout/navs',
  'layout/navbar',
  'layout/carousel',
  'interactive/modal',
  'interactive/tooltip',
  'interactive/popover',
  'interactive/toast',
  'interactive/scrollspy',
  'interactive/offcanvas'
];

const componentTemplate = (name) => `import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const ${name} = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">${name} in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic ${name}</h2>
        <p>Content for ${name} goes here...</p>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default ${name};`;

const basePath = path.join(__dirname, '../src/TechStack/Courses/BootstrapCourse/chapters');

componentsToCreate.forEach(componentPath => {
  const fullPath = path.join(basePath, `${componentPath}.jsx`);
  const componentName = path.basename(componentPath)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, componentTemplate(componentName));
  console.log(`Created component: ${componentPath}`);
}); 