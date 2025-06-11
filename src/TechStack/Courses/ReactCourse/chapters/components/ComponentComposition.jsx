import React, { useState, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Specialized Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-4 border-t border-gray-200 bg-gray-50 ${className}`}>
    {children}
  </div>
);

// Layout Components
const SplitScreen = ({ left: Left, right: Right, leftWidth = '1/3' }) => (
  <div className="flex flex-col md:flex-row gap-4">
    <div className={`md:w-${leftWidth}`}>
      <Left />
    </div>
    <div className={`md:w-${leftWidth === '1/3' ? '2/3' : '1/2'}`}>
      <Right />
    </div>
  </div>
);

const Stack = ({ children, spacing = 4 }) => (
  <div className={`space-y-${spacing}`}>
    {children}
  </div>
);

// Example Components using Composition
const UserProfile = () => {
  const user = {
    name: 'Jane Cooper',
    role: 'Product Manager',
    email: 'jane@example.com',
    stats: {
      projects: 12,
      teams: 5,
      reports: 24,
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-medium">{user.name}</h3>
            <p className="text-gray-600">{user.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <p>{user.email}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-xl font-bold text-blue-600">{user.stats.projects}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-xl font-bold text-green-600">{user.stats.teams}</div>
              <div className="text-sm text-gray-600">Teams</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded">
              <div className="text-xl font-bold text-purple-600">{user.stats.reports}</div>
              <div className="text-sm text-gray-600">Reports</div>
            </div>
          </div>
        </Stack>
      </CardBody>
      <CardFooter>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View Activity
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

const Dashboard = () => {
  const LeftComponent = () => (
    <Card className="h-full">
      <CardHeader>
        <h3 className="font-medium">Navigation</h3>
      </CardHeader>
      <CardBody>
        <nav className="space-y-2">
          {['Dashboard', 'Projects', 'Tasks', 'Reports', 'Settings'].map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 focus:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </nav>
      </CardBody>
    </Card>
  );

  const RightComponent = () => (
    <Stack spacing={4}>
      <Card>
        <CardHeader>
          <h3 className="font-medium">Quick Stats</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">Task Completion</div>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
          </div>
        </CardBody>
      </Card>
      <UserProfile />
    </Stack>
  );

  return <SplitScreen left={LeftComponent} right={RightComponent} leftWidth="1/4" />;
};

// Advanced Composition Patterns
const TabContext = createContext();

// Compound Components
const TabList = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200 bg-gray-50">
      {children}
    </div>
  );
};

const TabButton = ({ id, children }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 font-medium transition-colors ${
        activeTab === id
          ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const TabPanel = ({ id, children }) => {
  const { activeTab } = useContext(TabContext);
  if (activeTab !== id) return null;
  return children;
};

const TabsContainer = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {children}
      </div>
    </TabContext.Provider>
  );
};

// Example using the compound components pattern
const TabsExample = () => {
  return (
    <TabsContainer defaultTab="overview">
      <TabList>
        <TabButton id="overview">Overview</TabButton>
        <TabButton id="features">Features</TabButton>
        <TabButton id="pricing">Pricing</TabButton>
      </TabList>
      <TabPanels>
        <TabPanel id="overview">
          <div className="space-y-4">
            <h3 className="font-medium">Product Overview</h3>
            <p className="text-gray-600">
              This is an example of compound components pattern where multiple components work
              together to create a cohesive interface.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="features">
          <div className="space-y-4">
            <h3 className="font-medium">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Compound Components Pattern</li>
              <li>Context-based State Management</li>
              <li>Flexible and Reusable</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel id="pricing">
          <div className="space-y-4">
            <h3 className="font-medium">Pricing Plans</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-medium">Basic</h4>
                <p className="text-gray-600">$10/month</p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-medium">Pro</h4>
                <p className="text-gray-600">$20/month</p>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabsContainer>
  );
};

// Render Props Pattern Example
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="h-48 bg-gray-100 rounded-lg relative overflow-hidden"
    >
      {render(position)}
    </div>
  );
};

const MouseTrackerExample = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <>
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Move your mouse around
          </div>
          <div
            className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          />
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm">
            x: {x}, y: {y}
          </div>
        </>
      )}
    />
  );
};

const ComponentComposition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Component Composition</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Component Composition?</h2>
        <p className="text-gray-600 mb-4">
          Component composition is a fundamental concept in React where we combine smaller, focused
          components to create more complex UIs. Instead of inheritance, React uses composition to
          reuse code between components.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Key Principle:</strong> Composition lets you keep components simple and flexible
            by breaking them into smaller pieces and combining them in various ways.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Component Example</h2>
        <p className="text-gray-600 mb-4">
          A common example of composition is a card component that's built from smaller,
          specialized components. This approach provides flexibility while maintaining consistency.
        </p>
        <div className="max-w-md">
          <UserProfile />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Layout Composition Example</h2>
        <p className="text-gray-600 mb-4">
          Layout components demonstrate how composition can create flexible and reusable page
          structures. Here's an example of a dashboard layout using split screen and stack components.
        </p>
        <Dashboard />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compound Components Pattern</h2>
        <p className="text-gray-600 mb-4">
          The compound components pattern allows you to create components that work together to
          manage shared state and behavior while maintaining a clean and declarative API.
        </p>
        <TabsExample />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Render Props Pattern</h2>
        <p className="text-gray-600 mb-4">
          The render props pattern enables component logic reuse by passing a render function as a
          prop. This example shows a mouse position tracker using render props.
        </p>
        <MouseTrackerExample />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Composition Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Containment</h3>
            <p className="text-gray-600 mb-4">
              Some components don't know their children ahead of time. This is especially common for
              components like Sidebar or Dialog that represent generic "boxes".
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm">
                {`<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>`}
              </pre>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Specialization</h3>
            <p className="text-gray-600 mb-4">
              Sometimes we think about components as being "special cases" of other components. In
              React, this is also achieved by composition.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm">
                {`const SpecialCard = () => (
  <Card className="special">
    <CustomContent />
  </Card>
)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Do's</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Keep components focused and single-purpose</li>
              <li>Use children prop for flexible composition</li>
              <li>Create reusable layout components</li>
              <li>Pass configuration as props</li>
              <li>Use TypeScript for better type safety</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-red-800 mb-2">Don'ts</h3>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Create deeply nested component hierarchies</li>
              <li>Tightly couple components together</li>
              <li>Repeat similar logic across components</li>
              <li>Mix business logic with presentation</li>
              <li>Override component styles directly</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex justify-between">
        <Link
          to="/react-course/higher-order-components"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Higher-Order Components
        </Link>
        <Link
          to="/react-course/error-boundaries"
          className="text-blue-600 hover:text-blue-800"
        >
          Error Boundaries →
        </Link>
      </div>
    </motion.div>
  );
};

export default ComponentComposition; 