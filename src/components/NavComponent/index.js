import React from 'react'
import './NavComponent.css'
import Links from './Links'
import Logo from './Logo'
import Search from './Search'

const NavComponent = () => {
  return (
    <div className="nav-container">
      <Links />
      <Logo />
      <Search />
    </div>
  )
}

export default NavComponent
