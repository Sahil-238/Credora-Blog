import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const ClassesObjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Classes and Objects in C++</h1>
      
      <h2>Class Definition</h2>
      <CodeEditor
        defaultValue={`class Student {
private:
    // Private members
    string name;
    int age;
    double gpa;

public:
    // Constructor
    Student(string n, int a, double g) {
        name = n;
        age = a;
        gpa = g;
    }

    // Public methods
    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "GPA: " << gpa << endl;
    }

    // Getters
    string getName() { return name; }
    int getAge() { return age; }
    double getGPA() { return gpa; }

    // Setters
    void setName(string n) { name = n; }
    void setAge(int a) { age = a; }
    void setGPA(double g) { gpa = g; }
};`}
        language="cpp"
      />

      <h2>Creating and Using Objects</h2>
      <CodeEditor
        defaultValue={`int main() {
    // Creating objects
    Student student1("John Doe", 20, 3.8);
    Student student2("Jane Smith", 19, 3.9);

    // Using object methods
    student1.displayInfo();
    
    // Using getters and setters
    cout << student2.getName() << endl;
    student2.setAge(20);

    // Dynamic object creation
    Student* student3 = new Student("Bob Wilson", 21, 3.7);
    student3->displayInfo();
    delete student3;  // Don't forget to free memory

    return 0;
}`}
        language="cpp"
      />

      <h2>Access Specifiers</h2>
      <CodeEditor
        defaultValue={`class Example {
private:
    // Only accessible within the class
    int privateVar;

protected:
    // Accessible within this class and derived classes
    int protectedVar;

public:
    // Accessible from anywhere
    int publicVar;
};`}
        language="cpp"
      />

      <h2>Member Functions Inside vs Outside Class</h2>
      <CodeEditor
        defaultValue={`class Rectangle {
private:
    int width, height;

public:
    // Declaration inside class
    void setWidth(int w);
    void setHeight(int h);
    int getArea();
};

// Definition outside class
void Rectangle::setWidth(int w) {
    width = w;
}

void Rectangle::setHeight(int h) {
    height = h;
}

int Rectangle::getArea() {
    return width * height;
}`}
        language="cpp"
      />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-700">
          <strong>Best Practices:</strong>
          <ul className="list-disc ml-4">
            <li>Keep member variables private</li>
            <li>Provide public methods to access and modify private data</li>
            <li>Use meaningful names for classes and methods</li>
            <li>Initialize all member variables in constructors</li>
            <li>Free dynamically allocated memory in destructors</li>
          </ul>
        </p>
      </div>
    </motion.div>
  );
};

export default ClassesObjects; 