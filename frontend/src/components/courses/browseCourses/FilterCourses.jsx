import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterCourses = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'all',
    level: 'all',
    priceRange: 'all'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filter-container bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaFilter className="text-blue-600 mr-2" />
        <h4 className="text-xl font-semibold m-0">Filter Courses</h4>
      </div>

      <div className="filter-group mb-4">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search courses..."
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={filters.searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          name="category"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="all">All Categories</option>
          <option value="preliminary">Preliminary</option>
          <option value="main">Main</option>
          <option value="technical">Technical</option>
        </select>
      </div>

      <div className="filter-group mb-4">
        <label className="block text-gray-700 mb-2">Level</label>
        <select
          name="level"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={filters.level}
          onChange={handleChange}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="block text-gray-700 mb-2">Price Range</label>
        <select
          name="priceRange"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={filters.priceRange}
          onChange={handleChange}
        >
          <option value="all">All Prices</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCourses;
