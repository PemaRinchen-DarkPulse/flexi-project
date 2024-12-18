import React from "react";
import { useNavigate } from "react-router-dom";

const QuickAccessCard = ({ label, icon, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div 
      className="d-flex align-items-center bg-dark text-white rounded px-3 py-2 cursor-pointer"
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      {icon && <span className="me-2">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};

export default QuickAccessCard;
