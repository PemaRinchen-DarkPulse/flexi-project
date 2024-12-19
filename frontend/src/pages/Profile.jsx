import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import { FaUserGraduate, FaBook, FaClock, FaMedal } from 'react-icons/fa';

const Profile = () => {
  // Mock data - replace with actual data from your backend
  const profileData = {
    name: "John Doe",
    email: "john@example.com",
    enrolledCourses: 3,
    completedCourses: 1,
    totalPracticeTests: 15,
    avgTestScore: 75,
    studyHours: 24,
    targetExam: "GATE CSE",
    recentActivities: [
      { id: 1, activity: "Completed Python Basics Module", date: "2 days ago" },
      { id: 2, activity: "Scored 85% in Mock Test #3", date: "5 days ago" },
      { id: 3, activity: "Started Data Structures Course", date: "1 week ago" }
    ],
    achievements: [
      { id: 1, title: "First Mock Test Complete", description: "Completed your first mock test" },
      { id: 2, title: "Quick Learner", description: "Completed 5 practice tests in a week" },
      { id: 3, title: "Perfect Score", description: "Scored 100% in a practice test" }
    ]
  };

  return (
    <Container className="py-4">
      {/* Profile Header */}
      <Card className="mb-4 p-4 shadow-sm">
        <Row>
          <Col md={3} className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-circle img-thumbnail mb-3"
              style={{ width: '150px', height: '150px' }}
            />
          </Col>
          <Col md={9}>
            <h2 className="mb-3">{profileData.name}</h2>
            <p className="text-muted mb-2">
              <strong>Email:</strong> {profileData.email}
            </p>
            <p className="text-muted mb-2">
              <strong>Target Exam:</strong> {profileData.targetExam}
            </p>
          </Col>
        </Row>
      </Card>

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm">
            <FaBook className="text-primary mb-2" size={24} />
            <h3>{profileData.enrolledCourses}</h3>
            <p className="text-muted mb-0">Enrolled Courses</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm">
            <FaUserGraduate className="text-success mb-2" size={24} />
            <h3>{profileData.completedCourses}</h3>
            <p className="text-muted mb-0">Completed Courses</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm">
            <FaClock className="text-warning mb-2" size={24} />
            <h3>{profileData.studyHours}h</h3>
            <p className="text-muted mb-0">Study Hours</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3 shadow-sm">
            <FaMedal className="text-info mb-2" size={24} />
            <h3>{profileData.avgTestScore}%</h3>
            <p className="text-muted mb-0">Avg Test Score</p>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity and Achievements */}
      <Row>
        <Col md={6}>
          <Card className="shadow-sm p-4 mb-4">
            <h4 className="mb-4">Recent Activity</h4>
            {profileData.recentActivities.map(activity => (
              <div key={activity.id} className="mb-3 border-bottom pb-2">
                <p className="mb-1">{activity.activity}</p>
                <small className="text-muted">{activity.date}</small>
              </div>
            ))}
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm p-4 mb-4">
            <h4 className="mb-4">Achievements</h4>
            {profileData.achievements.map(achievement => (
              <div key={achievement.id} className="mb-3 border-bottom pb-2">
                <p className="mb-1 fw-bold">{achievement.title}</p>
                <small className="text-muted">{achievement.description}</small>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
