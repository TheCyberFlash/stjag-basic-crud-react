import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import { selectFiltersData, addOrder, updateFilters } from "../redux/ordersSlice";

const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);
    const dispatch = useDispatch();

    const { data, selectedFilters } = useSelector((state) => state.orders);
    const filteredData = useSelector(selectFiltersData);

    console.log(filteredData);
    const filters = {
        delStatus: [
            { value: "All", display: "All" },
            { value: "Shipped", display: "Shipped" },
            { value: "Pending", display: "Pending" },
        ],
        payProtect: [
            { value: "All", display: "All" },
            { value: "true", display: "✔️" },
            { value: "false", display: "❌" }, 
        ],
        refundEligible: [
            { value: "All", display: "All" },
            { value: "true", display: "✔️" },
            { value: "false", display: "❌" },
        ],
    };    

    const filterDisplayNames = {
        delStatus: "Delivery Status",
        payProtect: "Pay Protect",
        refundEligible: "Refund Eligible",
    };    

    const fields = [
        { label: 'Order No.', type: 'text' },
        { label: 'Customer ID', type: 'number' },
        { label: 'Del Status', type: 'text' },
        { label: 'Amount', type: 'number' },
        { label: 'Pay Protect', type: 'boolean' },
        { label: 'Refund Eligible', type: 'boolean' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const columns = ['Order No.', 'Customer ID', 'Del Status', 'Amount', 'Pay Protect', 'Refund Eligible'];    

    const handleCreate = () => {
        // alert('Create action');
        openModal();
        setEditedRecord(null);
    }

    const handleEdit = (record) => {
        // alert(`Edit action for row with Order No.: ${record['Order No.']}`);
        openModal();
        setEditedRecord(record);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Order No.: ${record['Order No.']}`);
    }

    const handleSaveChanges = (formValues) => {
        console.log(formValues);
        dispatch({ type: "addOrder", payload: formValues });
        closeModal();
    }   

    const handleFilterChange = (newFilters) => {
        const { delStatus, payProtect, refundEligible } = newFilters;
        dispatch(updateFilters({ delStatusFilter: delStatus, payProtectFilter: payProtect, refundEligibleFilter: refundEligible }));
    }
    
    
    return (
        <div>
            <h1>Orders</h1>
            <DataTable columns={columns} data={filteredData} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={filters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges} editedRecord={editedRecord} />
        </div>
    )
}

export default Orders;