import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiBox, FiCheckSquare, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Formik = () => {
  const basicFormikExample = `import { Formik, Form, Field, ErrorMessage } from 'formik';

function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <Field type="checkbox" name="rememberMe" />
            <label>Remember me</label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}`;

  const formikComponentExample = `import { useFormik } from 'formik';

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}`;

  const formikFieldArrayExample = `import { Formik, Field, FieldArray } from 'formik';

function FriendList() {
  return (
    <Formik
      initialValues={{ friends: [''] }}
      onSubmit={values => console.log(values)}
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends.map((friend, index) => (
                  <div key={index}>
                    <Field name={"friends." + index} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push('')}
                >
                  Add Friend
                </button>
              </div>
            )}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Formik in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Formik</h2>
        <p className="text-gray-600 mb-4">
          Formik is a popular form library for React that helps you handle form state, validation, and submission with ease. It reduces the amount of boilerplate code needed for complex forms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiBox className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Form State</h3>
            <p className="text-gray-600">
              Manages form values and errors
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCheckSquare className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Validation</h3>
            <p className="text-gray-600">
              Built-in validation support
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Components</h3>
            <p className="text-gray-600">
              Reusable form components
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Formik Usage</h2>
        <p className="text-gray-600 mb-4">
          The most common way to use Formik is with the Formik component, which provides a render prop API for form state and handlers.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicFormikExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">useFormik Hook</h2>
        <p className="text-gray-600 mb-4">
          For more granular control, you can use the useFormik hook to manage form state and validation manually.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {formikComponentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dynamic Form Fields</h2>
        <p className="text-gray-600 mb-4">
          Formik provides FieldArray for handling dynamic form fields, perfect for forms with arrays or lists.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {formikFieldArrayExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Formik Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Use Yup for schema validation</li>
            <li>Implement proper error handling</li>
            <li>Use Field components for better performance</li>
            <li>Handle form submission states properly</li>
            <li>Implement proper form reset functionality</li>
            <li>Use FastField for performance optimization</li>
            <li>Implement proper form submission feedback</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use TypeScript for better type safety</li>
          <li>Create reusable form components</li>
          <li>Implement proper form submission states</li>
          <li>Use FastField for better performance</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/form-validation"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Form Validation
        </Link>
        <Link
          to="/react-course/react-hook-form"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: React Hook Form <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Formik;