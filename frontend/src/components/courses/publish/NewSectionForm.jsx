import React, { useState } from "react";

const NewSectionForm = ({ addNewSection }) => {
  const [newSectionTitle, setNewSectionTitle] = useState("");

  const handleAddSection = () => {
    if (newSectionTitle.trim() === "") {
      alert("Please enter a section title.");
      return;
    }
    addNewSection(newSectionTitle);
    setNewSectionTitle("");
  };

  return (
    <div className="mb-4">
      <label htmlFor="newSectionTitle" className="form-label bolder">
        Enter Section Title
      </label>
      <input
        type="text"
        className="form-control"
        id="newSectionTitle"
        placeholder="Enter Section Title"
        value={newSectionTitle}
        onChange={(e) => setNewSectionTitle(e.target.value)}
      />
      <button className="btn btn-outline-success mt-2" onClick={handleAddSection}>
        Add New Section
      </button>
    </div>
  );
};

export default NewSectionForm;
