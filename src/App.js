import React from 'react'
import './App.css'
import useWebAnimations from "@wellyshen/use-web-animations";
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';



function App() {

  return (

    <div className="app">

      <Main />
      <About />
      <Services />
      
    </div>

  )
}

export default App