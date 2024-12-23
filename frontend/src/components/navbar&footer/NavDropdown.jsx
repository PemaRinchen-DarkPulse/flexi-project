import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavDropdown = () => {
  const navigate = useNavigate();
  
  const subjects = ["Math", "Science", "General Knowledge", "Dzongkha"];
  const examCategories = ["Preliminary", "Main Exam", "Viva"];

  const handleSubjectClick = (subject) => {
    navigate(`/explore-courses?subject=${encodeURIComponent(subject)}`);
  };

  const handleExamCategoryClick = (category) => {
    navigate(`/explore-courses?category=${encodeURIComponent(category)}`);
  };

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Explore
        </a>
        <ul className="dropdown-menu">
          <li>
            <h6 className="dropdown-header">Subjects</h6>
          </li>
          {subjects.map((subject) => (
            <li key={subject}>
              <button 
                className="dropdown-item" 
                onClick={() => handleSubjectClick(subject)}
              >
                {subject}
              </button>
            </li>
          ))}
          
          <li><hr className="dropdown-divider"/></li>
          
          <li>
            <h6 className="dropdown-header">Exam Categories</h6>
          </li>
          {examCategories.map((category) => (
            <li key={category}>
              <button 
                className="dropdown-item" 
                onClick={() => handleExamCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
          
          <li><hr className="dropdown-divider"/></li>
          
          <li>
            <Link className="dropdown-item" to="/explore-courses">
              All Courses
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavDropdown;
