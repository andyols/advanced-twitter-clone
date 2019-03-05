import React from 'react'

const RelatedUser = () => {
  return (
    <li className="collection-item avatar">
      <i className="circle">
        <i className="fas fa-user" />
      </i>
      <span className="title">Username</span>
      <p>@username</p>
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
