import React, { Component } from 'react'

class Search extends Component {
  state = {
    value: ''
  }

  handleChange = e => this.setState({ value: e.target.value })

  render() {
    return (
      <ul className="right">
        <li className="search">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="text"
                placeholder="Search Twitter"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </li>
        <li>
          <a className="waves-effect waves-light btn btn-floating grey darken-1">
            AO
          </a>
        </li>
        <li>
          <a className="waves-effect waves-light btn blue lighten-1 btn-tweet">
            Tweet
          </a>
        </li>
      </ul>
    )
  }
}

export default Search
