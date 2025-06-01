import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiCheckCircle, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Yup = () => {
  const basicSchemaExample = `import * as Yup from 'yup';

// Basic schema
const userSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(18, 'Must be at least 18 years old'),
  website: Yup.string()
    .url('Must be a valid URL')
    .nullable(),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'Must accept terms and conditions')
});

// Usage with form data
const validateUser = async (userData) => {
  try {
    const validData = await userSchema.validate(userData, {
      abortEarly: false // Show all errors, not just the first one
    });
    return { isValid: true, data: validData };
  } catch (err) {
    return { isValid: false, errors: err.errors };
  }
};`;

  const advancedValidationExample = `// Advanced schema with custom validation
const productSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product name is required')
    .test(
      'no-special-chars',
      'Product name cannot contain special characters',
      value => /^[a-zA-Z0-9 ]+$/.test(value)
    ),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive')
    .test(
      'is-decimal',
      'Price must have 2 decimal places',
      value => /^\\d+\\.\\d{2}$/.test(value.toString())
    ),
  category: Yup.string()
    .required('Category is required')
    .oneOf(
      ['electronics', 'clothing', 'food'],
      'Invalid category'
    ),
  tags: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one tag is required')
    .max(5, 'Cannot have more than 5 tags'),
  dimensions: Yup.object().shape({
    width: Yup.number().required('Width is required'),
    height: Yup.number().required('Height is required'),
    depth: Yup.number().required('Depth is required')
  }),
  inStock: Yup.boolean(),
  quantity: Yup.number()
    .when('inStock', {
      is: true,
      then: Yup.number()
        .required('Quantity is required when in stock')
        .min(1, 'Must have at least 1 item')
    })
});`;

  const conditionalValidationExample = `// Conditional validation
const registrationSchema = Yup.object().shape({
  accountType: Yup.string()
    .required('Account type is required')
    .oneOf(['personal', 'business']),
  
  // Personal account fields
  ssn: Yup.string().when('accountType', {
    is: 'personal',
    then: Yup.string()
      .required('SSN is required for personal accounts')
      .matches(/^\\d{3}-\\d{2}-\\d{4}$/, 'Invalid SSN format')
  }),
  
  // Business account fields
  ein: Yup.string().when('accountType', {
    is: 'business',
    then: Yup.string()
      .required('EIN is required for business accounts')
      .matches(/^\\d{2}-\\d{7}$/, 'Invalid EIN format')
  }),
  
  companyName: Yup.string().when('accountType', {
    is: 'business',
    then: Yup.string().required('Company name is required')
  }),

  // Common fields with conditional rules
  phone: Yup.string()
    .required('Phone number is required')
    .when('accountType', {
      is: 'business',
      then: Yup.string()
        .matches(/^\\+1\\d{10}$/, 'Business phone must be in international format')
    }),

  // Array validation with conditions
  contacts: Yup.array().when('accountType', {
    is: 'business',
    then: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Contact name is required'),
          role: Yup.string().required('Contact role is required')
        })
      )
      .min(1, 'At least one contact is required')
      .max(5, 'Maximum 5 contacts allowed')
  })
});`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Yup Schema Validation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Yup</h2>
        <p className="text-gray-600 mb-4">
          Yup is a schema builder for runtime value parsing and validation. It's commonly used with React form libraries like Formik and React Hook Form to provide robust form validation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiShield className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Schema-based</h3>
            <p className="text-gray-600">
              Declarative validation rules
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckCircle className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Type Safety</h3>
            <p className="text-gray-600">
              Runtime type checking
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Extensible</h3>
            <p className="text-gray-600">
              Custom validation rules
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Schema Validation</h2>
        <p className="text-gray-600 mb-4">
          Yup provides a simple and intuitive API for defining validation schemas. Here's how to create and use basic validation rules.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicSchemaExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Validation</h2>
        <p className="text-gray-600 mb-4">
          Yup supports advanced validation scenarios including custom validation functions, nested objects, and arrays.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {advancedValidationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conditional Validation</h2>
        <p className="text-gray-600 mb-4">
          Yup allows you to define conditional validation rules based on other field values, perfect for complex form scenarios.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {conditionalValidationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Yup Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Define reusable validation schemas</li>
            <li>Use TypeScript for better type inference</li>
            <li>Handle validation errors gracefully</li>
            <li>Cache validation schemas when possible</li>
            <li>Use meaningful error messages</li>
            <li>Test validation rules thoroughly</li>
            <li>Consider localization for error messages</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use schema composition for complex forms</li>
          <li>Implement custom validation methods</li>
          <li>Consider performance with large forms</li>
          <li>Use schema caching for better performance</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/react-hook-form"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: React Hook Form
        </Link>
        <Link
          to="/react-course/routing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Routing <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Yup;