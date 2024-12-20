import React from 'react'

const SearchForm = () => {
  return (
    <form className="d-flex justify-content-center mx-auto mb-2 mb-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "350px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
  )
}

export default SearchForm
