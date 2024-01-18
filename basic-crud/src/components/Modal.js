import React from "react";

const Modal = ({ isOpen, closeModal, fields, handleSaveChanges, editedRecord }) => {
    return (
        isOpen && (
            <div className="modal">
                <div className="modal-component">
                    <span className="modal-close" onClick={closeModal}>&times;</span>

                    {fields.map((field, index) => (
                        <div key={index}> 
                            <label>{field.label}</label>
                            {field.type === "text" && <input type="text" defaultValue={editedRecord ? editedRecord[field.label] : ''} />}
                            {field.type === "number" && <input type="number" defaultValue={editedRecord ? editedRecord[field.label] : ''} />}
                            {field.type === "boolean" && <input type="checkbox" defaultChecked={editedRecord ? editedRecord[field.label] : false} /> }
                        </div>
                    ))}

                    <button className="modal-save" onClick={handleSaveChanges}>Save Changes</button>
                </div>
            </div>
        )
    )
}

export default Modal;