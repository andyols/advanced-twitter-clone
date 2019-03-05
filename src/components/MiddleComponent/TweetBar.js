import React from 'react'

const TweetBar = () => {
  return (
    <form>
      <div className="input-field">
        <i className="circle prefix">
          <i className="fas fa-user-circle" />
        </i>
        <input id="icon_prefix" type="text" class="validate" />
      </div>
    </form>
  )
}

export default TweetBar
