import React, { useState } from "react";

const CourseDeatils = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleEditClick = () => {
    alert("Edit button clicked!");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Course Details</h3>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>

      <form className="coursesDetails">
        <div className="mb-3">
          <label htmlFor="courseTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="courseTitle"
            placeholder="Enter course title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="courseDescription"
            rows="5"
            placeholder="Enter a brief description of the course"
          ></textarea>
        </div>

        {/* Cover Image Upload */}
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">
            Cover Image
          </label>
          <input
            type="file"
            className="form-control"
            id="coverImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Tags Input */}
        <div className="mb-3">
          <label htmlFor="tagsInput" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tagsInput"
            placeholder="Enter tags and press Enter"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  margin: "5px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => removeTag(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Agree to terms and conditions
          </label>
        </div>
      </form>
    </>
  );
};

export default CourseDeatils;
