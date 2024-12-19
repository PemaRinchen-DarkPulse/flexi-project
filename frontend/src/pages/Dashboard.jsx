import React from "react";
import NavBar from "../components/navbar&footer/NavBar";
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import Footer from "../components/navbar&footer/Footer";
import Calendar from "react-calendar";
import StreakCalendar from "../components/calender/StreakCalendar";
const Dashboard = () => {
  // Sample streak data (key: date, value: activity level)
  const streakData = {
    "2022-12-01": 3,
    "2022-12-02": 5,
    "2022-12-03": 7,
    "2022-12-07": 2,
    "2022-12-16": 4,
    "2022-12-23": 8,
  };

  // Function to dynamically style each tile
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateKey = date.toISOString().split("T")[0];
      if (streakData[dateKey]) {
        const activityLevel = streakData[dateKey];
        const backgroundColor =
          activityLevel > 5
            ? "linear-gradient(135deg, #2ecc71, #27ae60)" // High activity: gradient green
            : activityLevel > 2
            ? "linear-gradient(135deg, #f1c40f, #f39c12)" // Medium activity: gradient yellow-orange
            : "linear-gradient(135deg, #e74c3c, #c0392b)"; // Low activity: gradient red

        return (
          <div
            style={{
              width: "90%",
              height: "90%",
              background: backgroundColor,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "auto",
            }}
          >
            {activityLevel}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <NavBar />
      <div
        className="mx-3"
        style={{
          marginTop: "80px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          background: "#f7f9fc",
        }}
      >
        <WelcomeMessage />
          <StreakCalendar year={2024} month={12} />

        </div>
      <Footer />
    </>
  );
};

export default Dashboard;
