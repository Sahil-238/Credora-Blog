import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Functions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Functions in C++</h1>
      
      <h2>Function Declaration and Definition</h2>
      <CodeEditor
        defaultValue={`// Function declaration (prototype)
return_type function_name(parameter_list);

// Function definition
return_type function_name(parameter_list) {
    // function body
    return value;  // if return_type is not void
}`}
        language="cpp"
      />

      <h2>Example Functions</h2>
      <CodeEditor
        defaultValue={`// Basic function
int add(int a, int b) {
    return a + b;
}

// Function with default parameters
void greet(string name = "Guest") {
    cout << "Hello, " << name << endl;
}

// Function with multiple parameters
double calculateArea(double length, double width) {
    return length * width;
}

// Void function (no return value)
void printMessage() {
    cout << "This is a message" << endl;
}`}
        language="cpp"
      />

      <h2>Function Prototypes</h2>
      <p>
        Function prototypes allow you to declare a function before defining it. This is useful
        when you want to use a function before its actual implementation.
      </p>
      <CodeEditor
        defaultValue={`// Function prototypes
int calculateSum(int, int);
void displayResult(double);
string formatText(string, bool);

// Main function using the prototypes
int main() {
    int result = calculateSum(5, 3);
    displayResult(result);
    return 0;
}

// Function definitions can come later
int calculateSum(int a, int b) {
    return a + b;
}

void displayResult(double value) {
    cout << "Result: " << value << endl;
}`}
        language="cpp"
      />

      <h2>Pass by Value vs Reference</h2>
      <CodeEditor
        defaultValue={`// Pass by value
void modifyValue(int x) {
    x = 100;  // Original value unchanged
}

// Pass by reference
void modifyReference(int& x) {
    x = 100;  // Original value modified
}

// Pass by const reference
void printValue(const int& x) {
    cout << x << endl;  // Cannot modify x
}`}
        language="cpp"
      />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-700">
          <strong>Best Practice:</strong> Use pass by reference for large objects to avoid
          copying. Use const reference when you don't need to modify the parameter. Use pass
          by value for small objects like integers.
        </p>
      </div>
    </motion.div>
  );
};

export default Functions; 