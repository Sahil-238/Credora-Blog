import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiCheckCircle, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FormValidation = () => {
  const basicValidationExample = `import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      {/* Additional fields for email and password */}
    </form>
  );
}
`;

  const customHookExample = `import { useState, useEffect } from 'react';

// Custom validation hook
function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // Callback for successful validation
        console.log('Form is valid:', values);
      }
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, values]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
}

// Usage
function SignupForm() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useFormValidation(
    { email: '', password: '' },
    validateSignup // define this function to validate form values
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      {/* Other fields */}
    </form>
  );
}
`;

  const schemaValidationExample = `import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

// Usage with Formik
function SignupForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="username" placeholder="Username" />
          {errors.username && touched.username && (
            <div style={{ color: 'red' }}>{errors.username}</div>
          )}
          {/* Other fields */}
        </Form>
      )}
    </Formik>
  );
}
`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Form Validation in React</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Form Validation</h2>
        <p className="text-gray-600 mb-4">
          Form validation is crucial for ensuring data quality and providing a good user experience. React offers several approaches to implement form validation, from basic validation to advanced schema-based solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiAlertCircle className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Client-side</h3>
            <p className="text-gray-600">
              Immediate feedback and validation before submission
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckCircle className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Schema-based</h3>
            <p className="text-gray-600">
              Structured validation rules using libraries
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Custom</h3>
            <p className="text-gray-600">
              Custom validation logic for specific needs
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Form Validation</h2>
        <p className="text-gray-600 mb-4">
          The simplest approach is to implement validation logic directly in your component. This gives you full control over the validation process.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicValidationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Validation Hook</h2>
        <p className="text-gray-600 mb-4">
          Create reusable validation logic by extracting it into a custom hook. This approach helps maintain consistency across forms and reduces code duplication.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {customHookExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Schema-based Validation</h2>
        <p className="text-gray-600 mb-4">
          Using schema validation libraries like Yup provides a declarative way to define validation rules and integrates well with form libraries like Formik.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {schemaValidationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Validation Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Validate both on submit and on change/blur for better UX</li>
            <li>Provide clear, actionable error messages</li>
            <li>Consider accessibility in error presentation</li>
            <li>Implement both client and server-side validation</li>
            <li>Use appropriate HTML5 input types and attributes</li>
            <li>Consider async validation for unique fields</li>
            <li>Handle all possible edge cases</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use debouncing for real-time validation</li>
          <li>Consider using validation libraries for complex forms</li>
          <li>Implement progressive enhancement</li>
          <li>Test validation logic thoroughly</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/uncontrolled-components"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Uncontrolled Components
        </Link>
        <Link
          to="/react-course/formik"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Formik <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default FormValidation;
