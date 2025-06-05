import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const OopIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to OOP in C#</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Object-Oriented Programming Concepts</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            C# is a powerful object-oriented programming language. Here are the main concepts of OOP:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CodeEditor
              defaultValue={`// 1. Encapsulation
public class BankAccount
{
    private decimal balance;  // Private field

    public decimal Balance   // Public property
    {
        get { return balance; }
        private set { balance = value; }
    }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
            Balance += amount;
    }
}

// 2. Inheritance
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Some sound");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

// 3. Polymorphism
Animal myDog = new Dog();  // Polymorphic behavior
myDog.MakeSound();  // Outputs: "Woof!"

// 4. Abstraction
public interface IShape
{
    double CalculateArea();
}

public class Circle : IShape
{
    private double radius;

    public Circle(double r)
    {
        radius = r;
    }

    public double CalculateArea()
    {
        return Math.PI * radius * radius;
    }
}`}
              language="csharp"
            />
          </div>
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

export default OopIntro;