import React, { useState } from "react";
import DataTable from "./DataTable";
import Modal from "./Modal";

const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
  
    const data = [
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

    return (
        <div>
            <h1>Orders</h1>
            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} />
        </div>
    )
}

export default Orders;