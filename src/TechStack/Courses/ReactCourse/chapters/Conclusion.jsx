import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiBook, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Conclusion = () => {
  const courseTopics = [
    {
      title: 'Fundamentals',
      topics: [
        'React Core Concepts',
        'JSX and Components',
        'Props and State',
        'Component Lifecycle',
        'Event Handling'
      ]
    },
    {
      title: 'Advanced Concepts',
      topics: [
        'Hooks and Custom Hooks',
        'Context API',
        'State Management',
        'Performance Optimization',
        'Error Handling'
      ]
    },
    {
      title: 'Development Tools',
      topics: [
        'Development Environment',
        'Debugging Techniques',
        'Testing Strategies',
        'Build and Deployment',
        'Best Practices'
      ]
    }
  ];

  const nextSteps = [
    {
      title: 'Build Projects',
      description: 'Apply your knowledge by building real-world applications',
      icon: <FiGithub className="text-2xl text-blue-600" />
    },
    {
      title: 'Continue Learning',
      description: 'Explore advanced React topics and related technologies',
      icon: <FiBook className="text-2xl text-blue-600" />
    },
    {
      title: 'Join Community',
      description: 'Engage with the React community and contribute to open source',
      icon: <FiCheckCircle className="text-2xl text-blue-600" />
    }
  ];

  const resources = [
    {
      title: 'Official Documentation',
      url: 'https://react.dev',
      description: 'The official React documentation'
    },
    {
      title: 'React GitHub Repository',
      url: 'https://github.com/facebook/react',
      description: 'React source code and documentation'
    },
    {
      title: 'React Community',
      url: 'https://react.dev/community',
      description: 'React community resources and support'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Conclusion</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Summary</h2>
        <p className="text-gray-600 mb-6">
          Congratulations on completing the React course! You've learned the fundamentals
          and advanced concepts of React development, along with best practices and tools
          for building modern web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseTopics.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-center text-gray-600"
                  >
                    <FiCheckCircle className="text-green-500 mr-2" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nextSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Additional Resources</h2>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Ideas</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Here are some project ideas to help you practice your React skills:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Build a task management application with React and Redux</li>
            <li>Create a social media dashboard with real-time updates</li>
            <li>Develop an e-commerce platform with shopping cart functionality</li>
            <li>Build a portfolio website with React and animations</li>
            <li>Create a blog platform with markdown support</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Feedback</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            We value your feedback! Please let us know how we can improve this course:
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Your Feedback</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Certificate of Completion</h2>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="mb-6">
            <FiCheckCircle className="text-6xl text-green-500 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Congratulations!
          </h3>
          <p className="text-gray-600 mb-6">
            You've successfully completed the React Development Course.
            Download your certificate of completion below.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Download Certificate
          </button>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/best-practices"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Best Practices
        </Link>
        <Link
          to="/react-course"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Course Home
        </Link>
      </div>
    </motion.div>
  );
};

export default Conclusion; 