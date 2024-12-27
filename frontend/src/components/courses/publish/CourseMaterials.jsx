import React, { useState } from "react";
import ModuleDetails from './ModuleDeatils'
import Section from "./Section";
import NewSectionForm from "./NewSectionForm";

const CourseMaterials = () => {
  const [sections, setSections] = useState([]);

  const addNewSection = (title) => {
    setSections([
      ...sections,
      {
        title,
        contentTitle: "",
        type: "",
        files: [],
      },
    ]);
  };

  const updateSection = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const updateSectionFiles = (index, files) => {
    const updatedSections = [...sections];
    const newFiles = [...files].map((file) => ({
      file,
      contentTitle: "",
    }));
    updatedSections[index].files = [...updatedSections[index].files, ...newFiles];
    setSections(updatedSections);
  };

  const removeSectionFile = (sectionIndex, fileIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].files.splice(fileIndex, 1);
    setSections(updatedSections);
  };

  const updateFileContentTitle = (sectionIndex, fileIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].files[fileIndex].contentTitle = value;
    setSections(updatedSections);
  };

  return (
    <div>
      <ModuleDetails/>
      <div className="container my-5">
        <h3 className="mb-3">Sections</h3>
        {sections.map((section, index) => (
          <Section
            key={index}
            section={section}
            index={index}
            updateSection={updateSection}
            updateSectionFiles={updateSectionFiles}
            removeSectionFile={removeSectionFile}
            updateFileContentTitle={updateFileContentTitle}
          />
        ))}
        <h3>Add New Section</h3>
        <NewSectionForm addNewSection={addNewSection} />
      </div>
    </div>
  );
};

export default CourseMaterials;
