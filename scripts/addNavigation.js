const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, '../TechStack/Courses/JavaScriptCourse/chapters');

// Import statement to add
const importStatement = "import TopicNavigation from '../../../../../components/TopicNavigation';";

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import if not present
  if (!content.includes('TopicNavigation')) {
    const importIndex = content.indexOf('import');
    content = content.slice(0, importIndex) + importStatement + '\n' + content.slice(importIndex);
  }
  
  // Remove any custom navigation sections
  content = content.replace(
    /{\/\* Navigation \*\/}[\s\S]*?<\/div>\s+{\/\* Navigation buttons \*\/}/g,
    '{/* Navigation buttons */}'
  );
  
  // Add TopicNavigation at the bottom of the component, before the final closing div
  if (!content.includes('<TopicNavigation />')) {
    content = content.replace(
      /<\/motion\.div>\s*\);\s*};\s*export default/,
      `      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default`
    );
  }
  
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.jsx')) {
      processFile(filePath);
    }
  });
}

walkDir(chaptersDir); 