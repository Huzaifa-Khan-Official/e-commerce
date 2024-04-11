import './App.css';
import AllProducts from './Components/AllProducts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {
  const token = sessionStorage.getItem('token');

  const router = createBrowserRouter([
    {
      path: !token ? "/" : "products",
      element: !token ? < Login /> : <AllProducts />,
    },
    {
      path: "/",
      element: <Login />
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
    <div className="App px-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
