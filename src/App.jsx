// import { useState } from 'react'
// import { Component } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './components/Cards.css'
import {Header} from './components/Header'
import { Data } from './components/Data'
import { Cards } from './components/Cards'
import { Rankings } from './components/Rankings'
// import { TestCard } from './components/TestCard.jsx'

const workingData = Data;

// const items = ["Milk", "Eggs", "Bread", "Cheese", "Butter"]
// const data = Data;
function App() {

  return (
    <>
      <Header />
      <Rankings data={workingData}/>
      <Cards items={workingData}/>
    </>
  )
}

export default App
