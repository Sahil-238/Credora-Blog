import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import ReactCourse from './ReactCourse';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Basics
import Introduction from './chapters/basics/Introduction';
const GettingStarted = React.lazy(() => import('./chapters/basics/GettingStarted'));
const CreateReactApp = React.lazy(() => import('./chapters/basics/CreateReactApp'));
const JSX = React.lazy(() => import('./chapters/basics/Jsx'));
const Components = React.lazy(() => import('./chapters/basics/Components'));
const Props = React.lazy(() => import('./chapters/basics/Props'));
const State = React.lazy(() => import('./chapters/basics/State'));
const Lifecycle = React.lazy(() => import('./chapters/basics/Lifecycle'));
const Events = React.lazy(() => import('./chapters/basics/Events'));

// Hooks
const HooksIntro = React.lazy(() => import('./chapters/hooks/HooksIntro'));
const UseState = React.lazy(() => import('./chapters/hooks/UseState'));
const UseEffect = React.lazy(() => import('./chapters/hooks/UseEffect'));
const UseContext = React.lazy(() => import('./chapters/hooks/UseContext'));
const UseRef = React.lazy(() => import('./chapters/hooks/UseRef'));
const UseReducer = React.lazy(() => import('./chapters/hooks/UseReducer'));
const UseCallback = React.lazy(() => import('./chapters/hooks/UseCallback'));
const UseMemo = React.lazy(() => import('./chapters/hooks/UseMemo'));
const CustomHooks = React.lazy(() => import('./chapters/hooks/CustomHooks'));

// Component Patterns
const ClassComponents = React.lazy(() => import('./chapters/components/ClassComponents'));
const FunctionalComponents = React.lazy(() => import('./chapters/components/FunctionalComponents'));
const HOC = React.lazy(() => import('./chapters/components/HigherOrderComponent'));
const RenderProps = React.lazy(() => import('./chapters/components/RenderProps'));
const Composition = React.lazy(() => import('./chapters/components/Composition'));
const ErrorBoundaries = React.lazy(() => import('./chapters/components/ErrorBoundaries'));
const CodeSplitting = React.lazy(() => import('./chapters/components/CodeSplitting'));

// Routing
const RouterSetup = React.lazy(() => import('./chapters/routing/RouterSetup'));
const BasicRouting = React.lazy(() => import('./chapters/routing/BasicRouting'));
const RouteParameters = React.lazy(() => import('./chapters/routing/RouteParameters'));
const NestedRoutes = React.lazy(() => import('./chapters/routing/NestedRoutes'));
const ProtectedRoutes = React.lazy(() => import('./chapters/routing/ProtectedRoutes'));
const Navigation = React.lazy(() => import('./chapters/routing/Navigation'));

// State Management
const ContextAPI = React.lazy(() => import('./chapters/state/ContextApi'));
const ReduxBasics = React.lazy(() => import('./chapters/state/ReduxBasics'));
const ReduxToolkit = React.lazy(() => import('./chapters/state/ReduxToolkit'));
const Zustand = React.lazy(() => import('./chapters/state/Zustand'));
const Recoil = React.lazy(() => import('./chapters/state/Recoil'));
const Jotai = React.lazy(() => import('./chapters/state/Jotai'));

// Forms
const ControlledComponents = React.lazy(() => import('./chapters/forms/ControlledComponents'));
const UncontrolledComponents = React.lazy(() => import('./chapters/forms/UncontrolledComponents'));
const FormValidation = React.lazy(() => import('./chapters/forms/FormValidation'));
const Formik = React.lazy(() => import('./chapters/forms/Formik'));
const ReactHookForm = React.lazy(() => import('./chapters/forms/ReactHookForm'));
const Yup = React.lazy(() => import('./chapters/forms/Yup'));

// Styling
const CSSModules = React.lazy(() => import('./chapters/styling/CssModules'));
const StyledComponents = React.lazy(() => import('./chapters/styling/StyledComponents'));
const Tailwind = React.lazy(() => import('./chapters/styling/Tailwind'));
const CSSInJS = React.lazy(() => import('./chapters/styling/CssInJs'));
const MaterialUI = React.lazy(() => import('./chapters/styling/MaterialUi'));
const ChakraUI = React.lazy(() => import('./chapters/styling/ChakraUi'));

// Testing
const JestIntro = React.lazy(() => import('./chapters/testing/JestIntro'));
const RTL = React.lazy(() => import('./chapters/testing/ReactTestingLibrary'));
const ComponentTesting = React.lazy(() => import('./chapters/testing/ComponentTesting'));
const HookTesting = React.lazy(() => import('./chapters/testing/HookTesting'));
const IntegrationTesting = React.lazy(() => import('./chapters/testing/IntegrationTesting'));
const E2ETesting = React.lazy(() => import('./chapters/testing/E2eTesting'));

// Performance
const Optimization = React.lazy(() => import('./chapters/performance/Optimization'));
const Memo = React.lazy(() => import('./chapters/performance/Memo'));
const LazyLoading = React.lazy(() => import('./chapters/performance/LazyLoading'));
const SuspenseComponent = React.lazy(() => import('./chapters/performance/Suspense'));
const Virtualization = React.lazy(() => import('./chapters/performance/Virtualization'));
const Profiler = React.lazy(() => import('./chapters/performance/Profiler'));

// Deployment
const BuildProcess = React.lazy(() => import('./chapters/deployment/BuildProcess'));
const Deployment = React.lazy(() => import('./chapters/deployment/Deployment'));
const CICD = React.lazy(() => import('./chapters/deployment/CiCd'));
const DevTools = React.lazy(() => import('./chapters/deployment/DevTools'));
const Debugging = React.lazy(() => import('./chapters/deployment/Debugging'));
const BestPractices = React.lazy(() => import('./chapters/deployment/BestPractices'));

const wrapInErrorBoundary = (Component) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      {Component}
    </Suspense>
  </ErrorBoundary>
);

const routes = (
  <Route path="react-course" element={<ReactCourse />}>
    {/* Basics */}
    <Route path="introduction" element={wrapInErrorBoundary(<Introduction />)} />
    <Route path="getting-started" element={wrapInErrorBoundary(<GettingStarted />)} />
    <Route path="create-react-app" element={wrapInErrorBoundary(<CreateReactApp />)} />
    <Route path="jsx" element={wrapInErrorBoundary(<JSX />)} />
    <Route path="components" element={wrapInErrorBoundary(<Components />)} />
    <Route path="props" element={wrapInErrorBoundary(<Props />)} />
    <Route path="state" element={wrapInErrorBoundary(<State />)} />
    <Route path="lifecycle" element={wrapInErrorBoundary(<Lifecycle />)} />
    <Route path="events" element={wrapInErrorBoundary(<Events />)} />

    {/* Hooks */}
    <Route path="hooks-intro" element={wrapInErrorBoundary(<HooksIntro />)} />
    <Route path="useState" element={wrapInErrorBoundary(<UseState />)} />
    <Route path="useEffect" element={wrapInErrorBoundary(<UseEffect />)} />
    <Route path="useContext" element={wrapInErrorBoundary(<UseContext />)} />
    <Route path="useRef" element={wrapInErrorBoundary(<UseRef />)} />
    <Route path="useReducer" element={wrapInErrorBoundary(<UseReducer />)} />
    <Route path="useCallback" element={wrapInErrorBoundary(<UseCallback />)} />
    <Route path="useMemo" element={wrapInErrorBoundary(<UseMemo />)} />
    <Route path="custom-hooks" element={wrapInErrorBoundary(<CustomHooks />)} />

    {/* Component Patterns */}
    <Route path="class-components" element={wrapInErrorBoundary(<ClassComponents />)} />
    <Route path="functional-components" element={wrapInErrorBoundary(<FunctionalComponents />)} />
    <Route path="higher-order-components" element={wrapInErrorBoundary(<HOC />)} />
    <Route path="render-props" element={wrapInErrorBoundary(<RenderProps />)} />
    <Route path="composition" element={wrapInErrorBoundary(<Composition />)} />
    <Route path="error-boundaries" element={wrapInErrorBoundary(<ErrorBoundaries />)} />
    <Route path="code-splitting" element={wrapInErrorBoundary(<CodeSplitting />)} />

    {/* Add routes for all other sections following the same pattern */}
  </Route>
);

export default routes; 