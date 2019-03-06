import React from 'react'

const LiveVideo = () => {
  return (
    <ul className="collection">
      <li className="collection-header collection-item">
        <h5>Live Video</h5>
      </li>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/sBws8MSXN7A"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </ul>
  )
}

export default LiveVideo
