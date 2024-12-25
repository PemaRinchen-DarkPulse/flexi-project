import React, { useState } from 'react';
import ModuleDeatils from './ModuleDeatils';
import { FaChevronDown } from 'react-icons/fa'; // Importing FontAwesome for down arrow

const CourseMaterials = () => {
  const [sections, setSections] = useState([]);
  const [newSectionTitle, setNewSectionTitle] = useState(""); // New state for section title input

  // Function to add new section with a title
  const addNewSection = () => {
    if (newSectionTitle.trim() === "") {
      alert("Please enter a section title.");
      return;
    }

    setSections([
      ...sections,
      {
        title: newSectionTitle, // Save the custom title
        contentTitle: "", // Add content title
        type: '', // type of content: 'video', 'reading', or 'blog'
        files: [] // stores uploaded files
      }
    ]);
    setNewSectionTitle(""); // Clear the input after adding the section
  };

  // Handle section change (title or type)
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  // Handle file upload change (allow multiple files)
  const handleFileChange = (index, files) => {
    const updatedSections = [...sections];
    const newFiles = [...files].map((file) => ({
      file,
      contentTitle: "" // Initialize contentTitle for new files
    }));
    updatedSections[index].files = [...updatedSections[index].files, ...newFiles];
    setSections(updatedSections);
  };

  // Handle collapsing section
  const [collapsed, setCollapsed] = useState({});

  const toggleCollapse = (index) => {
    setCollapsed((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Remove a specific file from a section
  const removeFile = (sectionIndex, fileIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].files.splice(fileIndex, 1);
    setSections(updatedSections);
  };

  // Handle content title change for each file
  const handleContentTitleChange = (sectionIndex, fileIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].files[fileIndex].contentTitle = value;
    setSections(updatedSections);
  };

  return (
    <div>
      <ModuleDeatils />
      <div className="container my-5">
        {sections.map((section, index) => (
          <div key={index} className="mb-4 p-3 border rounded">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable area
              onClick={() => toggleCollapse(index)} // Toggle collapse on click anywhere in the section header
            >
              <h5>{section.title}</h5>
              <FaChevronDown />
            </div>

            <div className={`collapse ${collapsed[index] ? 'show' : ''}`}>
              {/* Input for content title */}
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
                  onChange={(e) => handleSectionChange(index, 'contentTitle', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor={`sectionType${index}`} className="form-label">Content Type</label>
                <select
                  className="form-select"
                  id={`sectionType${index}`}
                  value={section.type}
                  onChange={(e) => handleSectionChange(index, 'type', e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="video">Video</option>
                  <option value="reading">Reading Material</option>
                  <option value="blog">Blog</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload {section.type ? section.type : 'File'}</label>
                <input
                  type="file"
                  className="form-control"
                  accept={section.type === 'video' ? 'video/*' : '.pdf, .docx, .txt, .html'}
                  multiple
                  onChange={(e) => handleFileChange(index, e.target.files)}
                />
              </div>

              {section.files.length > 0 && (
                <div>
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
                      {section.files.map((file, fileIndex) => (
                        <tr key={fileIndex}>
                          <td>{fileIndex + 1}</td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={file.contentTitle}
                              onChange={(e) =>
                                handleContentTitleChange(index, fileIndex, e.target.value)
                              }
                              placeholder="Enter Content Title"
                            />
                          </td>
                          <td>{file.file.name}</td>
                          <td>
                            <button
                              className="btn btn-warning btn-sm ms-2"
                              onClick={() => alert(`Edit ${file.file.name}`)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm ms-2"
                              onClick={() => removeFile(index, fileIndex)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="newSectionTitle" className="form-label">Enter Section Title</label>
          <input
            type="text"
            className="form-control"
            id="newSectionTitle"
            placeholder="Enter Section Title"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)} // Update the section title input
          />
          <button
            className="btn btn-outline-success mt-2"
            onClick={addNewSection}
          >
            Add New Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
