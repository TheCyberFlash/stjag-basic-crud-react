import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import { selectFiltersData, addRefund, updateFilters } from "../redux/refundsSlice";

const Refunds = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);
    const dispatch = useDispatch();

    const { data, selectedFilters } = useSelector((state) => state.refunds);
    const filteredData = useSelector(selectFiltersData);

    const filters = {
        refStatus: [
            { value: "All", display: "All" },
            { value: "Approved", display: "✔️" },
            { value: "Pending", display: "❌" },
        ],
        partial: [
            { value: "All", display: "All" },
            { value: "true", display: "✔️" },
            { value: "false", display: "❌" },
        ],
        reason: [
            { value: "All", display: "All" },
            { value: "Lost in Transit", display: "❌" },
            { value: "Defective", display: "❌" },
            { value: "Return", display: "❌" },
        ],
    };

    const filterDisplayNames = {
        refStatus: "Refund Status",
        partial: "Partial",
        reason: "Reason",
    };

    const fields = [
        { label: 'Refund ID', type: 'text' },
        { label: 'Order No', type: 'text' },
        { label: 'Customer ID', type: 'number' },
        { label: 'Customer Name', type: 'text' },
        { label: 'Reason', type: 'text' },
        { label: 'Ref Status', type: 'text' },
        { label: 'Amount', type: 'number' },
        { label: 'Partial', type: 'boolean' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const columns = ['Refund ID', 'Order No', 'Customer ID', 'Customer Name', 'Reason', 'Ref Status', 'Amount', 'Partial'];

    const handleCreate = () => {
        // alert('Create action');
        openModal();
    }

    const handleEdit = (record) => {
        // alert(`Edit action for row with Refund ID.: ${record['Refund ID']}`);
        openModal();
        setEditedRecord(record);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Refund ID.: ${record['Refund ID']}`);
    }

    const handleSaveChanges = () => {
        alert('Save Changes action');
        dispatch(addRefund());
        closeModal();
    }

    const handleFilterChange = (newFilters) => {
        const { refStatus, partial, reason } = newFilters;
        dispatch(updateFilters({ refStatusFilter: refStatus, partialFilter: partial, reasonFilter: reason }));
    }    

    return (
        <div>
            <h1>Refunds</h1>
            <DataTable columns={columns} data={filteredData} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={filters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>            
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges} editedRecord={editedRecord}/>
        </div>
    )
}

export default Refunds;