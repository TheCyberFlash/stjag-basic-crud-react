import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Modal from "./Modal";

const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        delStatus: "All",
        payProtect: "All",
        refundEligible: "All",
    });
    const [data, setData] = useState([]);

    const dummyData = [        
        { 'Order No.': 'ORD-001', 'Customer ID': 1, 'Del Status': 'Shipped', 'Amount': 50.00, 'Pay Protect': true, 'Refund Eligible': false },
        { 'Order No.': 'ORD-002', 'Customer ID': 2, 'Del Status': 'Pending', 'Amount': 75.50, 'Pay Protect': false, 'Refund Eligible': true },
        { 'Order No.': 'ORD-003', 'Customer ID': 3, 'Del Status': 'Shipped', 'Amount': 30.25, 'Pay Protect': true, 'Refund Eligible': true },
        { 'Order No.': 'ORD-004', 'Customer ID': 4, 'Del Status': 'Pending', 'Amount': 40.00, 'Pay Protect': false, 'Refund Eligible': false },
        { 'Order No.': 'ORD-005', 'Customer ID': 5, 'Del Status': 'Shipped', 'Amount': 18.90, 'Pay Protect': true, 'Refund Eligible': true },
        { 'Order No.': 'ORD-006', 'Customer ID': 6, 'Del Status': 'Pending', 'Amount': 22.75, 'Pay Protect': false, 'Refund Eligible': false },
        { 'Order No.': 'ORD-007', 'Customer ID': 7, 'Del Status': 'Shipped', 'Amount': 35.60, 'Pay Protect': true, 'Refund Eligible': false },
        { 'Order No.': 'ORD-008', 'Customer ID': 8, 'Del Status': 'Pending', 'Amount': 10.20, 'Pay Protect': false, 'Refund Eligible': true },
        { 'Order No.': 'ORD-009', 'Customer ID': 9, 'Del Status': 'Shipped', 'Amount': 28.45, 'Pay Protect': true, 'Refund Eligible': false },
        { 'Order No.': 'ORD-010', 'Customer ID': 10, 'Del Status': 'Pending', 'Amount': 50.00, 'Pay Protect': false, 'Refund Eligible': true },
    ];

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
    }

    const handleEdit = (record) => {
        alert(`Edit action for row with Order No.: ${record['Order No.']}`);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Order No.: ${record['Order No.']}`);
    }

    const handleSaveChanges = () => {
        alert('Save Changes action');
        closeModal();
    }

    useEffect(() => {
        const filteredData = dummyData.filter((row) => {
            return (
                (filters.delStatus === "All" || row['Del Status'] === filters.delStatus) &&
                (filters.payProtect === "All" || row['Pay Protect'] === filters.payProtect) &&
                (filters.refundEligible === "All" || row['Refund Eligible'] === filters.refundEligible)
            )        
        })
        setData(filteredData);
    }, [filters]);

    return (
        <div>
            <h1>Orders</h1>

            {/* Temp Filter: */}
            <div className="filter-row">
                <div className="filter-container">
                    <label>Del Status</label>
                    <select value={filters.delStatus} onChange={(e) => setFilters({...filters, delStatus: e.target.value})}>
                        <option value="All">All</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>

                <div className="filter-container">
                    <label>Pay Protect</label>
                    <select value={filters.payProtect} onChange={(e) => setFilters({...filters, payProtect: e.target.value === "All" ? "All" : e.target.value === "true"})}>
                        <option value="All">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div className="filter-container">
                    <label>Refund Eligible</label>
                    <select value={filters.refundEligible} onChange={(e) => setFilters({...filters, refundEligible: e.target.value === "All" ? "All" : e.target.value === "true"})}>
                        <option value="All">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>

            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} />
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges}/>
        </div>
    )
}

export default Orders;