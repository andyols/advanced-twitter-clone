import React from 'react'

const RelatedUser = ({ username, handle }) => {
  return (
    <li className="collection-item avatar">
      <i className="circle">
        <i className="fas fa-user" />
      </i>
      <span className="title">{username}</span>
      <p>{handle}</p>
      <a
        href="#!"
        className="secondary-content waves-effect waves-light btn-small blue"
      >
        Follow
      </a>
    </li>
  )
}

export default RelatedUser
