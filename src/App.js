import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import CountDown from './Components/CountDown';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <CountDown />
      <Footer/>
    </div>
  );
}

export default App;
