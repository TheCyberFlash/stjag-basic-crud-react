import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const DataTable = ({ columns, data, handleCreate, handleEdit, handleDelete, filters, filterDisplayNames, handleFilterChange }) => {
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        handleFilterChange(localFilters);
    }, [localFilters]);

  return (
    <div className="table-container">

        <div className="filter-row">
            {Object.keys(localFilters).map((filterKey) => (
                <Filter
                    key={filterKey}
                    label={filterDisplayNames[filterKey]}
                    value={localFilters[filterKey]}
                    options={filters[filterKey]}
                    onChange={(value) => setLocalFilters({ ...localFilters, [filterKey]: value })}
                />
            ))}
        </div>

        <table>
            <thead>
                <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
                <th>
                    <button className="create" onClick={handleCreate}>Create</button>
                </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}>
                    {columns.map((column, colIndex) => (
                    <td key={colIndex} className={colIndex === 0 ? "highlight" : ""}>
                        {row[column] === true ? '✅' : row[column] === false ? '❌' : row[column].toString()}
                    </td>
                    ))}
                    <td>
                    <button className="edit" onClick={() => handleEdit(row)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(row)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
    </div>
  );
};

export default DataTable;
