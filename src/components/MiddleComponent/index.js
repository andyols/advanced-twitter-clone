import React from 'react'
import './middleComponent.css'
import Tweet from './Tweet'

const MiddleComponent = () => {
  return (
    <div className="card-panel grey lighten-3">
      <div className="row">
        <div className="col s12">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    </div>
  )
}

export default MiddleComponent
