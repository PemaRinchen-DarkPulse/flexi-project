import React from 'react';
import { Card, Row, Col, Progress } from 'reactstrap';
import { FaBookReader, FaClock, FaTrophy } from 'react-icons/fa';

const ProgressSummary = () => {
  // Mock data - replace with actual data from your backend
  const stats = {
    coursesProgress: 65,
    studyHours: 24,
    testScores: 78
  };

  return (
    <Row className="mb-4">
      <Col md={4}>
        <Card className="shadow-sm p-3">
          <div className="d-flex align-items-center mb-2">
            <FaBookReader className="text-primary me-2" size={20} />
            <h6 className="mb-0">Course Progress</h6>
          </div>
          <Progress value={stats.coursesProgress} className="mb-2" />
          <small className="text-muted">{stats.coursesProgress}% Complete</small>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="shadow-sm p-3">
          <div className="d-flex align-items-center mb-2">
            <FaClock className="text-warning me-2" size={20} />
            <h6 className="mb-0">Study Hours</h6>
          </div>
          <h3 className="mb-0">{stats.studyHours}h</h3>
          <small className="text-muted">This week</small>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="shadow-sm p-3">
          <div className="d-flex align-items-center mb-2">
            <FaTrophy className="text-success me-2" size={20} />
            <h6 className="mb-0">Average Score</h6>
          </div>
          <h3 className="mb-0">{stats.testScores}%</h3>
          <small className="text-muted">In practice tests</small>
        </Card>
      </Col>
    </Row>
  );
};

export default ProgressSummary;
