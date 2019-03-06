import React from 'react'
import Trend from './Trend'

const Trends = ({ trends }) => {
  return (
    <ul className="collection">
      <li className="collection-header collection-item">
        <h5>Trends</h5>
      </li>
      {trends.map(trend => (
        <Trend
          title={trend.title}
          tweetCount={trend.tweetCount}
          key={trend.tweetCount}
        />
      ))}
    </ul>
  )
}

export default Trends
