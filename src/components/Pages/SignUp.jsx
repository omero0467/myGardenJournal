import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth, } from '../../context/AuthContext'

function SignUp() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [sucsess, setSucsess] = useState('')

const {createUser} = UserAuth()
const navigate = useNavigate()

const handleSubmit =  async (e) =>{
  e.preventDefault()
  setError('')
  try {
    await createUser(email,password)
    setError('')
    setSucsess('All Good! 🤙🏽')
    setTimeout(()=>{
      setPassword('')
      setEmail('')
      navigate('/account');
      setSucsess('')
    },2000)
  } catch (error) {
    setError(error.message)
    console.log(error.message);
  }
}

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'> Sign up to your account</h1>
        <p className='py-2'> Already have an account? <Link className='italic' to={'/login'}>Sign in.</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className ='py-2 font-medium' htmlFor="email">Email Address</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-lg py-2 border border-blue-200 px-2 focus:border-blue-500' type="email" name="password"/>
          </div>
        <div className='flex flex-col py-2'>
          <label className ='py-2 font-medium' htmlFor="password">Password</label>
          <input value={password}  onChange={(e)=>setPassword(e.target.value)} className='rounded-lg py-2 border border-blue-200 px-2 focus:border-blue-500' type="password" name="password"/>
          </div>
          <button className='rounded-lg w-full bg-blue-600 p-3 my-2 text-white hover:bg-blue-500 border border-blue-500'>Sign Up</button>
          <span className='underline text-red-500'>{error&&error}</span>
          <span className='underline text-green-500'>{sucsess&&sucsess}</span>
      </form>
    </div>
  )
}

export default SignUp