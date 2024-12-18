import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar&footer/NavBar';
import Footer from '../components/navbar&footer/Footer';
import SearchAndFilter from '../components/common/SearchAndFilter';
import { FaPlay, FaClock, FaUser } from 'react-icons/fa';

const VideoLecture = () => {
  // Mock data - replace with API calls later
  const mockLectures = [
    {
      id: 1,
      title: 'Introduction to Algebra',
      subject: { id: 1, name: 'Mathematics' },
      category: { id: 1, name: 'Algebra' },
      duration: 45,
      instructor: 'Dr. John Smith',
      thumbnail: 'https://placehold.co/600x400',
      description: 'Learn the fundamentals of algebra with clear examples.',
    },
    {
      id: 2,
      title: 'Newton\'s Laws of Motion',
      subject: { id: 2, name: 'Physics' },
      category: { id: 2, name: 'Mechanics' },
      duration: 60,
      instructor: 'Dr. Sarah Johnson',
      thumbnail: 'https://placehold.co/600x400',
      description: 'Comprehensive coverage of Newton\'s three laws of motion.',
    },
    // Add more mock lectures...
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

  const [lectures, setLectures] = useState(mockLectures);
  const [filteredLectures, setFilteredLectures] = useState(mockLectures);
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

  const handleWatchLecture = (lectureId) => {
    // Implement video player functionality
    console.log('Watching lecture:', lectureId);
  };

  useEffect(() => {
    let result = lectures;

    if (filters.search) {
      result = result.filter(lecture =>
        lecture.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.subject) {
      result = result.filter(lecture => lecture.subject.id === parseInt(filters.subject));
    }

    if (filters.category) {
      result = result.filter(lecture => lecture.category.id === parseInt(filters.category));
    }

    setFilteredLectures(result);
  }, [filters, lectures]);

  return (
    <>
      <NavBar />
      <div className="container py-5" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Video Lectures</h1>
        
        <SearchAndFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          subjects={subjects}
          categories={categories}
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredLectures.map(lecture => (
            <div key={lecture.id} className="col">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={lecture.thumbnail}
                    className="card-img-top"
                    alt={lecture.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div 
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleWatchLecture(lecture.id)}
                  >
                    <div className="bg-white rounded-circle p-3 shadow">
                      <FaPlay className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{lecture.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Subject: {lecture.subject.name}<br />
                      Category: {lecture.category.name}
                    </small>
                  </p>
                  <p className="card-text">{lecture.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <FaClock className="text-muted me-1" />
                      <small className="text-muted">{lecture.duration} mins</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaUser className="text-muted me-1" />
                      <small className="text-muted">{lecture.instructor}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLectures.length === 0 && (
          <div className="text-center py-5">
            <h3>No lectures found</h3>
            <p className="text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VideoLecture;
