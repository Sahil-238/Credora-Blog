import courseStructure from '../TechStack/Courses/JavaScriptCourse/courseConfig';

// Flatten the course structure into an array of all sections
const getAllSections = () => {
  const sections = [];
  Object.entries(courseStructure).forEach(([category, { title: categoryTitle, sections: categorySections }]) => {
    categorySections.forEach(section => {
      sections.push({
        ...section,
        category: categoryTitle,
        categoryId: category
      });
    });
  });
  return sections;
};

// Get the previous and next topics based on current topic id
export const getNavigation = (currentId) => {
  if (!currentId) return { previous: null, next: null };

  const allSections = getAllSections();
  console.log('All sections:', allSections);
  
  const currentIndex = allSections.findIndex(section => section.id === currentId);
  console.log('Current index:', currentIndex, 'for ID:', currentId);

  const result = {
    previous: currentIndex > 0 ? allSections[currentIndex - 1] : null,
    next: currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null
  };

  console.log('Navigation result:', result);
  return result;
}; 