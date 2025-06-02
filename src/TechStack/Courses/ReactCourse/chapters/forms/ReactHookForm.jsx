import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiBox, FiCheckSquare, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ReactHookForm = () => {
  const basicExample = `import { useForm } from 'react-hook-form';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`;

  const advancedValidationExample = `import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('username')} placeholder="Username" />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <input {...register('email')} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}`;

  const dynamicFieldsExample = `import { useFieldArray, useForm } from 'react-hook-form';

function DynamicForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      users: [{ name: '', email: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users'
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(\`users.\${index}.name\`, {
              required: 'Name is required'
            })}
            placeholder="Name"
          />
          {errors.users?.[index]?.name && (
            <span>{errors.users[index].name.message}</span>
          )}

          <input
            {...register(\`users.\${index}.email\`, {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Email"
          />
          {errors.users?.[index]?.email && (
            <span>{errors.users[index].email.message}</span>
          )}

          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: '', email: '' })}
      >
        Add User
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Hook Form</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding React Hook Form</h2>
        <p className="text-gray-600 mb-4">
          React Hook Form is a performant, flexible and extensible forms library with easy-to-use validation. It provides a simpler form validation method with less code and better performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiBox className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Performance</h3>
            <p className="text-gray-600">
              Minimizes re-renders
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckSquare className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple API and built-in validation
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Flexible</h3>
            <p className="text-gray-600">
              Works with any UI library
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          React Hook Form provides a simple way to handle form validation and submission using hooks.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Validation with Yup</h2>
        <p className="text-gray-600 mb-4">
          React Hook Form can be integrated with Yup for schema-based validation, providing a more declarative way to define validation rules.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {advancedValidationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dynamic Form Fields</h2>
        <p className="text-gray-600 mb-4">
          useFieldArray hook makes it easy to handle dynamic form fields, perfect for forms with repeatable sections.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {dynamicFieldsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">React Hook Form Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Use TypeScript for better type safety</li>
            <li>Implement proper error handling</li>
            <li>Use form validation schemas</li>
            <li>Handle form submission states</li>
            <li>Implement proper form reset</li>
            <li>Use Controller for complex inputs</li>
            <li>Implement proper error messages</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use DevTools for debugging</li>
          <li>Implement form state persistence</li>
          <li>Use watch API sparingly</li>
          <li>Leverage useFormContext for nested forms</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/formik"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Formik
        </Link>
        <Link
          to="/react-course/yup"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Yup Validation <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ReactHookForm;