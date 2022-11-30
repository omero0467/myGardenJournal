import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Card from '../../global components/Card'

function Landing() {

  const {user, UserData }=UserAuth()
  return (
    <div className='landing font-sans'>
    <Card className={'container max-w-[600px] flex flex-col items-center bg-indigo-300'}>
      <h3 className='text-center p-10'>Hello <span className='font-bold text-emerald-900 capitalize'>{user&&UserData.displayName}</span>,<br/> Welcome <br/> to Your Garden Journal</h3>
      <img className='max-w-[400px]' src="/garden-of-life-logo-vector.svg" alt="" />
   {!user&& <Link className={'link-reset'} to={'/login'}>
      <div className='mt-4 btn btn_log_in'>Click here to Log in</div>
    </Link>}
    </Card>
    </div >
  )
}

export default Landing