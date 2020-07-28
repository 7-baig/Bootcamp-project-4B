import React from 'react'
import './App.css'
import useWebAnimations from "@wellyshen/use-web-animations";
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Advantages from './components/Advantages/Advantages';
import Solutions from './components/Solutions/Solutions';



function App() {

  return (

    <div className="app">

      <Main />
      <About />
      <Services />
      <Advantages />
      <Solutions />
      
    </div>

  )
}

export default App