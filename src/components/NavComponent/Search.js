import React from 'react'

const Search = () => {
  return (
    <ul className="right">
      <li>
        <form>
          <div className="input-field">
            <i className="fas fa-search prefix" />
            <input placeholder="Search Twitter" id="search" type="text" />
          </div>
        </form>
      </li>
    </ul>
  )
}

export default Search
