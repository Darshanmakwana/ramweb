import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Secnav from './Components/Secnav'
import Contect from './Pages/Contect'

const App = () => {
  return (
    <>
    <Navbar/>
    <Secnav/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/contect' element={<Contect/>}/>
     </Routes>
      
    </>
  )
}

export default App
