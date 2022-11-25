import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../global components/Card'

function Landing() {
  return (
    <div className='landing page'>
    <Card>
      <div className='welcome_message message'>Hello _User_, Welcome to Your Garden Journal</div>
    </Card>
    <Link className={'link-reset'} to={'/login'}>
      <div className='btn btn_log_in'>Click here to Log in</div>
    </Link>
    </div >
  )
}

export default Landing