import React from 'react'
import './navComponent.css'
import Links from './Links'
import Logo from './Logo'
import Search from './Search'

const NavComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper grey lighten-3">
        <Links />
        <Logo />
        <Search />
      </div>
    </nav>
  )
}

export default NavComponent
