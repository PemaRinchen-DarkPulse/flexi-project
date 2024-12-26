import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const Blog = () => {
  const [outcomes, setOutcomes] = useState("");
  const handleOutcomeChange = (value) => {
    setOutcomes(value);
  };
  return (
      <form>
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
      </form>
  );
};

export default Blog;
