import React from 'react'
import RelatedUser from './RelatedUser'

const WhoToFollow = () => {
  return (
    <ul className="collection">
      <li className="collection-header">
        <h4>Who To Follow</h4>
      </li>
      <RelatedUser />
    </ul>
  )
}

export default WhoToFollow
