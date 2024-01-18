import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import { selectFiltersData, addCustomer, updateFilters } from "../redux/customersSlice";

const Customers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);
    const dispatch = useDispatch();

    const { data, selectedFilters } = useSelector((state) => state.customers);
    const filteredData = useSelector(selectFiltersData);

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
        const { confirmed, activeOrder } = newFilters;
        dispatch(updateFilters({ confirmedFilter: confirmed, activeOrdersFilter: activeOrder }));
    }    

    return (
        <div>
            <h1>Customers</h1>
            <DataTable columns={columns} data={filteredData} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={filters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges} editedRecord={editedRecord}/>
        </div>
    )
}

export default Customers;