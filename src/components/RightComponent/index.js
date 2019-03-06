import React, { Component } from 'react'
import './rightComponent.css'
import WhoToFollow from './WhoToFollow'
import LiveVideo from './LiveVideo'

class RightComponent extends Component {
  state = {
    relatedUsers: [
      { username: 'Barack Obama', handle: '@BarackObama' },
      { username: 'YouTube', handle: '@YouTube' },
      { username: 'Bill Gates', handle: '@BillGates' },
      { username: 'Donald J. Trump', handle: '@realDonaldTrump' }
    ]
  }

  render() {
    return (
      <div>
        <div className="row no-margin">
          <div className="col s12">
            <WhoToFollow relatedUsers={this.state.relatedUsers} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <LiveVideo />
          </div>
        </div>
      </div>
    )
  }
}

export default RightComponent
