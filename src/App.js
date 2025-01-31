import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoringaTwo from './pages/coringatwo/coringatwo';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coringatwo' element={<CoringaTwo/>} />
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
