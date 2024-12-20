import React from "react";
import NavBar from "../components/navbar&footer/NavBar";
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import Footer from "../components/navbar&footer/Footer";
import Calendar from "react-calendar";
import StreakCalendar from "../components/calender/StreakCalendar";
import { FaCalendarAlt, FaTasks, FaTrophy, FaChartLine, FaGraduationCap, FaBookReader } from "react-icons/fa";

const styles = {
  hover: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    }
  },
  customScrollbar: {
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
      '&:hover': {
        background: '#555',
      },
    },
  },
};

const Dashboard = () => {
  const streakData = {
    "2024-12-01": 3,
    "2024-12-02": 5,
    "2024-12-03": 7,
    "2024-12-07": 2,
    "2024-12-16": 4,
    "2024-12-19": 8,
  };

  const statistics = {
    enrolledCourses: 8,
    completedCourses: 5,
    currentStreak: 7,
    longestStreak: 14
  };
  const upcomingTasks = [
    { id: 1, title: "Complete Python Assignment", deadline: "2024-12-20", priority: "High" },
    { id: 2, title: "Review JavaScript Concepts", deadline: "2024-12-21", priority: "Medium" },
    { id: 3, title: "Practice React Components", deadline: "2024-12-22", priority: "High" },
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-danger';
      case 'medium':
        return 'text-warning';
      default:
        return 'text-success';
    }
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{ marginTop: "80px", background: "#f8f9fa" }}>
        <div className="row g-4 p-4">
          {/* Welcome Message and Stats Section */}
          <div className="col-12">
            <WelcomeMessage />
          </div>

          {/* Quick Stats Cards */}
          <div className="col-12">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="card border-0 shadow-sm" style={styles.hover}>
                  <div className="card-body d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
                    <div className="icon-wrapper bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <FaBookReader className="text-primary fs-2" />
                    </div>
                    <div>
                      <h6 className="mb-0 text-muted">Enrolled Courses</h6>
                      <h4 className="mb-0 fw-bold">{statistics.enrolledCourses}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm" style={styles.hover}>
                  <div className="card-body d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
                    <div className="icon-wrapper bg-success bg-opacity-10 p-3 rounded-circle me-3">
                      <FaGraduationCap className="text-success fs-2" />
                    </div>
                    <div>
                      <h6 className="mb-0 text-muted">Completed Courses</h6>
                      <h4 className="mb-0 fw-bold">{statistics.completedCourses}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm" style={styles.hover}>
                  <div className="card-body d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
                    <div className="icon-wrapper bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                      <FaTrophy className="text-warning fs-2" />
                    </div>
                    <div>
                      <h6 className="mb-0 text-muted">Current Streak</h6>
                      <h4 className="mb-0 fw-bold">{statistics.currentStreak} days</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm" style={styles.hover}>
                  <div className="card-body d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
                    <div className="icon-wrapper bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                      <FaCalendarAlt className="text-danger fs-2" />
                    </div>
                    <div>
                      <h6 className="mb-0 text-muted">Longest Streak</h6>
                      <h4 className="mb-0 fw-bold">{statistics.longestStreak} days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar and Tasks Section */}
          <div className="col-4">
            <div className="card border-0 shadow-sm" style={styles.hover}>
              <div className="card-body">
                <h5 className="card-title mb-4 fw-bold text-primary">
                  <FaCalendarAlt className="me-2" />
                  Activity Streak
                </h5>
                <div style={{ height: "350px", overflowY: "auto" }} className="custom-scrollbar">
                  <StreakCalendar year={new Date().getFullYear()} month={new Date().getMonth() + 1} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card border-0 shadow-sm" style={styles.hover}>
              <div className="card-body">
                <h5 className="card-title mb-4 fw-bold text-primary">
                  <FaTasks className="me-2" />
                  Upcoming Tasks
                </h5>
                <div className="upcoming-tasks custom-scrollbar" style={{ height: "350px", overflowY: "auto" }} >
                  {upcomingTasks.map(task => (
                    <div key={task.id} className="task-item p-3 mb-3 rounded" style={styles.hover}>
                      <h6 className="mb-2 fw-bold">{task.title}</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <FaCalendarAlt className="me-1" />
                          Due: {task.deadline}
                        </small>
                        <span className={`badge ${getPriorityColor(task.priority)} bg-opacity-75 px-3 py-2 rounded-pill`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
