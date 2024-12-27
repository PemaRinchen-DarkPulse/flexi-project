import React, { useState } from "react";
import Blog from "./Blog";

const ModuleDetails = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container py-4">
      {/* Header with aligned edit button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">Module Details</h3>
        <button type="button" className="btn btn-outline-primary">
          Edit
        </button>
      </div>

      {/* Form */}
      <form>
        {/* Module Title */}
        <div className="mb-4">
          <label htmlFor="moduleTitle" className="form-label fw-bold">
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
        </div>

        {/* Module Description */}
        <div className="mb-4">
          <label htmlFor="moduleDescription" className="form-label fw-bold">
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

        {/* Blog Component */}
        <div className="mb-4">
          <Blog />
        </div>

        {/* Save Button */}
        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4 py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModuleDetails;
