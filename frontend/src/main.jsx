import React, { Suspense } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import store from './store/store';
import App from './App.jsx';
import SimpleLayout from './SimpleLayout';
import './index.css';

// Lazy load all route components
const Feed = React.lazy(() => import('./components/Home/Feed.jsx'));
const Watch = React.lazy(() => import('./pages/Watch.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const Logout = React.lazy(() => import('./pages/Logout.jsx'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen mt-60">
    <div className="text-lg text-green-400 z-999">Loading...</div>
  </div>
);

// Wrapper component to add Suspense
const LazyComponent = ({ component: Component }) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LazyComponent component={Feed} />
      },
      {
        path: "watch/:id",
        element: <LazyComponent component={Watch} />
      }
    ]
  },
  {
    path: "login",
    element: <SimpleLayout />,
    children: [
      {
        path: "",
        element: <LazyComponent component={Login} />
      }
    ]
  },
  {
    path: "logout",
    element: <LazyComponent component={Logout} />
  }
]);

// Set Modal app element
Modal.setAppElement('#root');

// Create and render root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);