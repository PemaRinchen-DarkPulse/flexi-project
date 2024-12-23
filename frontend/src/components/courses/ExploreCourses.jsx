import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import NavBar from '../navbar&footer/NavBar';
import Footer from '../navbar&footer/Footer';

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "General Knowledge for RCSC",
    subject: "General Knowledge",
    peopleEnrolled: 1200,
    duration: "8 weeks",
    price: "Nu. 2500",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Current Affairs for RCSC",
    subject: "General Knowledge",
    peopleEnrolled: 1100,
    duration: "6 weeks",
    price: "Nu. 2200",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "History of Bhutan",
    subject: "General Knowledge",
    peopleEnrolled: 900,
    duration: "10 weeks",
    price: "Nu. 2700",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "English for General Knowledge",
    subject: "General Knowledge",
    peopleEnrolled: 1300,
    duration: "8 weeks",
    price: "Nu. 2500",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 5,
    title: "Introduction to Mathematics",
    subject: "Math",
    peopleEnrolled: 800,
    duration: "10 weeks",
    price: "Nu. 3000",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 6,
    title: "Advanced Calculus",
    subject: "Math",
    peopleEnrolled: 600,
    duration: "12 weeks",
    price: "Nu. 3500",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 7,
    title: "Linear Algebra",
    subject: "Math",
    peopleEnrolled: 1200,
    duration: "8 weeks",
    price: "Nu. 2800",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 8,
    title: "Mathematics for Engineers",
    subject: "Math",
    peopleEnrolled: 700,
    duration: "14 weeks",
    price: "Nu. 3300",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 9,
    title: "Basic Science for RCSC",
    subject: "Science",
    peopleEnrolled: 1500,
    duration: "6 weeks",
    price: "Nu. 2000",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 10,
    title: "Physics for RCSC",
    subject: "Science",
    peopleEnrolled: 1200,
    duration: "8 weeks",
    price: "Nu. 2500",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 11,
    title: "Chemistry for Beginners",
    subject: "Science",
    peopleEnrolled: 900,
    duration: "10 weeks",
    price: "Nu. 2700",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 12,
    title: "Biology for General Knowledge",
    subject: "Science",
    peopleEnrolled: 950,
    duration: "6 weeks",
    price: "Nu. 2300",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  {
    id: 13,
    title: "Biology for General Knowledge",
    subject: "Science",
    peopleEnrolled: 950,
    duration: "6 weeks",
    price: "Nu. 2300",
    image: "path-to-your-image.jpg", // Replace with actual image path
  },
  // Dzongkha - No data
];

const ExploreCourses = () => {
  const subjects = ["Math", "Science", "General Knowledge", "Dzongkha"];
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // Group courses by subject
  const groupedCourses = subjects.reduce((acc, subject) => {
    acc[subject] = coursesData.filter(course => course.subject === subject);
    return acc;
  }, {});

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    const subjectFilter = searchParams.get('subject');
    const categoryFilter = searchParams.get('category');

    if (searchQuery) {
      setIsFiltering(true);
      setFilterType('search');
      setFilterValue(searchQuery);
      const filtered = coursesData.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else if (subjectFilter) {
      setIsFiltering(true);
      setFilterType('subject');
      setFilterValue(subjectFilter);
      const filtered = coursesData.filter(course => 
        course.subject.toLowerCase() === subjectFilter.toLowerCase()
      );
      setSearchResults(filtered);
    } else if (categoryFilter) {
      setIsFiltering(true);
      setFilterType('category');
      setFilterValue(categoryFilter);
      const filtered = coursesData.filter(course => 
        course.examCategory?.toLowerCase() === categoryFilter.toLowerCase()
      );
      setSearchResults(filtered);
    } else {
      setIsFiltering(false);
      setFilterType('');
      setFilterValue('');
      setSearchResults([]);
    }
  }, [searchParams]);

  const getFilterTitle = () => {
    switch (filterType) {
      case 'search':
        return `Search Results for "${filterValue}"`;
      case 'subject':
        return `${filterValue} Courses`;
      case 'category':
        return `${filterValue} Courses`;
      default:
        return 'Results';
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar/>
      <div className="flex-grow-1">
        <div className="container" style={{marginTop:"80px"}}>
          {/* Filtered Results */}
          {isFiltering && (
            <div className="search-results mb-4">
              <h3>{getFilterTitle()}</h3>
              {searchResults.length > 0 ? (
                <div className="row">
                  {searchResults.map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="alert alert-info">
                  No courses found for this {filterType}.
                </div>
              )}
            </div>
          )}

          {/* Regular course listing (show only when not filtering) */}
          {!isFiltering && subjects.map((subject) => {
            if (groupedCourses[subject].length === 0) return null;

            return (
              <div key={subject} className="subject-section mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className='ms-2'>{subject}</h3>
                  <a href="#" className="text-dark me-2">See All</a>
                </div>
                <div className="row">
                  {groupedCourses[subject].slice(0, 3).map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ExploreCourses;
