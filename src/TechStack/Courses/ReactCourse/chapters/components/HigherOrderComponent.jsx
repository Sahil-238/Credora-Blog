import React from 'react';

const HigherOrderComponent = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Higher Order Components (HOCs)</h2>
      <p className="text-gray-600 mb-6">
        Higher Order Components are functions that take a component and return a new component with enhanced functionality.
      </p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <pre className="text-sm">
          {`// Example HOC
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// Usage
const MyComponent = ({ data }) => <div>{data}</div>;
const MyComponentWithLoading = withLoading(MyComponent);`}
        </pre>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>HOCs are a pattern derived from React's compositional nature</li>
        <li>They can handle cross-cutting concerns like logging, authentication, etc.</li>
        <li>HOCs don't modify the input component</li>
        <li>They pass props to the wrapped component</li>
      </ul>
    </div>
  );
};

export default HigherOrderComponent; 