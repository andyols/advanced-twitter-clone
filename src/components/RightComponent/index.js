import React from 'react'
import './rightComponent.css'
import RelatedUser from './RelatedUser'

const RightComponent = () => {
  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection">
          <RelatedUser />
          <RelatedUser />
          <RelatedUser />
          <RelatedUser />
          <RelatedUser />
        </ul>
      </div>
    </div>
  )
}

export default RightComponent
