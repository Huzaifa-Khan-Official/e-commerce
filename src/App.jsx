import './App.css';
import AllProducts from './Components/AllProducts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Data } from './Context/Context';
import { useState } from 'react';
import ProductDetail from './Components/ProductDetail';

function App() {
  const token = sessionStorage.getItem('token');
  const [data, setData] = useState([]);

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
      path: "products/:productId",
      element: <ProductDetail />
    },
    {
      path: "signup",
      element: <Signup />
    }
  ]);

  return (
    <div className="App px-4">
      <Data.Provider value={{data, setData}}>
        <RouterProvider router={router} />
      </Data.Provider>
    </div>
  );
}

export default App;
