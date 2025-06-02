const courseConfig = {
  basics: {
    title: 'PHP Basics',
    sections: [
      { id: 'intro', title: 'Introduction to PHP' },
      { id: 'install', title: 'Installation' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'variables', title: 'Variables' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'operators', title: 'Operators' },
      { id: 'control-flow', title: 'Control Flow' },
    ],
  },
  forms: {
    title: 'Forms & Input',
    sections: [
      { id: 'basics', title: 'Form Handling' },
      { id: 'validation', title: 'Form Validation' },
      { id: 'security', title: 'Form Security' },
    ],
  },
  advanced: {
    title: 'Advanced Topics',
    sections: [
      { id: 'date-time', title: 'Date and Time' },
      { id: 'files', title: 'File Handling' },
      { id: 'sessions', title: 'Sessions' },
      { id: 'cookies', title: 'Cookies' },
    ],
  },
  oop: {
    title: 'Object-Oriented PHP',
    sections: [
      { id: 'classes', title: 'Classes and Objects' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'traits', title: 'Traits' },
    ],
  },
  mysql: {
    title: 'MySQL Database',
    sections: [
      { id: 'connect', title: 'Database Connection' },
      { id: 'crud', title: 'CRUD Operations' },
      { id: 'prepared', title: 'Prepared Statements' },
    ],
  },
  xml: {
    title: 'XML Processing',
    sections: [
      { id: 'parsing', title: 'XML Parsing' },
      { id: 'dom', title: 'XML DOM' },
    ],
  },
  ajax: {
    title: 'AJAX with PHP',
    sections: [
      { id: 'intro', title: 'AJAX Introduction' },
      { id: 'fetch', title: 'Fetch API' },
      { id: 'jquery', title: 'jQuery AJAX' },
    ],
  },
  examples: {
    title: 'Examples',
    sections: [
      { id: 'login', title: 'Login System' },
      { id: 'crud', title: 'CRUD Application' },
      { id: 'api', title: 'REST API' },
    ],
  },
  reference: {
    title: 'Reference',
    sections: [
      { id: 'functions', title: 'Built-in Functions' },
      { id: 'constants', title: 'Constants' },
      { id: 'errors', title: 'Error Handling' },
    ],
  },
};

export default courseConfig; 