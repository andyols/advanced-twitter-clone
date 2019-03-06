import React from 'react'
import RelatedUser from './RelatedUser'

const WhoToFollow = ({ relatedUsers }) => {
  return (
    <ul className="collection">
      <li className="collection-header collection-item">
        <h5>Who To Follow</h5>
      </li>
      {relatedUsers.map(user => (
        <RelatedUser
          username={user.username}
          handle={user.handle}
          key={user.username}
        />
      ))}
    </ul>
  )
}

export default WhoToFollow
