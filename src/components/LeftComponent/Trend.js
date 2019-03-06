import React from 'react'

const Trend = ({ title, tweetCount }) => {
  return (
    <li className="collection-item">
      <a href="#">
        <span className="blue-text">{title}</span>
      </a>
      <br />
      <span className="grey-text">{tweetCount + ' Tweets'}</span>
    </li>
  )
}

export default Trend
