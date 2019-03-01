import React from 'react'

const Search = () => {
  return (
    <ul className="right">
      <li className="search">
        <form>
          <div className="input-field">
            <input id="search" type="text" placeholder="Search Twitter" />
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

export default Search
