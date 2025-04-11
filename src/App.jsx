import React, { useState } from 'react'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Cart from './Cart'
import Home from './Home'
import Menu from './Menu'

function App() {
  const [Cartarry, setCartarry] = useState([]);

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <div className='bg-success'>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/Menu' element={<Menu Cartarry={Cartarry} setCartarry={setCartarry}/>}/>
      <Route path='/Cart' element={<Cart Cartarry={Cartarry}/>}/>
    </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
