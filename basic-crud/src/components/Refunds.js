import React from "react";
import DataTable from "./DataTable";

const Refunds = () => {

    const columns = ['Refund ID', 'Order No', 'Customer ID', 'Customer Name', 'Reason', 'Ref Status', 'Amount', 'Partial'];
  // Dummy data
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
        alert('Create action');
    }

    const handleEdit = () => {
        alert('Edit action');
    }

    const handleDelete = () => {
        alert('Delete action');
    }

    return (
        <div>
            <h1>Refunds</h1>
            <DataTable columns={columns} data={data} handleCreate={handleCreate} handleEdit={handleEdit} handleDelete={handleDelete} />

        </div>
    )
}

export default Refunds;