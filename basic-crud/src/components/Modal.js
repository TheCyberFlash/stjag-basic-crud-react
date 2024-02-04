import React, { useEffect, useState } from "react";

const Modal = ({
  isOpen,
  closeModal,
  fields,
  handleSaveChanges,
  editedRecord,
}) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (editedRecord) {
      const initialFormValues = {};
      fields.forEach((field) => {
        initialFormValues[field.label] = editedRecord[field.label];
      });
      setFormValues(initialFormValues);
    }
  }, [isOpen, editedRecord, fields]);

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const handleFormSave = () => {
    handleSaveChanges(formValues);
    closeModal();
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-component">
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>

          {fields.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              {field.type === "text" && (
                <input
                  type="text"
                  defaultValue={editedRecord ? editedRecord[field.label] : ""}
                  onChange={(e) =>
                    handleFieldChange(field.label, e.target.value)
                  }
                />
              )}
              {field.type === "number" && (
                <input
                  type="number"
                  defaultValue={editedRecord ? editedRecord[field.label] : ""}
                  onChange={(e) =>
                    handleFieldChange(field.label, e.target.value)
                  }
                />
              )}
              {field.type === "boolean" && (
                <input
                  type="checkbox"
                  defaultChecked={
                    editedRecord ? editedRecord[field.label] : false
                  }
                  onChange={(e) =>
                    handleFieldChange(field.label, e.target.value)
                  }
                />
              )}
            </div>
          ))}

          <button className="modal-save" onClick={handleFormSave}>
            Save Changes
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
