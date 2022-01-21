import React from 'react';
import Cart from '../page/Cart';
import Login from '../page/Login';
import BrandProduct from '../page/BrandProduct';
import Company from '../page/Company';
import News from '../page/News';
import Event from '../page/Event';
import Recruitment from '../page/Recruitment';
import PageError from '../page/PageError'
import Home from '../page/Home/Home';
import { Routes, Route } from 'react-router-dom';

function RouterPage() {
  return (
    <Routes>
      <Route  path="/"            element={<Home />} /> 
      <Route  path="Login"        element={<Login />} />
      <Route  path="Cart"         element={<Cart />} />
      <Route  path="BrandProduct" element={<BrandProduct />} />
      <Route  path="Company"      element={<Company />} />
      <Route  path="News"         element={<News />} />
      <Route  path="Event"        element={<Event />} />
      <Route  path="Recruitment"  element={<Recruitment />} />
      <Route  path="/*"           element={<PageError />} />
    </Routes>
  )
}

export default RouterPage
