import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const DynamicMemory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Dynamic Memory in C++</h1>
      
      <h2>What is Dynamic Memory?</h2>
      <p>
        Dynamic memory allocation allows you to allocate memory at runtime. This enables
        you to create data structures whose size isn't known at compile time.
      </p>

      <h2>new and delete Operators</h2>
      <CodeEditor
        defaultValue={`// Single element allocation
int* ptr = new int;       // Allocate
*ptr = 42;               // Use
delete ptr;              // Deallocate

// Array allocation
int* arr = new int[5];   // Allocate array
arr[0] = 1;             // Use array
delete[] arr;           // Deallocate array`}
        language="cpp"
      />

      <h2>Dynamic Objects</h2>
      <CodeEditor
        defaultValue={`class MyClass {
    int data;
public:
    MyClass(int d) : data(d) {}
    void print() { cout << data << endl; }
};

// Single object
MyClass* obj = new MyClass(42);
obj->print();
delete obj;

// Array of objects
MyClass* objects = new MyClass[3] { 1, 2, 3 };
objects[0].print();
delete[] objects;`}
        language="cpp"
      />

      <h2>Error Handling</h2>
      <CodeEditor
        defaultValue={`// Using try-catch
try {
    int* bigArray = new int[1000000000];
    // Use array
    delete[] bigArray;
} catch (const std::bad_alloc& e) {
    cout << "Memory allocation failed: " << e.what() << endl;
}

// Using nothrow
int* ptr = new(nothrow) int[1000000000];
if (ptr == nullptr) {
    cout << "Memory allocation failed" << endl;
}`}
        language="cpp"
      />

      <h2>Common Patterns</h2>
      <CodeEditor
        defaultValue={`// Dynamic 2D array
int rows = 3, cols = 4;

// Allocate
int** matrix = new int*[rows];
for (int i = 0; i < rows; i++) {
    matrix[i] = new int[cols];
}

// Use
matrix[0][0] = 42;

// Deallocate
for (int i = 0; i < rows; i++) {
    delete[] matrix[i];
}
delete[] matrix;`}
        language="cpp"
      />

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
        <p className="text-red-700">
          <strong>Warning:</strong> Always remember to:
          <ul className="list-disc ml-4">
            <li>Delete every new allocation</li>
            <li>Use delete[] for array allocations</li>
            <li>Set pointers to nullptr after deletion</li>
            <li>Consider using smart pointers instead</li>
          </ul>
        </p>
      </div>

      <h2>Modern Alternatives</h2>
      <p>
        In modern C++, it's recommended to use smart pointers and containers from the
        Standard Template Library instead of manual dynamic memory management:
      </p>
      <CodeEditor
        defaultValue={`// Vector instead of dynamic array
vector<int> numbers;  // Dynamic size array

// Smart pointers
unique_ptr<int> ptr(new int(42));  // Automatic cleanup
shared_ptr<MyClass> obj = make_shared<MyClass>(42);

// Modern 2D array alternative
vector<vector<int>> matrix(rows, vector<int>(cols));`}
        language="cpp"
      />
    </motion.div>
  );
};

export default DynamicMemory; 