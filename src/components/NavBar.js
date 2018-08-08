import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add'>
            New Pool
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard'>
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
