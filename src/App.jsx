import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Topheader from './Components/Topheader';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import About from './Components/about/about';
import Classes from './Components/Classes/Classes';
import TeachersPage from './Components/Teachers/TeachersPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Topheader />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/teachers" element={<TeachersPage/>}/>
          <Route path="/gallery" element={<h1>Gallery page</h1>}/>
          <Route path="/event" element={<h1>Event page</h1>}/>
          <Route path="/blog" element={<h1>Shop page</h1>}/>
          <Route path="/shop" element={<h1>Teachers page</h1>}/>
          <Route path="/contact" element={<h1>Contact page</h1>}/>
          <Route path="*" element={<h1>404 Page Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
