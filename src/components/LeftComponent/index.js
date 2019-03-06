import React, { Component } from 'react'
import './leftComponent.css'
import Trends from './Trends'
import UserCard from './UserCard'

const MIN = 5000,
  MAX = 10000

class LeftComponent extends Component {
  state = {
    trends: [
      {
        title: '#Trend',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend1',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend2',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend3',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend4',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend5',
        tweetCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        title: '#Trend6',
        tweetCount: Math.floor(Math.random() * (10000 - 5000)) + 5000
      }
    ]
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 user-card">
            <UserCard />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Trends trends={this.state.trends} />
          </div>
        </div>
      </div>
    )
  }
}

export default LeftComponent
