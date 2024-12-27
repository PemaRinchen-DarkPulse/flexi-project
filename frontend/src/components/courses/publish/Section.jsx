import React, { useState, useCallback } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Blog from "./Blog";
import UploadFile from "./UploadFile";
import { Button } from "reactstrap";

const Section = ({
  section,
  index,
  updateSection,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const handleFileUpload = (file) => {
    if (file) {
      setUploadedFiles((prev) => [
        ...prev,
        { file, contentTitle: section.contentTitle },
      ]);
    }
  };
  const removeFile = (fileIndex) => {
    setUploadedFiles((prev) => prev.filter((_, index) => index !== fileIndex));
  };

  return (
    <div className="mb-4 py-2 px-3 border rounded">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={toggleCollapse}
        aria-expanded={collapsed}
      >
        <h5>{section.title}</h5>
        {collapsed ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div className={`collapse ${collapsed ? "show" : ""}`}>
        <div className="mb-3">
          <label htmlFor={`contentTitle${index}`} className="form-label">
            Content Title
          </label>
          <input
            type="text"
            className="form-control"
            id={`contentTitle${index}`}
            placeholder="Enter Content Title"
            value={section.contentTitle}
            onChange={(e) =>
              updateSection(index, "contentTitle", e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor={`sectionType${index}`} className="form-label">
            Content Type
          </label>
          <select
            className="form-select"
            id={`sectionType${index}`}
            value={section.type}
            onChange={(e) => updateSection(index, "type", e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="video">Video</option>
            <option value="reading">Reading Material</option>
            <option value="blog">Blog</option>
          </select>
        </div>

        {section.type === "blog" ? (
          <Blog />
        ) : (
          <UploadFile onFileChange={handleFileUpload} />
        )}


        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h6>Uploaded Files:</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Content Title</th>
                  <th>Uploaded File</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((fileWithTitle, fileIndex) => (
                  <tr key={`${fileWithTitle.file.name}-${fileIndex}`}>
                    <td>{fileIndex + 1}</td>
                    <td>{fileWithTitle.contentTitle}</td>
                    <td>{fileWithTitle.file.name}</td>
                    <td>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => removeFile(fileIndex)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
