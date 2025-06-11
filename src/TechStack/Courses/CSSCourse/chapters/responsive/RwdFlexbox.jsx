import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const RwdFlexbox = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Responsive Flexbox</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Flexbox Setup</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre className="bg-white p-3 rounded">
            {`.container {
  display: flex;
  flex-direction: column; /* Stack on mobile */
}

@media (min-width: 768px) {
  .container {
    flex-direction: row; /* Side by side on desktop */
  }
}`}
          </pre>
          <p className="mt-2 text-gray-600">A common pattern for responsive layouts using flexbox.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Flex Items</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`.item {
  flex: 1 1 100%; /* Full width on mobile */
}

@media (min-width: 768px) {
  .item {
    flex: 1 1 0; /* Equal width on desktop */
  }
}

/* Custom widths at different breakpoints */
@media (min-width: 992px) {
  .item-main {
    flex: 2; /* Takes twice the space */
  }
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flex Wrapping</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 100%; /* Full width on mobile */
}

@media (min-width: 600px) {
  .flex-item {
    flex: 1 1 50%; /* Two columns on tablet */
  }
}

@media (min-width: 992px) {
  .flex-item {
    flex: 1 1 33.333%; /* Three columns on desktop */
  }
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Navigation</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  flex: 1;
  text-align: center;
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .nav-item {
    flex: 0 1 auto;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Holy Grail Layout</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
  }
  
  .main {
    flex: 1;
    order: 2;
  }
  
  .sidebar-left {
    flex: 0 0 200px;
    order: 1;
  }
  
  .sidebar-right {
    flex: 0 0 200px;
    order: 3;
  }
}`}
            </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Card Grid</h3>
            <pre className="bg-white p-3 rounded mt-2">
              {`.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 600px) {
  .card {
    flex: 1 1 calc(50% - 1rem);
  }
}

@media (min-width: 992px) {
  .card {
    flex: 1 1 calc(33.333% - 1rem);
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use flex-direction for responsive layouts</li>
          <li>Consider flex-wrap for better content flow</li>
          <li>Utilize flex-basis for responsive widths</li>
          <li>Use gap property for consistent spacing</li>
          <li>Combine with media queries for breakpoint control</li>
          <li>Test layouts across different screen sizes</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default RwdFlexbox; 