import './App.css';
import AllProducts from './Components/AllProducts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
  Router,
} from "react-router-dom";

function App() {
  const token = sessionStorage.getItem('token');

  const router = createBrowserRouter([
    {
      path: "/",
      element: !token ? < Login /> : <AllProducts />,
    },
    {
      path: "products",
      element: <AllProducts />
    },
    {
      path: "signup",
      element: <Signup />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
