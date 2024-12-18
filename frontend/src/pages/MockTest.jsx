import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar&footer/NavBar';
import Footer from '../components/navbar&footer/Footer';
import SearchAndFilter from '../components/common/SearchAndFilter';
import { FaClock, FaQuestionCircle, FaTrophy, FaChartLine } from 'react-icons/fa';

const MockTest = () => {
  // Mock data - replace with API calls later
  const mockTests = [
    {
      id: 1,
      title: 'Full Mock Test - RCSC 2024',
      subject: { id: 1, name: 'General Knowledge' },
      category: { id: 1, name: 'Full Test' },
      duration: 180,
      questions: 100,
      difficulty: 'Hard',
      lastScore: '85%',
      averageScore: '78%',
      attempts: 245,
      description: 'Complete mock test following the latest RCSC exam pattern.',
    },
    {
      id: 2,
      title: 'Section-wise Mock - Logical Reasoning',
      subject: { id: 2, name: 'Logical Reasoning' },
      category: { id: 2, name: 'Section Test' },
      duration: 60,
      questions: 30,
      difficulty: 'Medium',
      lastScore: '90%',
      averageScore: '82%',
      attempts: 178,
      description: 'Focus on logical reasoning section with detailed solutions.',
    },
    // Add more mock tests...
  ];

  const subjects = [
    { id: 1, name: 'General Knowledge' },
    { id: 2, name: 'Logical Reasoning' },
    { id: 3, name: 'English' },
    { id: 4, name: 'Dzongkha' },
  ];

  const categories = [
    { id: 1, name: 'Full Test' },
    { id: 2, name: 'Section Test' },
    { id: 3, name: 'Chapter Test' },
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

  const handleStartTest = (testId) => {
    // Implement test start functionality
    console.log('Starting mock test:', testId);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'medium':
        return 'warning';
      case 'hard':
        return 'danger';
      default:
        return 'secondary';
    }
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

  return (
    <>
      <NavBar />
      <div className="container py-5" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Mock Tests</h1>
        
        <SearchAndFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          subjects={subjects}
          categories={categories}
        />

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {filteredTests.map(test => (
            <div key={test.id} className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title mb-0">{test.title}</h5>
                    <span className={`badge bg-${getDifficultyColor(test.difficulty)}`}>
                      {test.difficulty}
                    </span>
                  </div>
                  
                  <p className="card-text">
                    <small className="text-muted">
                      Subject: {test.subject.name}<br />
                      Category: {test.category.name}
                    </small>
                  </p>
                  
                  <p className="card-text">{test.description}</p>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <FaClock className="text-muted me-1" />
                      <small className="text-muted">{test.duration} mins</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaQuestionCircle className="text-muted me-1" />
                      <small className="text-muted">{test.questions} questions</small>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <FaTrophy className="text-warning me-1" />
                      <small>Last Score: {test.lastScore}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaChartLine className="text-primary me-1" />
                      <small>Avg. Score: {test.averageScore}</small>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{test.attempts} attempts</small>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleStartTest(test.id)}
                    >
                      Start Test
                    </button>
                  </div>
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

export default MockTest;
