
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

import Footer from './components/Footer.js';
import RouterPage from './Router/RouterPage';
import {BrowserRouter} from 'react-router-dom';
import './App.css';


function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Nav/>
          <RouterPage />  
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
