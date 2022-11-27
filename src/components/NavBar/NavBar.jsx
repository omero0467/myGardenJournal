import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div className='Nav'>
        <div className='logo'>Some Logo</div>
        <div className='nav_heading'> My Garden Journal</div>
        <ul className='navigation_menu'>
            <NavLink className={'nav_link'} activeClassName={'active'} to='/' >Home</NavLink>
            <NavLink className={'nav_link'} activeClassName={'active'} to='/' >About</NavLink>
        </ul>
    </div>
  )
}

export default NavBar