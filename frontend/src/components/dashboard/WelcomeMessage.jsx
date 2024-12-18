import React from "react";
import QuickAccessCard from "./QuickAccessCard";
import { MdOutlineDescription } from "react-icons/md"; 
import { FiVideo } from "react-icons/fi"; 
import { BsCalendarCheck } from "react-icons/bs";

const WelcomeMessage = () => {
  return (
    <div className="d-flex align-items-center my-5">
      <div className="col-7 d-flex flex-column">
        <h3 className="fw-bold mb-2">Welcome, Pema!</h3>
        <p className="mb-0">
          Stay focused and consistent in your RCSC exam preparation journey.
        </p>
      </div>
      <div className="col-5 d-flex justify-content-start align-self-center gap-2">
        <QuickAccessCard
          label="Practice Tests"
          icon={<MdOutlineDescription size={20} />}
          route="/practice-test"
        />
        <QuickAccessCard 
          label="Video Lectures" 
          icon={<FiVideo size={20} />}
          route="/video-lectures"
        />
        <QuickAccessCard
          label="Mock Tests"
          icon={<BsCalendarCheck size={20} />}
          route="/mock-tests"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;
