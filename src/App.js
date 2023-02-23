import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Tecnologias from './pages/Tecnologias';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';


 function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/sobre' element={<About/>} />
        <Route path='/tecnologias' element={<Tecnologias/>} />
        <Route path='/projetos' element={<Projetos/>} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>
    </Router>
    
  )
}
export default App