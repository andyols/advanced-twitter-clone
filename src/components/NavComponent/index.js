import React from 'react'
import './navComponent.css'

const NavComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper grey lighten-3">
        <a href="#" className="brand-logo center blue-text text-lighten-1">
          <i className="fab fa-twitter" />
        </a>
        <ul id="nav-mobile" className="left">
          <li className="active">
            <a href="#" className="grey-text text-darken-2">
              <i className="fas fa-home left" />
              <span className="nav-link">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="grey-text text-darken-2">
              <i className="fas fa-bolt left" />
              <span className="nav-link">Moments</span>
            </a>
          </li>
          <li>
            <a href="#" className="grey-text text-darken-2">
              <i className="fas fa-bell left" />
              <span className="nav-link">Notifications</span>
            </a>
          </li>
          <li>
            <a href="#" className="grey-text text-darken-2">
              <i className="fas fa-envelope left" />
              <span className="nav-link">Messages</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavComponent
