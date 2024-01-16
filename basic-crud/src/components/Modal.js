import React from "react";

const Modal = ({ isOpen, closeModal, fields}) => {
    return (
        isOpen && (
            <div className="modal">
                <div className="modal-component">
                    <span className="modal-close" onClick={closeModal}>&times;</span>

                    {fields.map((field, index) => (
                        <div key={index}> 
                            <label>{field.label}</label>
                            {field.type === "text" && <input type="text" />}
                            {field.type === "number" && <input type="number" />}
                            {field.type === "boolean" && <input type="checkbox" />}
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

export default Modal;