import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        data: [        
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
        ],
        selectedFilters: {
            delStatus: "All",
            payProtect: "All",
            refundEligible: "All",
        },
        fields: [
            { label: 'Order No.', type: 'text' },
            { label: 'Customer ID', type: 'number' },
            { label: 'Del Status', type: 'text' },
            { label: 'Amount', type: 'number' },
            { label: 'Pay Protect', type: 'boolean' },
            { label: 'Refund Eligible', type: 'boolean' },
        ],
        filters: {
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
        },
        columns: ['Order No.', 'Customer ID', 'Del Status', 'Amount', 'Pay Protect', 'Refund Eligible'],
        filterDisplayNames: {
            delStatus: "Delivery Status",
            payProtect: "Pay Protect",
            refundEligible: "Refund Eligible",
        },
    },
    reducers: {
        addOrder: (state, action) => {
            return;
        },
        updateFilters: (state, action) => {      
            const { delStatusFilter, payProtectFilter, refundEligibleFilter } = action.payload;
        
            state.selectedFilters = {
                delStatus: delStatusFilter,
                payProtect: payProtectFilter,
                refundEligible: refundEligibleFilter,
            };        
        },
               
    },
});

export const { addOrder, updateFilters } = orderSlice.actions;
export default orderSlice.reducer;

export const selectFiltersData = (state) => {
    const { data, selectedFilters } = state.orders;

    const delStatusFilter = Array.isArray(selectedFilters.delStatus) ? selectedFilters.delStatus[0].value : selectedFilters.delStatus;
    const payProtectFilter = Array.isArray(selectedFilters.payProtect) ? selectedFilters.payProtect[0].value : selectedFilters.payProtect;
    const refundEligibleFilter = Array.isArray(selectedFilters.refundEligible) ? selectedFilters.refundEligible[0].value : selectedFilters.refundEligible;

    const filteredData = data.filter((row) => {
        const matchDelStatus = delStatusFilter === "All" || row['Del Status'] === delStatusFilter;
        const matchPayProtect = payProtectFilter === "All" || row['Pay Protect'].toString() === payProtectFilter;
        const matchRefundEligible = refundEligibleFilter === "All" || row['Refund Eligible'].toString() === refundEligibleFilter;

        return matchDelStatus && matchPayProtect && matchRefundEligible;
    });

    return filteredData;
};

  