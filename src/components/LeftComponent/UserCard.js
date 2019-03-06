import React, { Component } from 'react'

class UserCard extends Component {
  state = {
    username: 'Andy Olson',
    handle: '@andyols'
  }

  render() {
    const { username, handle } = this.state

    return (
      <div className="card white-text z-depth-0">
        <div className="card-content blue">
          <span className="card-title username">{username}</span>
          <p>{handle}</p>
        </div>
        <div className="card-action">
          <a href="#" className="blue-text">
            Tweets - 22
          </a>
          <a href="#" className="blue-text">
            Following - 151
          </a>
          <a href="#" className="blue-text">
            Followers - 87
          </a>
          <br />
        </div>
      </div>
    )
  }
}

export default UserCard
