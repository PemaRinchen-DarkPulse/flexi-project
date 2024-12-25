import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ModuleDetails = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outcomes, setOutcomes] = useState("");

  const handleOutcomeChange = (value) => {
    setOutcomes(value);
  };

  return (
    <div className="container my-5 p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Module Details</h3>
      <form>
        <div className="mb-3 position-relative">
          <label htmlFor="moduleTitle" className="form-label">
            Module Title
          </label>
          <input
            type="text"
            className="form-control"
            id="moduleTitle"
            placeholder="Enter Module Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y"
            style={{
              marginRight: "15px",
              padding: "8px 15px",
              fontSize: "14px",
              borderRadius: "20px",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#007bff"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
          >
            Edit
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="moduleDescription" className="form-label">
            Module Description
          </label>
          <textarea
            className="form-control"
            id="moduleDescription"
            rows="5"
            placeholder="Enter Module Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-5">
          <label htmlFor="moduleOutcomes" className="form-label">
            Module Outcomes
          </label>
          <ReactQuill
            value={outcomes}
            onChange={handleOutcomeChange}
            modules={{
              toolbar: [
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["link"],
              ],
            }}
            placeholder="Enter Module Outcomes"
            style={{ height: "150px" }}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModuleDetails;
