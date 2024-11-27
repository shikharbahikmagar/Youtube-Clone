import { createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import SimpleLayout from './SimpleLayout';
import LazyComponent from './components/LazyComponent.jsx';
import { Feed, Watch, Login, Logout} from './components/LazyComponent.jsx'


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

export default router