const courseStructure = {
  basics: {
    title: 'C++ Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'environment-setup', title: 'Environment Setup' },
      { id: 'syntax', title: 'Basic Syntax' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'variables', title: 'Variables' },
      { id: 'constants', title: 'Constants' },
      { id: 'operators', title: 'Operators' },
      { id: 'control-flow', title: 'Control Flow' }
    ]
  },
  functions: {
    title: 'Functions',
    sections: [
      { id: 'functions', title: 'Functions' },
      { id: 'function-parameters', title: 'Function Parameters' },
      { id: 'function-overloading', title: 'Function Overloading' },
      { id: 'inline-functions', title: 'Inline Functions' },
      { id: 'recursion', title: 'Recursion' }
    ]
  },
  oop: {
    title: 'Object-Oriented Programming',
    sections: [
      { id: 'classes-objects', title: 'Classes & Objects' },
      { id: 'constructors', title: 'Constructors' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'polymorphism', title: 'Polymorphism' },
      { id: 'encapsulation', title: 'Encapsulation' },
      { id: 'abstraction', title: 'Abstraction' }
    ]
  },
  memory: {
    title: 'Memory Management',
    sections: [
      { id: 'pointers', title: 'Pointers' },
      { id: 'references', title: 'References' },
      { id: 'dynamic-memory', title: 'Dynamic Memory' },
      { id: 'memory-leaks', title: 'Memory Leaks' },
      { id: 'smart-pointers', title: 'Smart Pointers' }
    ]
  },
  stl: {
    title: 'Standard Template Library',
    sections: [
      { id: 'containers', title: 'Containers' },
      { id: 'iterators', title: 'Iterators' },
      { id: 'algorithms', title: 'Algorithms' },
      { id: 'vectors', title: 'Vectors' },
      { id: 'lists', title: 'Lists' },
      { id: 'maps', title: 'Maps' }
    ]
  },
  advanced: {
    title: 'Advanced Topics',
    sections: [
      { id: 'templates', title: 'Templates' },
      { id: 'exception-handling', title: 'Exception Handling' },
      { id: 'file-handling', title: 'File Handling' },
      { id: 'namespaces', title: 'Namespaces' },
      { id: 'multithreading', title: 'Multithreading' }
    ]
  }
};

module.exports = courseStructure; 