import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import ShopContextProvider from './context/ShopContextProvider';

function App() {

  return (
    <div className='app-container'>
      <ShopContextProvider>
      <Router basename='/ecommerce-app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
