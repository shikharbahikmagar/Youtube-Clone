import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SimpleLayout from './SimpleLayout';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Feed from './components/Home/Feed.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux';
import store from './store/store';
import Watch from './pages/Watch.jsx';

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
        element: <Feed />
      },
      {
        path: "about",
        element: <Feed />
      },
      {
        path: "watch/:id",
        element: <Watch />
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
