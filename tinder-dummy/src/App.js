import React from 'react';
import './App.css';
import Header from './Header';
import PetCards from './PetCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <PetCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
