import React, { useState } from "react";

const ModuleSideBar = () => {
  const [modules, setModules] = useState(["Module 1"]);
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to closed

  const handleAddModule = () => {
    setModules((prevModules) => [...prevModules, `Module ${prevModules.length + 1}`]);
    setIsCollapsed(false); // Ensure the module section is expanded
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

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      <div className="border p-2 rounded-2 border">
        <div
          className="collapsable"
          onClick={toggleCollapse}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ color: "#495057" }}>Modules</h5>
          <span style={{ color: "#007BFF", fontSize: "18px" }}>
            {isCollapsed ? "+" : "-"}
          </span>
        </div>
        {!isCollapsed && (
          <ul style={{ paddingLeft: "20px", listStyleType: "none", marginTop: "10px" }}>
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
        )}
      </div>
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
        Add New Module
      </button>
    </div>
  );
};

export default ModuleSideBar;
