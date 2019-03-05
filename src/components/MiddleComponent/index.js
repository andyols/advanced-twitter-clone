import React from 'react'
import './middleComponent.css'
import Tweet from './Tweet'
import TweetBar from './TweetBar'

const MiddleComponent = () => {
  return (
    <div className="row">
      <div className="col s12">
        <TweetBar />
        <ul className="collection">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </ul>
      </div>
    </div>
  )
}

export default MiddleComponent
