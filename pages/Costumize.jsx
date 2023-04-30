import React from 'react'
import Home from 'jsonfig.json/src/pages/Home'
import CanvasModel from '../src/canvas/CanvasModel'
import Customizer from '../src/pages/Customizer'
const Costumize = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default Costumize