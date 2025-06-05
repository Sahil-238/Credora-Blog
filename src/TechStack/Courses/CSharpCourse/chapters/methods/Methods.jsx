import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Methods = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">C# Methods</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Method Declaration</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Methods in C# are blocks of code that perform specific tasks. Here's how to declare and use methods:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CodeEditor
              defaultValue={`// Basic method declaration
public void SayHello()
{
    Console.WriteLine("Hello!");
}

// Method with parameters
public int Add(int a, int b)
{
    return a + b;
}

// Method with optional parameters
public string Greet(string name, string greeting = "Hello")
{
    return $"{greeting}, {name}!";
}

// Method with out parameter
public bool TryParse(string input, out int result)
{
    return int.TryParse(input, out result);
}`}
              language="csharp"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Method Overloading</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <p className="text-gray-600">
            Method overloading allows you to define multiple methods with the same name but different parameters:
          </p>
          <CodeEditor
            defaultValue={`public class Calculator
{
    // Method overloading
    public int Add(int a, int b)
    {
        return a + b;
    }

    public double Add(double a, double b)
    {
        return a + b;
    }

    public string Add(string a, string b)
    {
        return a + b;
    }
}`}
            language="csharp"
            height="200px"
          />
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

export default Methods; 