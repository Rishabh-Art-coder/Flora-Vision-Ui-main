import { useState } from 'react'

import './App.css'
import Home from './pages/Home';

import background from './assets/background.jpg';
function App() {


  return (
    <>
     <Home
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "2000px"
          // minHeight: "1000px"
        }}
      />
    </>
  )
}

export default App
