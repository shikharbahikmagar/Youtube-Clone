import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SimpleLayout from './SimpleLayout';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  // createRoutesFromElements(
  //   <Route path="/" element={<App/>} >
  //     <Route path="" element={<Home/>} />
  //     <Route path="/about" element={<Home />} />
  //   </Route>,
  //   <Route path="/login" element={<SimpleLayout />}>
  //     <Route index element={<Login />} />
  //   </Route>
  // )
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <Home />
      }
    ]
  },
  {
    path: "login",
    element: <SimpleLayout />,
    children: [
      {
        path: "",
        element: <Login />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
