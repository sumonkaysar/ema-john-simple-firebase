import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import ProductsAndCartLoader from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [hiddenCart, setHiddenCart] = useState("cart-hidden");
  const toggleCart = (isHidden) => {
    if (isHidden === 'cart-hidden') {
      setHiddenCart("");
    }else{
      setHiddenCart("cart-hidden");
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <Main 
            hiddenCart={hiddenCart}
            toggleCart={toggleCart}
          />
        }
      >
        <Route 
          path='/'
          element={
            <Shop
              hiddenCart={hiddenCart}
              toggleCart={toggleCart}
            />
          }
          loader={() => fetch('products.json')}
        />
        <Route 
          path='/about'
          element={<About />}
        />
        <Route 
          path='/orders'
          element={
            <Orders
              hiddenCart={hiddenCart}
              toggleCart={toggleCart}
            />
          }
          loader={ProductsAndCartLoader}
        />
        <Route 
          path='/inventory'
          element={<Inventory />}
        />
        <Route 
          path='/login'
          element={<Login />}
        />
        <Route 
          path='/signup'
          element={<SignUp />}
        />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
