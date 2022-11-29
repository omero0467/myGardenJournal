import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Card from '../../global components/Card'

function Landing() {

  const {user}=UserAuth()
  return (
    <div className='landing page font-sans'>
    <Card>
      <div className='welcome_message message'>Hello {user&&user.email},<br/> Welcome <br/> to Your Garden Journal</div>
   {!user&& <Link className={'link-reset'} to={'/login'}>
      <div className='mt-4 btn btn_log_in'>Click here to Log in</div>
    </Link>}
    </Card>
    </div >
  )
}

export default Landing