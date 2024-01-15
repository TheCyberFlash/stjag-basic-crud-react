import React from "react";
import DataTable from "./DataTable";

const Orders = () => {

    const columns = ['Order No.', 'Customer ID', 'Del Status', 'Amount', 'Pay Protect', 'Refund Eligible'];
  // Dummy data
  const data = [
    { 'Order No.': '123', 'Customer ID': 1, 'Del Status': 'Shipped', 'Amount': 50.00, 'Pay Protect': true, 'Refund Eligible': false },
  ];

    return (
        <div>
            <h1>Orders</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Orders;