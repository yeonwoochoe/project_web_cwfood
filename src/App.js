
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import NewArrival from './components/NewArrival';
import './App.css';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Section/>
      <NewArrival/>
    </div>
  );
}

export default App;
