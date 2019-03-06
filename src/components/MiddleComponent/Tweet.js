import React from 'react'

const Tweet = ({
  author,
  authorHandle,
  heartCount,
  id,
  handleHeartClick,
  userHearted
}) => {
  return (
    <li className="collection-item avatar">
      <i className="circle">
        <i className="fas fa-user" />
      </i>
      <span className="title">
        {author} {authorHandle}
      </span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, vero
        ducimus!
      </p>
      <br />

      <a href="!#" className="grey-text tweet-btn">
        <i className="fas fa-reply" />
      </a>
      <a href="!#" className="grey-text tweet-btn">
        <i className="fas fa-retweet" />
      </a>
      <a
        href="!#"
        className={userHearted ? 'pink-text tweet-btn' : 'grey-text tweet-btn'}
        onClick={() => handleHeartClick(id)}
      >
        <i className="fas fa-heart" /> {heartCount}
      </a>
    </li>
  )
}

export default Tweet
