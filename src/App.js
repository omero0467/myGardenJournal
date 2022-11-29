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
import PlantsApiContext from './context/PlantsApiContext';
import { userInputs } from './InputFields';


function App() {
  return (
  <>  
  <NavBar />  
  <AuthContext>
    <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/mygarden' element={<ProtectedRoute> <MyGarden /> </ProtectedRoute>}/>
    <Route path='/garden' element={<ProtectedRoute><PlantsApiContext> <Garden /> </PlantsApiContext></ProtectedRoute>}/>
    <Route path='/signup' element={<SignUp inputs={userInputs} />}/>
    <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
   </Routes>
  </AuthContext>
  </>
  )
}

export default App