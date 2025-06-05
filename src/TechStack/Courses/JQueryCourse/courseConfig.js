const courseStructure = {
  basics: {
    title: 'jQuery Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'selectors', title: 'Selectors' },
      { id: 'events', title: 'Events' },
      { id: 'effects', title: 'Effects' }
    ]
  },
  dom: {
    title: 'DOM Manipulation',
    sections: [
      { id: 'get-content', title: 'Get Content' },
      { id: 'set-content', title: 'Set Content' },
      { id: 'add-elements', title: 'Add Elements' },
      { id: 'remove-elements', title: 'Remove Elements' },
      { id: 'css-classes', title: 'CSS Classes' },
      { id: 'css-manipulation', title: 'CSS Manipulation' }
    ]
  },
  traversing: {
    title: 'Traversing',
    sections: [
      { id: 'ancestors', title: 'Ancestors' },
      { id: 'descendants', title: 'Descendants' },
      { id: 'siblings', title: 'Siblings' },
      { id: 'filtering', title: 'Filtering' }
    ]
  },
  ajax: {
    title: 'AJAX',
    sections: [
      { id: 'ajax-intro', title: 'AJAX Introduction' },
      { id: 'load-method', title: 'Load Method' },
      { id: 'get-post', title: 'GET & POST' },
      { id: 'ajax-methods', title: 'AJAX Methods' }
    ]
  },
  effects: {
    title: 'Effects & Animations',
    sections: [
      { id: 'hide-show', title: 'Hide/Show' },
      { id: 'fade', title: 'Fade' },
      { id: 'slide', title: 'Slide' },
      { id: 'animate', title: 'Animate' },
      { id: 'chaining', title: 'Chaining' }
    ]
  },
  advanced: {
    title: 'Advanced Topics',
    sections: [
      { id: 'callbacks', title: 'Callbacks' },
      { id: 'promises', title: 'Promises' },
      { id: 'plugins', title: 'Plugins' },
      { id: 'noconflict', title: 'noConflict' },
      { id: 'performance', title: 'Performance' }
    ]
  },
  misc: {
    title: 'Miscellaneous',
    sections: [
      { id: 'no-conflict', title: 'noConflict()' },
      { id: 'filters', title: 'Filters' }
    ]
  },
  practice: {
    title: 'Practice & Examples',
    sections: [
      { id: 'examples', title: 'Examples' },
      { id: 'exercises', title: 'Exercises' },
      { id: 'quiz', title: 'Quiz' },
      { id: 'projects', title: 'Projects' }
    ]
  },
  reference: {
    title: 'Reference',
    sections: [
      { id: 'selectors-ref', title: 'Selectors Reference' },
      { id: 'events-ref', title: 'Events Reference' },
      { id: 'effects-ref', title: 'Effects Reference' },
      { id: 'html-css-ref', title: 'HTML/CSS Reference' },
      { id: 'traversing-ref', title: 'Traversing Reference' },
      { id: 'ajax-ref', title: 'AJAX Reference' },
      { id: 'properties-ref', title: 'Properties Reference' }
    ]
  }
};

module.exports = courseStructure; 