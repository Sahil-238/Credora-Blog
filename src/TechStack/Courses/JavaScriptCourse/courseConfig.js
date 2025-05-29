const courseStructure = {
  basics: {
    title: 'JavaScript Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'where-to', title: 'Where To' },
      { id: 'output', title: 'Output' },
      { id: 'statements', title: 'Statements' },
      { id: 'syntax', title: 'Syntax' },
      { id: 'comments', title: 'Comments' },
      { id: 'variables', title: 'Variables' },
      { id: 'let', title: 'Let' },
      { id: 'const', title: 'Const' }
    ]
  },
  operators: {
    title: 'Operators & Types',
    sections: [
      { id: 'operators', title: 'Operators' },
      { id: 'arithmetic', title: 'Arithmetic' },
      { id: 'assignment', title: 'Assignment' },
      { id: 'comparison', title: 'Comparisons' },
      { id: 'logical', title: 'Logical' },
      { id: 'bitwise', title: 'Bitwise' },
      { id: 'typeof', title: 'typeof' },
      { id: 'type-conversion', title: 'Type Conversion' },
      { id: 'precedence', title: 'Precedence' }
    ]
  },
  dataTypes: {
    title: 'Data Types',
    sections: [
      { id: 'data-types', title: 'Data Types Overview' },
      { id: 'strings', title: 'Strings' },
      { id: 'string-methods', title: 'String Methods' },
      { id: 'string-search', title: 'String Search' },
      { id: 'string-templates', title: 'String Templates' },
      { id: 'numbers', title: 'Numbers' },
      { id: 'number-methods', title: 'Number Methods' },
      { id: 'bigint', title: 'BigInt' },
      { id: 'booleans', title: 'Booleans' }
    ]
  },
  dataStructures: {
    title: 'Data Structures',
    sections: [
      { id: 'arrays', title: 'Arrays' },
      { id: 'array-methods', title: 'Array Methods' },
      { id: 'array-search', title: 'Array Search' },
      { id: 'array-sort', title: 'Array Sort' },
      { id: 'array-iteration', title: 'Array Iteration' },
      { id: 'sets', title: 'Sets' },
      { id: 'set-methods', title: 'Set Methods' },
      { id: 'maps', title: 'Maps' },
      { id: 'map-methods', title: 'Map Methods' }
    ]
  },
  controlFlow: {
    title: 'Control Flow',
    sections: [
      { id: 'if-else', title: 'If Else' },
      { id: 'switch', title: 'Switch' },
      { id: 'loop-for', title: 'Loop For' },
      { id: 'loop-for-in', title: 'Loop For In' },
      { id: 'loop-for-of', title: 'Loop For Of' },
      { id: 'loop-while', title: 'Loop While' },
      { id: 'break', title: 'Break' },
      { id: 'iterables', title: 'Iterables' }
    ]
  },
  functions: {
    title: 'Functions',
    sections: [
      { id: 'functions', title: 'Functions' },
      { id: 'function-parameters', title: 'Function Parameters' },
      { id: 'function-invocation', title: 'Function Invocation' },
      { id: 'arrow-function', title: 'Arrow Functions' },
      { id: 'function-call', title: 'Function Call' },
      { id: 'function-apply', title: 'Function Apply' },
      { id: 'function-bind', title: 'Function Bind' },
      { id: 'closures', title: 'Closures' }
    ]
  },
  objects: {
    title: 'Objects & Classes',
    sections: [
      { id: 'objects', title: 'Objects' },
      { id: 'object-properties', title: 'Object Properties' },
      { id: 'object-methods', title: 'Object Methods' },
      { id: 'object-constructors', title: 'Object Constructors' },
      { id: 'classes', title: 'Classes' },
      { id: 'class-inheritance', title: 'Class Inheritance' },
      { id: 'class-static', title: 'Class Static' },
      { id: 'json', title: 'JSON' }
    ]
  },
  async: {
    title: 'Asynchronous JS',
    sections: [
      { id: 'callbacks', title: 'Callbacks' },
      { id: 'promises', title: 'Promises' },
      { id: 'async-await', title: 'Async/Await' },
      { id: 'ajax', title: 'AJAX' },
      { id: 'fetch-api', title: 'Fetch API' }
    ]
  },
  dom: {
    title: 'DOM & BOM',
    sections: [
      { id: 'dom-intro', title: 'DOM Introduction' },
      { id: 'dom-methods', title: 'DOM Methods' },
      { id: 'dom-elements', title: 'DOM Elements' },
      { id: 'dom-events', title: 'DOM Events' },
      { id: 'dom-navigation', title: 'DOM Navigation' },
      { id: 'window', title: 'Window Object' },
      { id: 'location', title: 'Location' },
      { id: 'history', title: 'History' }
    ]
  },
  advanced: {
    title: 'Advanced Concepts',
    sections: [
      { id: 'strict-mode', title: 'Strict Mode' },
      { id: 'this-keyword', title: 'this Keyword' },
      { id: 'destructuring', title: 'Destructuring' },
      { id: 'modules', title: 'Modules' },
      { id: 'regexp', title: 'RegExp' },
      { id: 'errors', title: 'Error Handling' },
      { id: 'debugging', title: 'Debugging' }
    ]
  },
  bestPractices: {
    title: 'Best Practices',
    sections: [
      { id: 'style-guide', title: 'Style Guide' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'performance', title: 'Performance' },
      { id: 'security', title: 'Security' }
    ]
  }
};

module.exports = courseStructure; 