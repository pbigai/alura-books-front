import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './rotas/home.tsx'
import GlobalStyle from './GlobalStyle.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/Header/index.tsx'
import Favoritos from './rotas/Favoritos.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favoritos' element={<Favoritos/>} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
