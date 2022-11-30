import React from 'react'
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/Pages/LoginPage';
import MyGarden from './components/Pages/MyGarden';
import Garden from './components/Pages/Garden';
import SignUp from './components/Pages/SignUp';
import Account from './components/Pages/Account';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './global components/ProtectedRoute';
import PlantsApiContext from './context/PlantsApiContext';
// import UploadtoDB from './context/uploadtodb';
// import UploadTest from './context/UploadTest';




function App() {
  return (
  <>  
  <NavBar />  
  {/* <UploadtoDB /> */}
    {/* <PlantsApiContext><UploadtoDB/></PlantsApiContext> */}
  <AuthContext>
      <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/mygarden' element={<ProtectedRoute> <MyGarden /> </ProtectedRoute>}/>
    <Route path='/garden/:id' element={<ProtectedRoute><PlantsApiContext> <Garden /> </PlantsApiContext></ProtectedRoute>}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
   </Routes>
  </AuthContext>
  </>
  )
}

export default App