import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore-courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="d-flex justify-content-center mx-auto mb-2 mb-lg-0" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for Courses"
        aria-label="Search"
        style={{ width: "350px" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
