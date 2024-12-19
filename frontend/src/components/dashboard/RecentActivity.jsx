import React from 'react';
import { Card } from 'reactstrap';
import { FaCheckCircle, FaPlay, FaEdit } from 'react-icons/fa';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'completion',
      content: 'Completed Module 3: English Grammar',
      timestamp: '2 hours ago',
      icon: <FaCheckCircle className="text-success" />
    },
    {
      id: 2,
      type: 'video',
      content: 'Watched Aptitude Tricks Video',
      timestamp: '5 hours ago',
      icon: <FaPlay className="text-primary" />
    },
    {
      id: 3,
      type: 'test',
      content: 'Attempted Practice Test #5',
      timestamp: 'Yesterday',
      icon: <FaEdit className="text-warning" />
    }
  ];

  return (
    <Card className="shadow-sm p-3 mb-4">
      <h5 className="mb-3">Recent Activity</h5>
      {activities.map(activity => (
        <div key={activity.id} className="d-flex align-items-center mb-3 pb-2 border-bottom">
          <div className="me-3">
            {activity.icon}
          </div>
          <div>
            <p className="mb-1">{activity.content}</p>
            <small className="text-muted">{activity.timestamp}</small>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default RecentActivity;
