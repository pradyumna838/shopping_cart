import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Main/Layout';
import Login from './components/Main/Login';
import Register from "./components/Main/Register";
import Home from "./components/Home/Home";
import Header from './components/Main/Home/Header';
import Footer from './components/Main/Home/Footer';
import Product from "./components/Products/Product"
import Cart from './components/Cart/Cart';
import {CartProvider} from "react-use-cart";


function RequireAuth({ children }) {
  const user = JSON.parse(sessionStorage.getItem('user'));
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (user) {
  }
  return children;
}

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    user ? setAuthenticated(true) : setAuthenticated(false);
  }, []);

  return (
    <div>
      {/* <CartProvider>
<Routes>
        {!authenticated && <Route path="/login" element={<Login />} />}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          
        
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
         
        </Route>
       
        <Route
          path="*"
          element={<Navigate to={authenticated ? '/' : '/login'} />}
        />
      </Routes>
      </CartProvider> */}
      <CartProvider>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/home" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
