import { courseStructure } from './courseConfig.js';

const generateRoutes = () => {
  let imports = [];
  let routes = [];

  Object.entries(courseStructure).forEach(([category, { sections }]) => {
    sections.forEach(({ id, title }) => {
      const componentName = title.replace(/[^a-zA-Z0-9]/g, '');
      imports.push(`import ${componentName} from './chapters/${category}/${componentName}';`);
      routes.push(`<Route path="${id}" element={<${componentName} />} />`);
    });
  });

  console.log('// Imports');
  console.log(imports.join('\n'));
  console.log('\n// Routes');
  console.log(routes.join('\n'));
};

generateRoutes(); 