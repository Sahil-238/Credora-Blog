const courseStructure = {
  basics: {
    title: 'C# Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'get-started', title: 'Get Started' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'output', title: 'Output' },
      { id: 'comments', title: 'Comments' },
      { id: 'variables', title: 'Variables' },
      { id: 'data-types', title: 'Data Types' },
      { id: 'type-casting', title: 'Type Casting' },
      { id: 'user-input', title: 'User Input' },
      { id: 'operators', title: 'Operators' },
      { id: 'math', title: 'Math' },
      { id: 'strings', title: 'Strings' },
      { id: 'booleans', title: 'Booleans' }
    ]
  },
  control_flow: {
    title: 'Control Flow',
    sections: [
      { id: 'if-else', title: 'If...Else' },
      { id: 'switch', title: 'Switch' },
      { id: 'while-loop', title: 'While Loop' },
      { id: 'for-loop', title: 'For Loop' },
      { id: 'break-continue', title: 'Break/Continue' },
      { id: 'arrays', title: 'Arrays' }
    ]
  },
  methods: {
    title: 'Methods',
    sections: [
      { id: 'methods-intro', title: 'Methods' },
      { id: 'method-parameters', title: 'Method Parameters' },
      { id: 'method-overloading', title: 'Method Overloading' }
    ]
  },
  oop: {
    title: 'Object-Oriented Programming',
    sections: [
      { id: 'oop-intro', title: 'OOP Introduction' },
      { id: 'classes-objects', title: 'Classes & Objects' },
      { id: 'class-members', title: 'Class Members' },
      { id: 'constructors', title: 'Constructors' },
      { id: 'access-modifiers', title: 'Access Modifiers' },
      { id: 'properties', title: 'Properties' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'polymorphism', title: 'Polymorphism' },
      { id: 'abstraction', title: 'Abstraction' },
      { id: 'interface', title: 'Interface' },
      { id: 'enums', title: 'Enums' }
    ]
  },
  error_handling: {
    title: 'Error Handling & Files',
    sections: [
      { id: 'exceptions', title: 'Exceptions' },
      { id: 'files', title: 'Files' }
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
  advanced: {
    title: 'Advanced Topics',
    sections: [
      { id: 'linq', title: 'LINQ' },
      { id: 'async-await', title: 'Async/Await' },
      { id: 'delegates', title: 'Delegates & Events' },
      { id: 'generics', title: 'Generics' },
      { id: 'collections', title: 'Collections' }
    ]
  }
};

module.exports = courseStructure; 