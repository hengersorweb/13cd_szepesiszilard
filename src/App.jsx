import React from "react"
import Home from "./oldalalk/Home"
import Ermesek from "./oldalalk/Ermesek"
import Mermesek from "./oldalalk/Mermesek"
import Navbar from "./Navbar"
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tachyons'

function App() {


  return (
    <>
      <div>
      <h1>Covid</h1>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Ermesek" element={<Ermesek/>}/>
          <Route path="/Mermesek" element={<Mermesek/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
