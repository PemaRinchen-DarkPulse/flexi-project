import React from 'react';
import { Card } from 'reactstrap';
import { BsCalendarEvent } from 'react-icons/bs';

const UpcomingTests = () => {
  // Mock data - replace with actual data from your backend
  const upcomingTests = [
    {
      id: 1,
      title: "RCSC Mock Test #4",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "English Practice Test",
      date: "Dec 22, 2024",
      time: "2:00 PM",
      duration: "1 hour"
    },
    {
      id: 3,
      title: "Aptitude Assessment",
      date: "Dec 25, 2024",
      time: "11:00 AM",
      duration: "1.5 hours"
    }
  ];

  return (
    <Card className="shadow-sm p-3 mb-4">
      <h5 className="mb-3">Upcoming Tests</h5>
      {upcomingTests.map(test => (
        <div key={test.id} className="d-flex align-items-center mb-3 pb-2 border-bottom">
          <BsCalendarEvent className="text-primary me-3" size={20} />
          <div>
            <h6 className="mb-1">{test.title}</h6>
            <small className="text-muted">
              {test.date} at {test.time} ({test.duration})
            </small>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default UpcomingTests;
