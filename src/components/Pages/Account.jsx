import React from 'react'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className=' text-2xl font-bold py-4'>Account</h1>

      <p>User Email:</p>
      <Link to={'/'}><button className='border px-6 py-2 my-4 bg-blue-500 text-white'>Log Out</button></Link>
      </div>
  )
}

export default Account