import React, { Component } from 'react'

class TweetBar extends Component {
  state = {
    value: ''
  }

  handleChange = e => this.setState({ value: e.target.value })

  render() {
    return (
      <li className="collection-header collection-item">
        <form>
          <div className="input-field">
            <i className="circle prefix">
              <i className="fas fa-user-circle" />
            </i>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </li>
    )
  }
}

export default TweetBar
