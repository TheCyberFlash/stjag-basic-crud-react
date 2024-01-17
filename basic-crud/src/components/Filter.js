import React from "react";

const Filter = ({ label, value, options, onChange }) => {
    return (
        <div className="filter-container">
            <label>{label}</label>
            <select value={value.toString()} onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value.toString()}>
                        {option.display}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
