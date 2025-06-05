import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const References = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>References in C++</h1>
      
      <h2>What are References?</h2>
      <p>
        References provide an alternative name (alias) for an existing variable. Unlike
        pointers, references must be initialized when declared and cannot be changed to
        refer to another variable.
      </p>

      <h2>Basic Reference Syntax</h2>
      <CodeEditor
        defaultValue={`// Declaration and initialization
int number = 42;
int& ref = number;  // ref is a reference to number

// Using references
ref = 100;  // Changes value of number to 100
cout << number;  // Prints 100`}
        language="cpp"
      />

      <h2>References vs Pointers</h2>
      <CodeEditor
        defaultValue={`int value = 42;

// Reference
int& ref = value;
ref = 100;  // Direct use

// Pointer
int* ptr = &value;
*ptr = 100;  // Need dereferencing

// Key differences:
// 1. References must be initialized
// 2. References cannot be null
// 3. References cannot be reassigned
// 4. No reference arithmetic`}
        language="cpp"
      />

      <h2>References in Functions</h2>
      <CodeEditor
        defaultValue={`// Pass by value
void incrementValue(int x) {
    x++;  // Original unchanged
}

// Pass by reference
void incrementReference(int& x) {
    x++;  // Original modified
}

// Pass by const reference
void printValue(const int& x) {
    cout << x << endl;  // Cannot modify x
}

int main() {
    int num = 42;
    incrementValue(num);      // num still 42
    incrementReference(num);  // num becomes 43
    printValue(num);         // Prints 43
    return 0;
}`}
        language="cpp"
      />

      <h2>Common Use Cases</h2>
      <CodeEditor
        defaultValue={`// Function return by reference
int& getElement(vector<int>& vec, int index) {
    return vec[index];
}

// Range-based for loop with reference
vector<int> numbers = {1, 2, 3, 4, 5};
for (int& num : numbers) {
    num *= 2;  // Modifies original values
}

// Const reference in range-based for
for (const int& num : numbers) {
    cout << num << " ";  // Read-only access
}`}
        language="cpp"
      />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-700">
          <strong>Best Practices:</strong>
          <ul className="list-disc ml-4">
            <li>Use references for function parameters to avoid copying</li>
            <li>Use const references when you don't need to modify the value</li>
            <li>Prefer references over pointers when possible</li>
            <li>Use references in range-based for loops for efficiency</li>
          </ul>
        </p>
      </div>
    </motion.div>
  );
};

export default References; 