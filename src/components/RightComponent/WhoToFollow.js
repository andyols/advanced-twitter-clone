import React from 'react'
import RelatedUser from './RelatedUser'

const WhoToFollow = ({ relatedUsers, handleFollowClick }) => {
  return (
    <ul className="collection">
      <li className="collection-header collection-item">
        <h5>Who To Follow</h5>
      </li>
      {relatedUsers.map(user => (
        <RelatedUser
          username={user.username}
          handle={user.handle}
          handleFollowClick={handleFollowClick}
          userIsFollowing={user.userIsFollowing}
          id={user.id}
          key={user.id}
        />
      ))}
    </ul>
  )
}

export default WhoToFollow
