import React, { Suspense } from 'react';
import PropTypes from 'prop-types';


// Lazy load all route components
export const Feed = React.lazy(() => import('./Home/Feed'));
export const Watch = React.lazy(() => import('../pages/Watch'));
export const Login = React.lazy(() => import('../pages/Login.jsx'));
export const Logout = React.lazy(() => import('../pages/Logout.jsx'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen mt-60">
    <div className="text-lg text-green-400 z-999">Loading...</div>
  </div>
);

const LazyComponent = ({ component: Component }) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

// PropTypes validation
LazyComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LazyComponent;
