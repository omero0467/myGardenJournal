import React from 'react'
import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/Pages/LoginPage';
import MyGarden from './components/Pages/MyGarden';
import Garden from './components/Garden';
import SignUp from './components/Pages/SignUp';
import Account from './components/Pages/Account';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './global components/ProtectedRoute';

function App() {
  return (
  <>  
  <NavBar />  
  <AuthContext>
    <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/mygarden' element={<MyGarden />}/>
    <Route path='/garden' element={<Garden />}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
   </Routes>
  </AuthContext>
  </>
  )
}

export default App