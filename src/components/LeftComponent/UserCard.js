import React from 'react'

const UserCard = () => {
  return (
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">Username</span>
        <p>@username</p>
      </div>
      <div className="card-action">
        <a href="#" className="blue-text">
          Tweets
        </a>
        <a href="#" className="blue-text">
          Following
        </a>
        <a href="#" className="blue-text">
          Followers
        </a>
      </div>
    </div>
  )
}

export default UserCard
