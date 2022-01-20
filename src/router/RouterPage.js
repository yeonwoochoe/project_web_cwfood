import React from 'react';
import Cart from '../page/Cart';
import Login from '../page/Login';
import PageError from '../page/PageError'
import Home from '../page/Home/Home';
import { Routes, Route } from 'react-router-dom';

function RouterPage() {
  return (
    <Routes>
      <Route  path="/"     element={<Home />} /> 
      <Route  path="Cart"  element={<Cart />} />
      <Route  path="Login" element={<Login />} />
      <Route  path="/*"    element={<PageError />} />
    </Routes>
  )
}

export default RouterPage
