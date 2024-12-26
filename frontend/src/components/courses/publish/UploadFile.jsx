import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const UploadFile = ({ onFileChange, accept = 'video/*' }) => {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0]; // Take only the first file
    handleFile(file);
  };

  const handleFile = (file) => {
    setSelectedFile(file);

    if (onFileChange) {
      onFileChange(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Take only the first file
    handleFile(file);
  };

  return (
    <div>
      <label className="form-label">Upload</label>
      <div
        style={{
          border: `2px dashed ${dragging ? '#007bff' : '#ccc'}`,
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          transition: 'border-color 0.3s',
          cursor: 'pointer',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" style={{ cursor: 'pointer', display: 'block' }}>
          <FiUpload size={40} color="#666" />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            <strong style={{ display: 'block', color: '#333' }}>Upload a file</strong>
            <span>or drag and drop</span>
          </div>
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h6>Selected File:</h6>
        {selectedFile ? (
          <p style={{ marginBottom: '10px' }}>{selectedFile.name}</p>
        ) : (
          <p style={{ color: '#666' }}>No file selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
