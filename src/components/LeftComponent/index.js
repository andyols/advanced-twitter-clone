import React from 'react'
import './leftComponent.css'
import Trends from './Trends'
import UserCard from './UserCard'

const LeftComponent = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <UserCard />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <Trends />
        </div>
      </div>
    </div>
  )
}

export default LeftComponent
