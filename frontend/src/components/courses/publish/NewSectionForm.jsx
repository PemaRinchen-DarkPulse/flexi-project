import React, { useState } from "react";

const NewSectionForm = ({ addNewSection }) => {
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddSection = () => {
    if (newSectionTitle.trim() === "") {
      alert("Please enter a section title.");
      return;
    }
    addNewSection(newSectionTitle);
    setNewSectionTitle("");
    setIsAdding(false); // Hide the form after adding the section
  };

  return (
    <div className="mb-4">
      {isAdding ? (
        <>
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
            Add
          </button>
          <button
            className="btn btn-outline-danger mt-2 ms-2"
            onClick={() => setIsAdding(false)} // Hide the form on cancel
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          className="btn btn-outline-success"
          onClick={() => setIsAdding(true)} // Show the form on button click
        >
          Add New Section
        </button>
      )}
    </div>
  );
};

export default NewSectionForm;
