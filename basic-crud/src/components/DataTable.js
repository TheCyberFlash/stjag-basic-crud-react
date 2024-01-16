import React from 'react';

const DataTable = ({ columns, data, handleCreate, handleEdit, handleDelete }) => {
  return (
    <div className="table-container">
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
              <td key={colIndex} className={colIndex === 0 ? "highlight" : ""}>{row[column].toString()}</td>
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
