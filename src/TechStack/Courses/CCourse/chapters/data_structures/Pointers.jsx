import React from 'react';
import { motion } from 'framer-motion';

const Pointers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pointers in C</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Pointers?</h2>
        <p className="text-gray-600 mb-4">
          Pointers are variables that store memory addresses of other variables. They are one of the most powerful
          features in C programming, allowing direct memory manipulation and efficient memory management.
        </p>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <pre>{`int number = 42;     // Regular variable
int* ptr = &number;  // Pointer variable storing address of 'number'

printf("Value: %d\\n", number);     // Prints: 42
printf("Address: %p\\n", ptr);      // Prints: memory address
printf("Value at ptr: %d\\n", *ptr); // Prints: 42`}</pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pointer Operations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Address Operator (&)</h3>
            <p className="text-gray-600 mb-3">
              Used to get the memory address of a variable.
            </p>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <pre>{`int x = 10;
int* ptr = &x;  // & gets address of x`}</pre>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Dereference Operator (*)</h3>
            <p className="text-gray-600 mb-3">
              Used to access the value at a pointer's address.
            </p>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <pre>{`int* ptr = &x;
int value = *ptr;  // * gets value at address`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Uses of Pointers</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Dynamic Memory Allocation</h3>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <pre>{`int* arr = (int*)malloc(5 * sizeof(int));
// Use the array
arr[0] = 1;
arr[1] = 2;
// ...
free(arr);  // Don't forget to free!`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Function Parameters</h3>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <pre>{`void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 5, y = 10;
swap(&x, &y);  // Pass addresses`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Array Operations</h3>
            <div className="bg-gray-800 text-white p-3 rounded font-mono">
              <pre>{`int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;  // Arrays decay to pointers

// Array traversal using pointer
for(int i = 0; i < 5; i++) {
    printf("%d ", *(ptr + i));
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Pitfalls</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <h3 className="text-lg font-medium text-red-800 mb-2">⚠️ Watch out for:</h3>
          <ul className="list-disc list-inside space-y-2 text-red-700">
            <li>Uninitialized pointers</li>
            <li>Memory leaks (forgetting to free)</li>
            <li>Dangling pointers</li>
            <li>Buffer overflows</li>
            <li>Null pointer dereferencing</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </motion.div>
  );
};

export default Pointers;