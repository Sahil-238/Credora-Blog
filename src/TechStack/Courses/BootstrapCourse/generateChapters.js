const fs = require('fs');
const path = require('path');
const courseConfig = require('./courseConfig').default;

// Base directory for chapters
const chaptersDir = path.join(__dirname, 'chapters');

// Template for chapter files
const chapterTemplate = (title) => `import React from 'react';
import ChapterTemplate from '../../components/ChapterTemplate';

const ${title} = () => {
  const content = (
    <div>
      <p className="text-gray-600 mb-4">
        Content for ${title} will be added here.
      </p>
    </div>
  );

  return <ChapterTemplate title="${title}" content={content} />;
};

export default ${title};
`;

// Create directories and files
Object.entries(courseConfig).forEach(([category, { sections }]) => {
  // Create category directory
  const categoryDir = path.join(chaptersDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  // Create files for each section
  sections.forEach(({ id, title }) => {
    const fileName = `${id}.jsx`;
    const filePath = path.join(categoryDir, fileName);
    
    // Only create file if it doesn't exist
    if (!fs.existsSync(filePath)) {
      // Convert id to component name (e.g., 'grid-basic' to 'GridBasic')
      const componentName = id
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      fs.writeFileSync(filePath, chapterTemplate(componentName));
      console.log(`Created ${filePath}`);
    }
  });
}); 