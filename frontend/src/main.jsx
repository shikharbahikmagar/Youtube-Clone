import { StrictMode } from 'react';
import { createRoot }  from 'react-dom/client';
import { Provider } from 'react-redux';
import {RouterProvider} from 'react-router-dom'
import Modal from 'react-modal';
import store from './store/store';
import router from './routes';
import './index.css';

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