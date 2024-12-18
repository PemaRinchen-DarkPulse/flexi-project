import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar&footer/NavBar';
import Footer from '../components/navbar&footer/Footer';
import SearchAndFilter from '../components/common/SearchAndFilter';

const PracticeTest = () => {
  // Mock data - replace with API calls later
  const mockTests = [
    {
      id: 1,
      title: 'Basic Mathematics Test',
      subject: { id: 1, name: 'Mathematics' },
      category: { id: 1, name: 'Algebra' },
      duration: 60,
      questions: 30,
      difficulty: 'Easy',
    },
    {
      id: 2,
      title: 'Advanced Physics Test',
      subject: { id: 2, name: 'Physics' },
      category: { id: 2, name: 'Mechanics' },
      duration: 90,
      questions: 45,
      difficulty: 'Hard',
    },
    // Add more mock tests...
  ];

  const subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
  ];

  const categories = [
    { id: 1, name: 'Algebra' },
    { id: 2, name: 'Mechanics' },
    { id: 3, name: 'Organic Chemistry' },
  ];

  const [tests, setTests] = useState(mockTests);
  const [filteredTests, setFilteredTests] = useState(mockTests);
  const [filters, setFilters] = useState({
    search: '',
    subject: '',
    category: '',
  });

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm }));
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  useEffect(() => {
    let result = tests;

    if (filters.search) {
      result = result.filter(test =>
        test.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.subject) {
      result = result.filter(test => test.subject.id === parseInt(filters.subject));
    }

    if (filters.category) {
      result = result.filter(test => test.category.id === parseInt(filters.category));
    }

    setFilteredTests(result);
  }, [filters, tests]);

  const handleStartTest = (testId) => {
    // Implement test start functionality
    console.log('Starting test:', testId);
  };

  return (
    <>
      <NavBar />
      <div className="container py-5" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Practice Tests</h1>
        
        <SearchAndFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          subjects={subjects}
          categories={categories}
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredTests.map(test => (
            <div key={test.id} className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{test.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Subject: {test.subject.name}<br />
                      Category: {test.category.name}
                    </small>
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">{test.difficulty}</span>
                    <small className="text-muted">{test.duration} mins</small>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">{test.questions} questions</small>
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleStartTest(test.id)}
                  >
                    Start Test
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-5">
            <h3>No tests found</h3>
            <p className="text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PracticeTest;
