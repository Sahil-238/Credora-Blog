const courseStructure = {
  basics: {
    title: 'React Basics',
    sections: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'create-react-app', title: 'Create React App' },
      { id: 'jsx', title: 'JSX' },
      { id: 'components', title: 'Components' },
      { id: 'props', title: 'Props' },
      { id: 'state', title: 'State' },
      { id: 'lifecycle', title: 'Lifecycle' },
      { id: 'events', title: 'Events' }
    ]
  },
  hooks: {
    title: 'React Hooks',
    sections: [
      { id: 'hooks-intro', title: 'Hooks Introduction' },
      { id: 'useState', title: 'useState' },
      { id: 'useEffect', title: 'useEffect' },
      { id: 'useContext', title: 'useContext' },
      { id: 'useRef', title: 'useRef' },
      { id: 'useReducer', title: 'useReducer' },
      { id: 'useCallback', title: 'useCallback' },
      { id: 'useMemo', title: 'useMemo' },
      { id: 'custom-hooks', title: 'Custom Hooks' }
    ]
  },
  components: {
    title: 'Component Patterns',
    sections: [
      { id: 'class-components', title: 'Class Components' },
      { id: 'functional-components', title: 'Functional Components' },
      { id: 'higher-order-components', title: 'Higher-Order Components' },
      { id: 'render-props', title: 'Render Props' },
      { id: 'composition', title: 'Component Composition' },
      { id: 'error-boundaries', title: 'Error Boundaries' },
      { id: 'code-splitting', title: 'Code Splitting' }
    ]
  },
  routing: {
    title: 'React Router',
    sections: [
      { id: 'router-setup', title: 'Router Setup' },
      { id: 'basic-routing', title: 'Basic Routing' },
      { id: 'route-parameters', title: 'Route Parameters' },
      { id: 'nested-routes', title: 'Nested Routes' },
      { id: 'protected-routes', title: 'Protected Routes' },
      { id: 'navigation', title: 'Programmatic Navigation' }
    ]
  },
  state: {
    title: 'State Management',
    sections: [
      { id: 'context-api', title: 'Context API' },
      { id: 'redux-basics', title: 'Redux Basics' },
      { id: 'redux-toolkit', title: 'Redux Toolkit' },
      { id: 'zustand', title: 'Zustand' },
      { id: 'recoil', title: 'Recoil' },
      { id: 'jotai', title: 'Jotai' }
    ]
  },
  forms: {
    title: 'Forms & Validation',
    sections: [
      { id: 'controlled-components', title: 'Controlled Components' },
      { id: 'uncontrolled-components', title: 'Uncontrolled Components' },
      { id: 'form-validation', title: 'Form Validation' },
      { id: 'formik', title: 'Formik' },
      { id: 'react-hook-form', title: 'React Hook Form' },
      { id: 'yup', title: 'Yup Validation' }
    ]
  },
  styling: {
    title: 'Styling in React',
    sections: [
      { id: 'css-modules', title: 'CSS Modules' },
      { id: 'styled-components', title: 'Styled Components' },
      { id: 'tailwind', title: 'Tailwind CSS' },
      { id: 'css-in-js', title: 'CSS-in-JS' },
      { id: 'material-ui', title: 'Material UI' },
      { id: 'chakra-ui', title: 'Chakra UI' }
    ]
  },
  testing: {
    title: 'Testing',
    sections: [
      { id: 'jest-intro', title: 'Jest Introduction' },
      { id: 'react-testing-library', title: 'React Testing Library' },
      { id: 'component-testing', title: 'Component Testing' },
      { id: 'hook-testing', title: 'Hook Testing' },
      { id: 'integration-testing', title: 'Integration Testing' },
      { id: 'e2e-testing', title: 'E2E Testing' }
    ]
  },
  performance: {
    title: 'Performance',
    sections: [
      { id: 'optimization', title: 'Performance Optimization' },
      { id: 'memo', title: 'React.memo' },
      { id: 'lazy-loading', title: 'Lazy Loading' },
      { id: 'suspense', title: 'Suspense' },
      { id: 'virtualization', title: 'Virtualization' },
      { id: 'profiler', title: 'React Profiler' }
    ]
  },
  deployment: {
    title: 'Deployment & Tools',
    sections: [
      { id: 'build-process', title: 'Build Process' },
      { id: 'deployment', title: 'Deployment Options' },
      { id: 'ci-cd', title: 'CI/CD' },
      { id: 'dev-tools', title: 'Developer Tools' },
      { id: 'debugging', title: 'Debugging' },
      { id: 'best-practices', title: 'Best Practices' }
    ]
  }
};

export default courseStructure; 