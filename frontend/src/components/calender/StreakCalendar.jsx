import React, { useState } from "react";

const StreakCalendar = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [highlightAll, setHighlightAll] = useState(false);

  // Get the number of days in a specific month/year
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Navigate to the previous month
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to the next month
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
  };

  const dayStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
  };

  const highlightedDayStyle = {
    ...dayStyle,
    backgroundColor: "#28a745",
    color: "white",
  };

  const weekdayStyle = {
    ...dayStyle,
    fontWeight: "bold",
    backgroundColor: "#e9ecef",
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="col-4 border p-3 rounded-3 shadow-sm">
      <div style={headerStyle}>
        <button className="btn bg-secondary rounded-circle d-flex justify-content-center align-items-center text-white" onClick={handlePrevMonth}>
          &lt;
        </button>
        <h5 style={{ margin: 0 }}>
          {new Date(currentYear, currentMonth - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h5>
        <button className="btn bg-secondary rounded-circle d-flex justify-content-center align-items-center text-white" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div style={gridStyle}>
        {weekdays.map((weekday) => (
          <div key={weekday} style={weekdayStyle}>
            {weekday}
          </div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          return (
            <div
              key={day}
              style={highlightAll ? highlightedDayStyle : dayStyle}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakCalendar;
