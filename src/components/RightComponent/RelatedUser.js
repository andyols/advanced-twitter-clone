import React from 'react'

const RelatedUser = ({
  username,
  handle,
  handleFollowClick,
  id,
  userIsFollowing
}) => {
  return (
    <li className="collection-item avatar">
      <i className="circle">
        <i className="fas fa-user" />
      </i>
      <span className="title">{username}</span>
      <p>{handle}</p>
      {(!userIsFollowing && (
        <a
          href="#!"
          className="secondary-content waves-effect waves-light btn-small blue"
          onClick={() => handleFollowClick(id)}
        >
          Follow
        </a>
      )) || (
        <a
          href="#!"
          className="secondary-content waves-effect waves-light btn-small green"
          onClick={() => handleFollowClick(id)}
        >
          Following
        </a>
      )}
    </li>
  )
}

export default RelatedUser
