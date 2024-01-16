import React, { useState } from "react";
import DataTable from "./DataTable";
import Modal from "./Modal";

const Refunds = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const data = [
        { 'Refund ID': 'REF-001', 'Order No': 'ORD-001', 'Customer ID': 1, 'Customer Name': 'John Doe', 'Reason': 'Lost in Transit', 'Ref Status': 'Approved', 'Amount': 25.50, 'Partial': true },
        { 'Refund ID': 'REF-002', 'Order No': 'ORD-002', 'Customer ID': 2, 'Customer Name': 'Jane Smith','Reason': 'Defective', 'Ref Status': 'Pending', 'Amount': 30.75, 'Partial': false },
        { 'Refund ID': 'REF-003', 'Order No': 'ORD-003', 'Customer ID': 3, 'Customer Name': 'Alice Johnson','Reason': 'Defective', 'Ref Status': 'Approved', 'Amount': 15.25, 'Partial': true },
        { 'Refund ID': 'REF-004', 'Order No': 'ORD-004', 'Customer ID': 4, 'Customer Name': 'Bob Williams','Reason': 'Return', 'Ref Status': 'Pending', 'Amount': 40.00, 'Partial': false },
        { 'Refund ID': 'REF-005', 'Order No': 'ORD-005', 'Customer ID': 5, 'Customer Name': 'Eva Brown','Reason': 'Lost in Transit', 'Ref Status': 'Approved', 'Amount': 18.90, 'Partial': true },
        { 'Refund ID': 'REF-006', 'Order No': 'ORD-006', 'Customer ID': 6, 'Customer Name': 'Chris Miller','Reason': 'Lost in Transit', 'Ref Status': 'Pending', 'Amount': 22.75, 'Partial': false },
        { 'Refund ID': 'REF-007', 'Order No': 'ORD-007', 'Customer ID': 7, 'Customer Name': 'Sophia Anderson','Reason': 'Lost in Transit', 'Ref Status': 'Approved', 'Amount': 35.60, 'Partial': true },
        { 'Refund ID': 'REF-008', 'Order No': 'ORD-008', 'Customer ID': 8, 'Customer Name': 'Daniel Taylor','Reason': 'Return', 'Ref Status': 'Pending', 'Amount': 10.20, 'Partial': false },
        { 'Refund ID': 'REF-009', 'Order No': 'ORD-009', 'Customer ID': 9, 'Customer Name': 'Megan Carter','Reason': 'Return', 'Ref Status': 'Approved', 'Amount': 28.45, 'Partial': true },
        { 'Refund ID': 'REF-010', 'Order No': 'ORD-010', 'Customer ID': 10, 'Customer Name': 'Ryan Evans','Reason': 'Defective', 'Ref Status': 'Pending', 'Amount': 50.00, 'Partial': false },
    ];

    const handleCreate = () => {
        // alert('Create action');
        openModal();
    }

    const handleEdit = (record) => {
        alert(`Edit action for row with Refund ID.: ${record['Refund ID']}`);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Refund ID.: ${record['Refund ID']}`);
    }

    const handleSaveChanges = () => {
        alert('Save Changes action');
        closeModal();
    }

    return (
        <div>
            <h1>Refunds</h1>
            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} />            
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges}/>
        </div>
    )
}

export default Refunds;