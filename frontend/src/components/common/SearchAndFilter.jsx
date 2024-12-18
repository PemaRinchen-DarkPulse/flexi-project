import React from 'react';

const SearchAndFilter = ({ onSearch, onFilterChange, subjects, categories }) => {
  return (
    <div className="bg-light p-4 rounded-3 shadow-sm mb-4">
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <input
            type="search"
            className="form-control"
            placeholder="Search tests..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-3">
          <select
            className="form-select"
            onChange={(e) => onFilterChange('subject', e.target.value)}
          >
            <option value="">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select
            className="form-select"
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
