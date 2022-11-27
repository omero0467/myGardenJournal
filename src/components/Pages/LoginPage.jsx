import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Card from '../../global components/Card'


function LoginPage() {
    const toMyGarden = useNavigate()
    function handleSubmit (event){
        console.log(event);
        if (event.key ==='Enter'){
            toMyGarden('/mygarden')
        }
    }
  return (
    <div className='login page flex-center'>
         <Card className='user_login '>
                <div className='user_image'>some img</div>
                <div className='max-w-[600px] mx-auto p-4'>
      <div>
        <h1 className='text-xl font-bold py-2'> Sign in to your account</h1>
        <p className='py-2'> Already have an account? <Link className='italic' to={'/signup'}>Sign up.</Link></p>
      </div>
      <form>
        <div className='flex flex-col py-2'>
          <label className ='py-2 font-medium' htmlFor="email">Email Address</label>
          <input className=' py-2 rounded-lg border border-blue-200 px-2 focus:border-blue-500' type="email" name="password"/>
          </div>
        <div className='flex flex-col py-2'>
          <label className =' py-2 font-medium' htmlFor="password">Password</label>
          <input className='rounded-lg py-2 border border-blue-200 px-2 focus:border-blue-500' type="password" name="password"/>
          </div>
          <button className='rounded-lg w-full bg-blue-600 p-3 my-2 text-white hover:bg-blue-500 border border-blue-500'>Sign in</button>
      </form>
    </div>
         </Card>
    </div>
  )
}

export default LoginPage