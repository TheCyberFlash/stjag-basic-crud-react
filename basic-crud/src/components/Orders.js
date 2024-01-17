import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Modal from "./Modal";

const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);    
    const [data, setData] = useState([]);

    const orderFilters = {
        delStatus: ["All", "Shipped", "Pending"],
        payProtect: ["All", "true", "false"],
        refundEligible: ["All", "true", "false"],
    };

    const filterDisplayNames = {
        delStatus: "Delivery Status",
        payProtect: "Pay Protect",
        refundEligible: "Refund Eligible",
    };

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

    const handleFilterChange = (newFilters) => {

        const delStatusFilter = Array.isArray(newFilters.delStatus) ? newFilters.delStatus[0] : newFilters.delStatus;
        const payProtectFilter = Array.isArray(newFilters.payProtect) ? newFilters.payProtect[0] : newFilters.payProtect;
        const refundEligibleFilter = Array.isArray(newFilters.refundEligible) ? newFilters.refundEligible[0] : newFilters.refundEligible;

        const filteredData = dummyData.filter((row) => {

            const matchDelStatus = delStatusFilter === "All" || row['Del Status'] === delStatusFilter;
            const matchPayProtect = payProtectFilter === "All" || row['Pay Protect'].toString() === payProtectFilter;
            const matchRefundEligible = refundEligibleFilter === "All" || row['Refund Eligible'].toString() === refundEligibleFilter;

            return matchDelStatus && matchPayProtect && matchRefundEligible;            
        });
    
        setData(filteredData);
    }
    
    useEffect(() => {
        setData(dummyData);
    }, []);
    
    
    return (
        <div>
            <h1>Orders</h1>
            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={orderFilters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges}/>
        </div>
    )
}

export default Orders;