import React from 'react'
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';


export default function About() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
  )
}
