import { createSlice } from '@reduxjs/toolkit';

const refundsSlice = createSlice({
    name: 'refunds',
    initialState: {
        data: [
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
        ],
        selectedFilters: {
            refStatus: "All",
            partial: "All",
            reason: "All",
        },
        fields: [
            { label: 'Refund ID', type: 'text' },
            { label: 'Order No', type: 'text' },
            { label: 'Customer ID', type: 'number' },
            { label: 'Customer Name', type: 'text' },
            { label: 'Reason', type: 'text' },
            { label: 'Ref Status', type: 'text' },
            { label: 'Amount', type: 'number' },
            { label: 'Partial', type: 'boolean' },
        ],
        filters: {
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
                { value: "Lost in Transit", display: "Lost in Transit" },
                { value: "Defective", display: "Defective" },
                { value: "Return", display: "Return" },
            ],
        },
        filterDisplayNames: {
            refStatus: "Refund Status",
            partial: "Partial",
            reason: "Reason",
        },
        columns: ['Refund ID', 'Order No', 'Customer ID', 'Customer Name', 'Reason', 'Ref Status', 'Amount', 'Partial'],
    },
    reducers: {
        addRefund: (state, action) => {
            return;
        },
        updateFilters: (state, action) => {        
            const { refStatusFilter, partialFilter, reasonFilter } = action.payload;
        
            state.selectedFilters = {
                refStatus: refStatusFilter,
                partial: partialFilter,
                reason: reasonFilter,
            };        
        },
    },
});

export const { addRefund, updateFilters } = refundsSlice.actions;
export default refundsSlice.reducer;

export const selectFiltersData = (state) => {
    const { data, selectedFilters } = state.refunds;

    const refStatusFilter = Array.isArray(selectedFilters.refStatus) ? selectedFilters.refStatus[0].value : selectedFilters.refStatus;
    const partialFilter = Array.isArray(selectedFilters.partial) ? selectedFilters.partial[0].value : selectedFilters.partial;
    const reasonFilter = Array.isArray(selectedFilters.reason) ? selectedFilters.reason[0].value : selectedFilters.reason;

    const filteredData = data.filter((row) => {
        const matchRefStatus = refStatusFilter === "All" || row['Ref Status'] === refStatusFilter;
        const matchPartial = partialFilter === "All" || row['Partial'].toString() === partialFilter;
        const matchReason = reasonFilter === "All" || row['Reason'] === reasonFilter;

        return matchRefStatus && matchPartial && matchReason;
    });

    return filteredData;
};