import React from 'react'
import './App.css';
import { Route,Routes, } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/Pages/LoginPage';
function App() {
  return (
  <>
  <NavBar />
    <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/login' element={<LoginPage />}/>
   </Routes>
  </>
  )
}

export default App