import React from "react";
import DataTable from "./DataTable";

const Refunds = () => {

    const columns = ['Refund ID', 'Order No', 'Customer ID', 'Ref Status', 'Amount', 'Partial'];
  // Dummy data
  const data = [
    { 'Refund ID': 'REF-001', 'Order No': 'ORD-001', 'Customer ID': 1, 'Ref Status': 'Approved', 'Amount': 25.50, 'Partial': true },
  { 'Refund ID': 'REF-002', 'Order No': 'ORD-002', 'Customer ID': 2, 'Ref Status': 'Pending', 'Amount': 30.75, 'Partial': false },
  { 'Refund ID': 'REF-003', 'Order No': 'ORD-003', 'Customer ID': 3, 'Ref Status': 'Approved', 'Amount': 15.25, 'Partial': true },
  { 'Refund ID': 'REF-004', 'Order No': 'ORD-004', 'Customer ID': 4, 'Ref Status': 'Pending', 'Amount': 40.00, 'Partial': false },
  { 'Refund ID': 'REF-005', 'Order No': 'ORD-005', 'Customer ID': 5, 'Ref Status': 'Approved', 'Amount': 18.90, 'Partial': true },
  { 'Refund ID': 'REF-006', 'Order No': 'ORD-006', 'Customer ID': 6, 'Ref Status': 'Pending', 'Amount': 22.75, 'Partial': false },
  { 'Refund ID': 'REF-007', 'Order No': 'ORD-007', 'Customer ID': 7, 'Ref Status': 'Approved', 'Amount': 35.60, 'Partial': true },
  { 'Refund ID': 'REF-008', 'Order No': 'ORD-008', 'Customer ID': 8, 'Ref Status': 'Pending', 'Amount': 10.20, 'Partial': false },
  { 'Refund ID': 'REF-009', 'Order No': 'ORD-009', 'Customer ID': 9, 'Ref Status': 'Approved', 'Amount': 28.45, 'Partial': true },
  { 'Refund ID': 'REF-010', 'Order No': 'ORD-010', 'Customer ID': 10, 'Ref Status': 'Pending', 'Amount': 50.00, 'Partial': false },
];

    return (
        <div>
            <h1>Refunds</h1>
            <DataTable columns={columns} data={data} />

        </div>
    )
}

export default Refunds;