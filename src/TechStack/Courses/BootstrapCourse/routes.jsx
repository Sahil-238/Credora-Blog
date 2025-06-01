import React from 'react';
import { Route } from 'react-router-dom';
import BootstrapCourse from './BootstrapCourse';

// Import all chapter components
import Intro from './chapters/basics/intro';
import GetStarted from './chapters/basics/get-started';
import Containers from './chapters/basics/containers';
import GridBasic from './chapters/basics/grid-basic';
import Typography from './chapters/basics/typography';
import Colors from './chapters/basics/colors';

import Tables from './chapters/components/tables';
import Images from './chapters/components/images';
import Jumbotron from './chapters/components/jumbotron';
import Alerts from './chapters/components/alerts';
import Buttons from './chapters/components/buttons';
import ButtonGroups from './chapters/components/button-groups';
import Badges from './chapters/components/badges';
import Progress from './chapters/components/progress';
import Spinners from './chapters/components/spinners';
import Pagination from './chapters/components/pagination';

import ListGroups from './chapters/layout/list-groups';
import Cards from './chapters/layout/cards';
import Dropdowns from './chapters/layout/dropdowns';
import Collapse from './chapters/layout/collapse';
import Navs from './chapters/layout/navs';
import Navbar from './chapters/layout/navbar';
import Carousel from './chapters/layout/carousel';

import Modal from './chapters/interactive/modal';
import Tooltip from './chapters/interactive/tooltip';
import Popover from './chapters/interactive/popover';
import Toast from './chapters/interactive/toast';
import Scrollspy from './chapters/interactive/scrollspy';
import Offcanvas from './chapters/interactive/offcanvas';

import FormsBasic from './chapters/forms/forms-basic';
import Select from './chapters/forms/select';
import ChecksRadios from './chapters/forms/checks-radios';
import Range from './chapters/forms/range';
import InputGroups from './chapters/forms/input-groups';
import FloatingLabels from './chapters/forms/floating-labels';
import Validation from './chapters/forms/validation';

import GridSystem from './chapters/grid/grid-system';
import GridStack from './chapters/grid/grid-stack';
import GridXs from './chapters/grid/grid-xs';
import GridSm from './chapters/grid/grid-sm';
import GridMd from './chapters/grid/grid-md';
import GridLg from './chapters/grid/grid-lg';
import GridXl from './chapters/grid/grid-xl';
import GridXxl from './chapters/grid/grid-xxl';
import GridExamples from './chapters/grid/grid-examples';

import Utilities from './chapters/utilities/utilities';
import DarkMode from './chapters/utilities/dark-mode';
import Flex from './chapters/utilities/flex';

import Template from './chapters/resources/template';
import Exercises from './chapters/resources/exercises';
import Quiz from './chapters/resources/quiz';
import Syllabus from './chapters/resources/syllabus';
import StudyPlan from './chapters/resources/study-plan';
import Interview from './chapters/resources/interview';
import Certificate from './chapters/resources/certificate';

const BootstrapRoutes = () => (
  <Route path="/bootstrap-course" element={<BootstrapCourse />}>
    {/* Basics */}
    <Route path="intro" element={<Intro />} />
    <Route path="get-started" element={<GetStarted />} />
    <Route path="containers" element={<Containers />} />
    <Route path="grid-basic" element={<GridBasic />} />
    <Route path="typography" element={<Typography />} />
    <Route path="colors" element={<Colors />} />

    {/* Components */}
    <Route path="tables" element={<Tables />} />
    <Route path="images" element={<Images />} />
    <Route path="jumbotron" element={<Jumbotron />} />
    <Route path="alerts" element={<Alerts />} />
    <Route path="buttons" element={<Buttons />} />
    <Route path="button-groups" element={<ButtonGroups />} />
    <Route path="badges" element={<Badges />} />
    <Route path="progress" element={<Progress />} />
    <Route path="spinners" element={<Spinners />} />
    <Route path="pagination" element={<Pagination />} />

    {/* Layout */}
    <Route path="list-groups" element={<ListGroups />} />
    <Route path="cards" element={<Cards />} />
    <Route path="dropdowns" element={<Dropdowns />} />
    <Route path="collapse" element={<Collapse />} />
    <Route path="navs" element={<Navs />} />
    <Route path="navbar" element={<Navbar />} />
    <Route path="carousel" element={<Carousel />} />

    {/* Interactive */}
    <Route path="modal" element={<Modal />} />
    <Route path="tooltip" element={<Tooltip />} />
    <Route path="popover" element={<Popover />} />
    <Route path="toast" element={<Toast />} />
    <Route path="scrollspy" element={<Scrollspy />} />
    <Route path="offcanvas" element={<Offcanvas />} />

    {/* Forms */}
    <Route path="forms-basic" element={<FormsBasic />} />
    <Route path="select" element={<Select />} />
    <Route path="checks-radios" element={<ChecksRadios />} />
    <Route path="range" element={<Range />} />
    <Route path="input-groups" element={<InputGroups />} />
    <Route path="floating-labels" element={<FloatingLabels />} />
    <Route path="validation" element={<Validation />} />

    {/* Grid System */}
    <Route path="grid-system" element={<GridSystem />} />
    <Route path="grid-stack" element={<GridStack />} />
    <Route path="grid-xs" element={<GridXs />} />
    <Route path="grid-sm" element={<GridSm />} />
    <Route path="grid-md" element={<GridMd />} />
    <Route path="grid-lg" element={<GridLg />} />
    <Route path="grid-xl" element={<GridXl />} />
    <Route path="grid-xxl" element={<GridXxl />} />
    <Route path="grid-examples" element={<GridExamples />} />

    {/* Utilities */}
    <Route path="utilities" element={<Utilities />} />
    <Route path="dark-mode" element={<DarkMode />} />
    <Route path="flex" element={<Flex />} />

    {/* Resources */}
    <Route path="template" element={<Template />} />
    <Route path="exercises" element={<Exercises />} />
    <Route path="quiz" element={<Quiz />} />
    <Route path="syllabus" element={<Syllabus />} />
    <Route path="study-plan" element={<StudyPlan />} />
    <Route path="interview" element={<Interview />} />
    <Route path="certificate" element={<Certificate />} />
  </Route>
);

export default BootstrapRoutes; 