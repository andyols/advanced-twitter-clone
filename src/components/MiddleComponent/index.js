import React, { Component } from 'react'
import './middleComponent.css'
import Tweet from './Tweet'
import TweetBar from './TweetBar'

const MIN = 0,
  MAX = 100

class MiddleComponent extends Component {
  state = {
    tweets: [
      {
        author: 'Billy Bob',
        authorHandle: '@billybob52',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        author: 'Steve Bill',
        authorHandle: '@stevebill11',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        author: 'Bob Steve',
        authorHandle: '@bobsteve2',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        author: 'Stevey Bob',
        authorHandle: '@steveybob3',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      },
      {
        author: 'Bobby Bill',
        authorHandle: '@bobbybill80',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN
      }
    ]
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <ul className="collection">
            <TweetBar />
            {this.state.tweets.map(tweet => (
              <Tweet
                author={tweet.author}
                authorHandle={tweet.authorHandle}
                heartCount={tweet.heartCount}
                key={tweet.author}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MiddleComponent
