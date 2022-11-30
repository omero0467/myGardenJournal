import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  //!ChangeLater //about
  return (
    <div className='Nav p-3 '>
        <div className='moto font-semibold text-green-800'> GARDEN SIMPLIFIED</div>
        <div className='text-emerald-600  font-bold text-3xl'> My Garden Journal</div>
        <ul className='navigation'>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/' >Home</NavLink>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/mygarden' >My Gardens</NavLink>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/account' >Account</NavLink>
        </ul>
    </div>
  )
}

export default NavBar