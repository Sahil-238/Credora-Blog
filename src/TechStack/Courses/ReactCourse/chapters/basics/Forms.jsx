import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit, FiCheckSquare, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Forms = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    newsletter: false,
    role: 'user'
  });
  const [errors, setErrors] = useState({});

  const examples = {
    basics: {
      title: 'Form Basics',
      code: `// Controlled Component
function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}`,
      explanation: 'Controlled components in React forms maintain form data in component state.'
    },
    validation: {
      title: 'Form Validation',
      code: `function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>
      {/* Other form fields */}
    </form>
  );
}`,
      explanation: 'Form validation ensures data quality and provides feedback to users.'
    },
    formik: {
      title: 'Using Formik',
      code: `import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required')
});

function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
      }}
    >
      <Form>
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" />
        </div>
        
        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
        </div>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}`,
      explanation: 'Formik is a popular form library that simplifies form handling in React.'
    },
    uncontrolled: {
      title: 'Uncontrolled Components',
      code: `function FileUploadForm() {
  const fileInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];
    // Handle file upload
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        ref={fileInput}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

function SimpleForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    // Handle form data
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      explanation: 'Uncontrolled components let the DOM handle form state, useful for file inputs or simple forms.'
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit
      alert('Form submitted successfully!');
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Forms in React</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Forms</h2>
        <p className="text-gray-600 mb-4">
          React provides two ways to handle form inputs: controlled components where
          form data is handled by React state, and uncontrolled components where form
          data is handled by the DOM itself.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiEdit className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Controlled</h3>
            <p className="text-gray-600">
              Form state managed by React
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckSquare className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Validated</h3>
            <p className="text-gray-600">
              Input validation and error handling
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiAlertTriangle className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Responsive</h3>
            <p className="text-gray-600">
              Immediate feedback to user input
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Form Example</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-gray-700 text-sm">
                Subscribe to newsletter
              </label>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Form Examples</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                className={`px-6 py-3 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {examples[activeTab].code}
            </pre>
            <p className="text-gray-600">
              {examples[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Form Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Use Controlled Components</h3>
                <p className="text-gray-600">
                  Maintain form state in React for better control and validation
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Implement Validation</h3>
                <p className="text-gray-600">
                  Validate inputs and provide clear error messages
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Handle Edge Cases</h3>
                <p className="text-gray-600">
                  Consider loading states, errors, and submission feedback
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="font-semibold text-gray-700">Accessibility</h3>
                <p className="text-gray-600">
                  Use proper labels, ARIA attributes, and keyboard navigation
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Create a multi-step registration form with the following features:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Multiple steps (Personal Info, Account, Preferences)</li>
              <li>Progress indicator</li>
              <li>Form validation at each step</li>
              <li>Ability to go back to previous steps</li>
              <li>Save form state between steps</li>
              <li>Submit all data at the final step</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/events"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Events
        </Link>
        <Link
          to="/react-course/hooks"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Hooks →
        </Link>
      </div>
    </motion.div>
  );
};

export default Forms; 