import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage'
import IntroCard from './Pages/Card_1'
import React from 'react';
import './App.css'

function App() {
   const [step, setStep] = useState(1);

  return (

   <>
   <Home />
   </>

  )
}

export default App;