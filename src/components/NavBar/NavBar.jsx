import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  //!ChangeLater //about
  return (
    <div className='Nav'>
        <div className='logo'>Some Logo</div>
        <div className='nav_heading'> My Garden Journal</div>
        <ul className='navigation_menu'>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/' >Home</NavLink>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/Garden' >About</NavLink>
            <NavLink className={'nav_link'} activeclassname={'active'} to='/account' >Account</NavLink>
        </ul>
    </div>
  )
}

export default NavBar