import React from 'react'
import Home from 'jsonfig.json/src/pages/Home'
import CanvasModel from '../src/canvas/CanvasModel'
import Customizer from '../src/pages/Customizer'
import Header from 'jsonfig.json/components/Header'
import Footer from 'jsonfig.json/components/Footer'
const Costumize = () => {
  return (
    <main className="app transition-all ease-in">
      <Header/>
      <Home />
      <CanvasModel />
      <Customizer />
      <Footer/>
    </main>
  )
}

export default Costumize