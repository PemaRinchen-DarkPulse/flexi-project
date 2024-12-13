import React from 'react';
import { InstructorProfileSection } from '../courses/CourseCard';
import { FaUser, FaLock, FaGlobe, FaEnvelope, FaBell, FaPhone,FaMoon } from 'react-icons/fa';

const Setting = () => {
  return (
    <div className="container px-4 py-4">
      <h3 className="ms-3 fw-bold text-primary">Settings</h3>

      {/* Profile Section */}
      <div className="card shadow-sm border-0 rounded-3 my-3">
        <div className="card-body">
          <InstructorProfileSection />
        </div>
      </div>

      {/* Account Settings */}
      <div className="card shadow-sm border-0 rounded-3 my-3">
        <div className="card-header bg-light fw-semibold">Account Settings</div>
        <div className="list-group list-group-flush">
          <AccountSetting icon={<FaUser />} label="Personal Information" />
          <AccountSetting icon={<FaLock />} label="Password & Security" />
          <AccountSetting icon={<FaGlobe />} label="Language & Region" />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="card shadow-sm border-0 rounded-3 my-3">
        <div className="card-header bg-light fw-semibold">Notification Preferences</div>
        <div className="list-group list-group-flush">
          <NotificationPreference
            icon={<FaEnvelope />}
            label="Email Notifications"
            description="Receive updates via email"
            isChecked={true}
          />
          <NotificationPreference
            icon={<FaBell />}
            label="Push Notifications"
            description="Receive push notifications in your browser"
            isChecked={true}
          />
          <NotificationPreference
            icon={<FaPhone />}
            label="SMS Notifications"
            description="Receive important updates via SMS"
            isChecked={false}
          />
        </div>
      </div>
      <div className="card shadow-sm border-0 rounded-3 my-3">
        <div className="card-header bg-light fw-semibold">Preferences</div>
        <div className="list-group list-group-flush">
          <Preferences
            icon={<FaMoon />}
            label="Dark Mode"
            isChecked={true}
          />
          <Preferences
            icon={<FaBell />}
            label="Notifications"
            isChecked={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;

export const AccountSetting = ({ icon, label }) => {
  return (
    <button className="list-group-item list-group-item-action d-flex align-items-center">
      <span className="me-3 text-secondary">{icon}</span>
      <span>{label}</span>
      <span className="ms-auto text-secondary">&gt;</span>
    </button>
  );
};

export const NotificationPreference = ({ icon, label, description, isChecked }) => {
  return (
    <div className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-3 text-secondary">{icon}</span>
        <div>
          <span className="d-block fw-semibold">{label}</span>
          <span className="text-muted">{description}</span>
        </div>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={isChecked}
        />
      </div>
    </div>
  );
};

export const Preferences=(props)=>{
    return (
        <div className="list-group-item d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="me-3 text-secondary">{props.icon}</span>
            <div>
              <span className="d-block fw-semibold">{props.label}</span>
            </div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={props.isChecked}
            />
          </div>
        </div>
      );
}
