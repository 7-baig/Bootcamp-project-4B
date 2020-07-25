import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import './App.css'
import useWebAnimations from "@wellyshen/use-web-animations";
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';



function App() {



  return (

    <div className="app">

      <Header />
      <MainSection />
      
    </div>

  )
}

export default App