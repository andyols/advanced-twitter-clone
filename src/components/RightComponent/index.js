import React, { Component } from 'react'
import './rightComponent.css'
import WhoToFollow from './WhoToFollow'
import LiveVideo from './LiveVideo'

class RightComponent extends Component {
  state = {
    relatedUsers: [
      {
        id: 0,
        username: 'Barack Obama',
        handle: '@BarackObama',
        userIsFollowing: false
      },
      {
        id: 1,
        username: 'YouTube',
        handle: '@YouTube',
        userIsFollowing: false
      },
      {
        id: 2,
        username: 'Bill Gates',
        handle: '@BillGates',
        userIsFollowing: false
      },
      {
        id: 3,
        username: 'Donald J. Trump',
        handle: '@realDonaldTrump',
        userIsFollowing: false
      }
    ]
  }

  handleFollowClick = id => {
    this.setState(prevState => ({
      relatedUsers: prevState.relatedUsers.map(user => {
        return user.id === id && !user.userIsFollowing
          ? Object.assign(user, {
              userIsFollowing: true
            })
          : Object.assign(user, {
              userIsFollowing: false
            })
      })
    }))
  }

  render() {
    return (
      <div>
        <div className="row no-margin">
          <div className="col s12">
            <WhoToFollow
              relatedUsers={this.state.relatedUsers}
              handleFollowClick={this.handleFollowClick}
            />
          </div>
        </div>
        <div className="row no-margin">
          <div className="col s12">
            <LiveVideo />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="collection">
              <li className="collection-item">
                <p className="grey-text">
                  &copy; 2019 TwitterClone About Help Center Terms Privacy
                  Policy Cookies Ad Info
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default RightComponent
