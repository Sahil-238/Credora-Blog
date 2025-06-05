import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Pointers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Pointers in C++</h1>
      
      <h2>What are Pointers?</h2>
      <p>
        Pointers are variables that store memory addresses of other variables. They are
        powerful features in C++ that enable direct memory manipulation.
      </p>

      <h2>Basic Pointer Syntax</h2>
      <CodeEditor
        defaultValue={`// Declaration and initialization
int number = 42;
int* ptr = &number;  // ptr stores address of number

// Dereferencing
cout << *ptr;  // Prints 42

// Pointer arithmetic
ptr++;  // Moves to next integer location
ptr--;  // Moves back`}
        language="cpp"
      />

      <h2>Null Pointers</h2>
      <CodeEditor
        defaultValue={`// Modern C++ (preferred)
int* ptr1 = nullptr;

// Traditional C style
int* ptr2 = NULL;
int* ptr3 = 0;

// Checking for null
if (ptr1 == nullptr) {
    cout << "Pointer is null" << endl;
}`}
        language="cpp"
      />

      <h2>Dynamic Memory Allocation</h2>
      <CodeEditor
        defaultValue={`// Single element
int* ptr = new int;
*ptr = 42;
delete ptr;  // Free memory

// Array
int* arr = new int[5];
arr[0] = 1;
arr[1] = 2;
delete[] arr;  // Free array memory`}
        language="cpp"
      />

      <h2>Common Pointer Operations</h2>
      <CodeEditor
        defaultValue={`int x = 10;
int* ptr = &x;

// Address-of operator &
cout << &x;    // Prints address of x

// Dereference operator *
cout << *ptr;  // Prints value at ptr (10)

// Pointer to pointer
int** pptr = &ptr;
cout << **pptr;  // Prints value at ptr (10)`}
        language="cpp"
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Warning:</strong> Always initialize pointers and free dynamically
          allocated memory to prevent memory leaks. In modern C++, consider using
          smart pointers instead of raw pointers when possible.
        </p>
      </div>

      <h2>Common Mistakes to Avoid</h2>
      <ul className="list-disc ml-4">
        <li>Dereferencing null pointers</li>
        <li>Forgetting to delete dynamically allocated memory</li>
        <li>Using deleted pointers (dangling pointers)</li>
        <li>Buffer overruns in pointer arithmetic</li>
      </ul>
    </motion.div>
  );
};

export default Pointers; 