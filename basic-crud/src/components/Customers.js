import React, { useState } from "react";
import DataTable from "./DataTable";
import Modal from "./Modal";

const Customers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);
    const [data, setData] = useState([]);

    const filters = {
        confirmed: [
            { value: "All", display: "All" },
            { value: "true", display: "✔️" },
            { value: "false", display: "❌" },
        ],
        activeOrder: [
            { value: "All", display: "All" },
            { value: "true", display: "✔️" },
            { value: "false", display: "❌" },
        ],
    };

    const filterDisplayNames = {
        confirmed : "Confirmed",
        activeOrder : "Active Order",
    };

    const fields = [
        { label: 'Customer ID', type: 'number' },
        { label: 'First Name', type: 'text' },
        { label: 'Last Name', type: 'text' },
        { label: 'Phone Number', type: 'number' },
        { label: 'Email', type: 'text' },
        { label: 'Company', type: 'text' },
        { label: 'Address', type: 'text' },
        { label: 'Confirmed', type: 'boolean' },
        { label: 'Active Order', type: 'boolean' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const columns = ['Customer ID', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Company', 'Address', 'Confirmed', 'Active Order'];

    const dummyData = [
        { 'Customer ID': 1, 'First Name': 'John', 'Last Name': 'Doe', 'Phone Number': 1234567890, 'Email': 'john.doe@example.com', 'Company': 'ABC Corp', 'Address': '123 Main St', 'Confirmed': true, 'Active Order': true },
        { 'Customer ID': 2, 'First Name': 'Jane', 'Last Name': 'Smith', 'Phone Number': 9876543210, 'Email': 'jane.smith@example.com', 'Company': 'XYZ Inc', 'Address': '456 Oak Ave', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 3, 'First Name': 'Alice', 'Last Name': 'Johnson', 'Phone Number': 5551234567, 'Email': 'alice.j@example.com', 'Company': 'Tech Solutions', 'Address': '789 Pine Rd', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 4, 'First Name': 'Bob', 'Last Name': 'Williams', 'Phone Number': 1112223333, 'Email': 'bob.w@example.com', 'Company': 'Global Innovations', 'Address': '101 Maple Ln', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 5, 'First Name': 'Eva', 'Last Name': 'Brown', 'Phone Number': 4445556666, 'Email': 'eva.b@example.com', 'Company': 'Data Systems Ltd', 'Address': '202 Cedar Blvd', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 6, 'First Name': 'Chris', 'Last Name': 'Miller', 'Phone Number': 7778889999, 'Email': 'chris.m@example.com', 'Company': 'Future Tech', 'Address': '303 Birch St', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 7, 'First Name': 'Sophia', 'Last Name': 'Anderson', 'Phone Number': 8887776666, 'Email': 'sophia.a@example.com', 'Company': 'Innovate Inc', 'Address': '404 Elm Dr', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 8, 'First Name': 'Daniel', 'Last Name': 'Taylor', 'Phone Number': 1239876543, 'Email': 'daniel.t@example.com', 'Company': 'Tech Connect', 'Address': '505 Oakwood Ave', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 9, 'First Name': 'Megan', 'Last Name': 'Carter', 'Phone Number': 9998887777, 'Email': 'megan.c@example.com', 'Company': 'Code Solutions', 'Address': '606 Pine St', 'Confirmed': true, 'Active Order': true  },
        { 'Customer ID': 10, 'First Name': 'Ryan', 'Last Name': 'Evans', 'Phone Number': 4441112222, 'Email': 'ryan.e@example.com', 'Company': 'Innovative Designs', 'Address': '707 Cedar Rd', 'Confirmed': true, 'Active Order': true  },
    ];

    const handleCreate = () => {
        // alert('Create action');
        openModal();
    }

    const handleEdit = (record) => {
        // alert(`Edit action for row with Customer ID.: ${record['Customer ID']}`);
        openModal();
        setEditedRecord(record);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Customer ID.: ${record['Customer ID']}`);
    }

    const handleSaveChanges = () => {
        alert('Save Changes action');
        closeModal();
    }

    const handleFilterChange = (newFilters) => {

        const confirmedFilter = Array.isArray(newFilters.confirmed) ? newFilters.confirmed[0].value : newFilters.confirmed;
        const activeOrderFilter = Array.isArray(newFilters.activeOrder) ? newFilters.activeOrder[0].value : newFilters.activeOrder;
        
        const filteredData = dummyData.filter((row) => {
            const matchConfirmed = confirmedFilter === "All" || row['Confirmed'].toString() === confirmedFilter;
            const matchActiveOrder = activeOrderFilter === "All" || row['Active Order'].toString() === activeOrderFilter;

            return matchConfirmed && matchActiveOrder;
        });
        setData(filteredData);
    }

    return (
        <div>
            <h1>Customers</h1>
            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={filters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges} editedRecord={editedRecord}/>
        </div>
    )
}

export default Customers;