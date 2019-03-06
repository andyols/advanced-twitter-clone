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
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        userHearted: false,
        id: 0
      },
      {
        author: 'Steve Bill',
        authorHandle: '@stevebill11',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        userHearted: false,
        id: 1
      },
      {
        author: 'Bob Steve',
        authorHandle: '@bobsteve2',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        userHearted: false,
        id: 2
      },
      {
        author: 'Stevey Bob',
        authorHandle: '@steveybob3',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        userHearted: false,
        id: 3
      },
      {
        author: 'Bobby Bill',
        authorHandle: '@bobbybill80',
        heartCount: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        userHearted: false,
        id: 4
      }
    ]
  }

  handleHeartClick = id => {
    this.setState(prevState => ({
      tweets: prevState.tweets.map(tweet => {
        return tweet.id === id && !tweet.userHearted
          ? Object.assign(tweet, {
              heartCount: tweet.heartCount + 1,
              userHearted: !tweet.userHearted
            })
          : tweet.id === id && tweet.userHearted
          ? Object.assign(tweet, {
              heartCount: tweet.heartCount - 1,
              userHearted: !tweet.userHearted
            })
          : tweet
      })
    }))
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
                id={tweet.id}
                key={tweet.id}
                handleHeartClick={this.handleHeartClick}
                userHearted={tweet.userHearted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MiddleComponent
