import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import CSSCourse from './CSSCourse';

// Basics
import Introduction from './chapters/basics/Introduction';
import Syntax from './chapters/basics/Syntax';
import Selectors from './chapters/basics/Selectors';
import HowTo from './chapters/basics/HowTo';
import Comments from './chapters/basics/Comments';
import Colors from './chapters/basics/Colors';
import BoxModel from './chapters/basics/BoxModel';
import Typography from './chapters/basics/Typography';

// Layout - Using lazy loading
const Display = React.lazy(() => import('./chapters/layout/Display'));
const MaxWidth = React.lazy(() => import('./chapters/layout/max-width'));
const Position = React.lazy(() => import('./chapters/layout/Position'));
const ZIndex = React.lazy(() => import('./chapters/layout/ZIndex'));
const Overflow = React.lazy(() => import('./chapters/layout/Overflow'));
const Float = React.lazy(() => import('./chapters/layout/Float'));
const Align = React.lazy(() => import('./chapters/layout/Align'));

// Components
import Tooltips from './chapters/components/Tooltips';
import ImageStyling from './chapters/components/ImageStyling';
import ImageFilters from './chapters/components/ImageFilters';
import Buttons from './chapters/components/Buttons';
import Pagination from './chapters/components/Pagination';
import MultipleColumns from './chapters/components/MultipleColumns';
import UserInterface from './chapters/components/UserInterface';
import Variables from './chapters/components/Variables';
import BoxSizing from './chapters/components/BoxSizing';

// Flexbox
import FlexboxIntro from './chapters/flexbox/FlexboxIntro';
import FlexContainer from './chapters/flexbox/FlexContainer';
import FlexItems from './chapters/flexbox/FlexItems';
import FlexResponsive from './chapters/flexbox/FlexResponsive';

// Grid
import GridIntro from './chapters/grid/GridIntro';
import GridColumnsRows from './chapters/grid/GridColumnsRows';
import GridContainer from './chapters/grid/GridContainer';
import GridItem from './chapters/grid/GridItem';

// Responsive
import RwdIntro from './chapters/responsive/RWDIntro';
import RWDViewport from './chapters/responsive/RWDViewport';
import RWDGridView from './chapters/responsive/RWDGridView';
import RWDMediaQueries from './chapters/responsive/RWDMediaQueries';
import RWDImages from './chapters/responsive/RWDImages';
import RWDVideos from './chapters/responsive/RWDVideos';
import RWDFrameworks from './chapters/responsive/RWDFrameworks';

// Loading component
const LoadingComponent = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const routes = (
  <Route path="/css-course" element={<CSSCourse />}>
    {/* Basics */}
    <Route path="introduction" element={<Introduction />} />
    <Route path="syntax" element={<Syntax />} />
    <Route path="selectors" element={<Selectors />} />
    <Route path="how-to" element={<HowTo />} />
    <Route path="comments" element={<Comments />} />
    <Route path="colors" element={<Colors />} />
    <Route path="box-model" element={<BoxModel />} />
    <Route path="typography" element={<Typography />} />

    {/* Layout */}
    <Route path="display" element={
      <Suspense fallback={<LoadingComponent />}>
        <Display />
      </Suspense>
    } />
    <Route path="max-width" element={
      <Suspense fallback={<LoadingComponent />}>
        <MaxWidth />
      </Suspense>
    } />
    <Route path="position" element={
      <Suspense fallback={<LoadingComponent />}>
        <Position />
      </Suspense>
    } />
    <Route path="z-index" element={
      <Suspense fallback={<LoadingComponent />}>
        <ZIndex />
      </Suspense>
    } />
    <Route path="overflow" element={
      <Suspense fallback={<LoadingComponent />}>
        <Overflow />
      </Suspense>
    } />
    <Route path="float" element={
      <Suspense fallback={<LoadingComponent />}>
        <Float />
      </Suspense>
    } />
    <Route path="align" element={
      <Suspense fallback={<LoadingComponent />}>
        <Align />
      </Suspense>
    } />

    {/* Components */}
    <Route path="tooltips" element={<Tooltips />} />
    <Route path="image-styling" element={<ImageStyling />} />
    <Route path="image-filters" element={<ImageFilters />} />
    <Route path="buttons" element={<Buttons />} />
    <Route path="pagination" element={<Pagination />} />
    <Route path="multiple-columns" element={<MultipleColumns />} />
    <Route path="user-interface" element={<UserInterface />} />
    <Route path="variables" element={<Variables />} />
    <Route path="box-sizing" element={<BoxSizing />} />

    {/* Flexbox */}
    <Route path="flexbox-intro" element={<FlexboxIntro />} />
    <Route path="flex-container" element={<FlexContainer />} />
    <Route path="flex-items" element={<FlexItems />} />
    <Route path="flex-responsive" element={<FlexResponsive />} />

    {/* Grid */}
    <Route path="grid-intro" element={<GridIntro />} />
    <Route path="grid-columns-rows" element={<GridColumnsRows />} />
    <Route path="grid-container" element={<GridContainer />} />
    <Route path="grid-item" element={<GridItem />} />

    {/* Responsive */}
    <Route path="rwd-intro" element={<RwdIntro />} />
    <Route path="viewport" element={<RWDViewport />} />
    <Route path="grid-view" element={<RWDGridView />} />
    <Route path="media-queries" element={<RWDMediaQueries />} />
    <Route path="images" element={<RWDImages />} />
    <Route path="videos" element={<RWDVideos />} />
    <Route path="frameworks" element={<RWDFrameworks />} />
  </Route>
);

export default routes; 