import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to SQL</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is SQL?</h2>
        <p className="text-gray-600 mb-4">
          SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. 
          It's the standard language for database management systems (DBMS) and is essential for storing, manipulating, and retrieving data.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Key Features of SQL:</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Standardized database language</li>
            <li>Easy to learn and understand</li>
            <li>Powerful data manipulation capabilities</li>
            <li>Handles large amounts of data efficiently</li>
            <li>Supports multiple users and concurrent access</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Learn SQL?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Career Opportunities</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Database Administrator</li>
              <li>• Data Analyst</li>
              <li>• Backend Developer</li>
              <li>• Business Intelligence Analyst</li>
              <li>• Data Scientist</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Technical Benefits</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Universal database language</li>
              <li>• Robust data management</li>
              <li>• High performance</li>
              <li>• Data integrity</li>
              <li>• Scalability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular SQL Databases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">MySQL</h3>
            <p className="text-gray-600 mb-2">Most popular open-source database</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Free and open source</li>
              <li>• Excellent community support</li>
              <li>• Great for web applications</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">PostgreSQL</h3>
            <p className="text-gray-600 mb-2">Advanced open-source database</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Feature-rich</li>
              <li>• Strong data integrity</li>
              <li>• Extensible</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">SQL Server</h3>
            <p className="text-gray-600 mb-2">Microsoft's enterprise database</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Enterprise features</li>
              <li>• Strong Windows integration</li>
              <li>• Excellent tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic SQL Commands</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-4">
          {`-- Select all columns from a table
SELECT * FROM table_name;

-- Insert new data
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- Update existing data
UPDATE table_name SET column1 = value1 WHERE condition;

-- Delete data
DELETE FROM table_name WHERE condition;`}
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">SQL Categories:</h3>
          <ul className="text-yellow-700 space-y-1">
            <li>• <strong>DDL</strong> (Data Definition Language) - CREATE, ALTER, DROP</li>
            <li>• <strong>DML</strong> (Data Manipulation Language) - SELECT, INSERT, UPDATE, DELETE</li>
            <li>• <strong>DCL</strong> (Data Control Language) - GRANT, REVOKE</li>
            <li>• <strong>TCL</strong> (Transaction Control Language) - COMMIT, ROLLBACK</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          To start learning SQL, you'll need:
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>A database management system (MySQL, PostgreSQL, etc.)</li>
          <li>A database client or GUI tool</li>
          <li>Basic understanding of database concepts</li>
          <li>Practice database for hands-on learning</li>
        </ol>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/sql-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Course Overview
        </Link>
        <Link
          to="/sql-course/syntax"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: SQL Syntax →
        </Link>
      </div>
    </motion.div>
  );
};

export default Introduction; 