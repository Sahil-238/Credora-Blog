import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import CSSCourse from './CSSCourse';

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

// Basics
import Introduction from './chapters/basics/Introduction';
import Syntax from './chapters/basics/Syntax';
import Selectors from './chapters/basics/Selectors';
import Colors from './chapters/basics/Colors';
import Backgrounds from './chapters/basics/Backgrounds';
import Borders from './chapters/basics/Borders';
import Margins from './chapters/basics/Margins';
import Padding from './chapters/basics/Padding';
import BoxModel from './chapters/basics/BoxModel';

// Text & Typography
import Text from './chapters/text/Text';
import Fonts from './chapters/text/Fonts';
import Icons from './chapters/text/Icons';
import Links from './chapters/text/Links';
import Lists from './chapters/text/Lists';
import Tables from './chapters/text/Tables';
import Typography from './chapters/text/Typography';

// Layout
import Display from './chapters/layout/Display';
import Position from './chapters/layout/Position';
import ZIndex from './chapters/layout/ZIndex';
import Overflow from './chapters/layout/Overflow';
import Float from './chapters/layout/Float';

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
import RWDIntro from './chapters/responsive/RwdIntro';
import RWDViewport from './chapters/responsive/RwdViewport';
import RWDGridView from './chapters/responsive/RwdGridView';
import RWDMediaQueries from './chapters/responsive/RwdMediaQueries';
import RWDImages from './chapters/responsive/RwdImages';
import RWDVideos from './chapters/responsive/RwdVideos';
import RWDFrameworks from './chapters/responsive/RwdFrameworks';

// Lazy loaded components
const MaxWidth = React.lazy(() => import('./chapters/layout/max-width'));
const Align = React.lazy(() => import('./chapters/layout/Align'));

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
    <Route path="colors" element={<Colors />} />
    <Route path="backgrounds" element={<Backgrounds />} />
    <Route path="borders" element={<Borders />} />
    <Route path="margins" element={<Margins />} />
    <Route path="padding" element={<Padding />} />
    <Route path="box-model" element={<BoxModel />} />
    <Route path="text" element={<Text />} />
    <Route path="fonts" element={<Fonts />} />
    <Route path="icons" element={<Icons />} />
    <Route path="links" element={<Links />} />
    <Route path="lists" element={<Lists />} />
    <Route path="tables" element={<Tables />} />
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

    {/* Responsive Design */}
    <Route path="rwd-intro" element={<RWDIntro />} />
    <Route path="rwd-viewport" element={<RWDViewport />} />
    <Route path="rwd-grid-view" element={<RWDGridView />} />
    <Route path="rwd-media-queries" element={<RWDMediaQueries />} />
    <Route path="rwd-images" element={<RWDImages />} />
    <Route path="rwd-videos" element={<RWDVideos />} />
    <Route path="rwd-frameworks" element={<RWDFrameworks />} />
  </Route>
);

export default routes; 