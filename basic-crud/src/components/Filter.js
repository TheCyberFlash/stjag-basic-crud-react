import React from "react";

const Filter = ({ label, value, options, onChange }) => {
    return (
        <div className="filter-container">
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;

