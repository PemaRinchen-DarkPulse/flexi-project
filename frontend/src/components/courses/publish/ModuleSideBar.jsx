import React, { useState } from "react";

const ModuleSideBar = () => {
  const [modules, setModules] = useState(["Module 1"]);

  const handleAddModule = () => {
    setModules((prevModules) => [...prevModules, `Module ${prevModules.length + 1}`]);
  };

  const handleRemoveModule = (module) => {
    // Filter out the removed module and re-index the remaining modules
    setModules((prevModules) =>
      prevModules.filter((mod) => mod !== module).map((mod, index) => `Module ${index + 1}`)
    );
  };

  const handleModuleClick = (module) => {
    alert(`You clicked on ${module}`);
    // Replace with custom logic (e.g., navigate to module details).
  };

  return (
    <div style={{ padding: "10px", background: "#f8f9fa", borderRadius: "5px" }}>
      <h3 style={{ textAlign: "center", color: "#343a40" }}>Course Materials</h3>
      <div className="border m-2" style={{ padding: "10px", borderRadius: "5px" }}>
        <h5 style={{ color: "#495057" }}>Modules</h5>
        <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
          {modules.map((module, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                padding: "5px",
                background: "#e9ecef",
                borderRadius: "5px",
              }}
            >
              <span
                onClick={() => handleModuleClick(module)}
                style={{
                  color: "#007BFF",
                  cursor: "pointer",
                  textDecoration: "underline",
                  flex: "1",
                }}
              >
                {module}
              </span>
              <button
                onClick={() => handleRemoveModule(module)}
                style={{
                  padding: "5px 10px",
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddModule}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            display: "block",
          }}
        >
          Add Module
        </button>
      </div>
    </div>
  );
};

export default ModuleSideBar;
