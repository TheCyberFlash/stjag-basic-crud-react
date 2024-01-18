import { createSlice } from "@reduxjs/toolkit"; 

const customersSlice = createSlice({
    name: "customers",
    initialState: {
        data: [
            { 'Customer ID': 1, 'First Name': 'John', 'Last Name': 'Doe', 'Phone Number': 1234567890, 'Email': 'john.doe@example.com', 'Company': 'ABC Corp', 'Address': '123 Main St', 'Confirmed': true, 'Active Order': true },
            { 'Customer ID': 2, 'First Name': 'Jane', 'Last Name': 'Smith', 'Phone Number': 9876543210, 'Email': 'jane.smith@example.com', 'Company': 'XYZ Inc', 'Address': '456 Oak Ave', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 3, 'First Name': 'Alice', 'Last Name': 'Johnson', 'Phone Number': 5551234567, 'Email': 'alice.j@example.com', 'Company': 'Tech Solutions', 'Address': '789 Pine Rd', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 4, 'First Name': 'Bob', 'Last Name': 'Williams', 'Phone Number': 1112223333, 'Email': 'bob.w@example.com', 'Company': 'Global Innovations', 'Address': '101 Maple Ln', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 5, 'First Name': 'Eva', 'Last Name': 'Brown', 'Phone Number': 4445556666, 'Email': 'eva.b@example.com', 'Company': 'Data Systems Ltd', 'Address': '202 Cedar Blvd', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 6, 'First Name': 'Chris', 'Last Name': 'Miller', 'Phone Number': 7778889999, 'Email': 'chris.m@example.com', 'Company': 'Future Tech', 'Address': '303 Birch St', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 7, 'First Name': 'Sophia', 'Last Name': 'Anderson', 'Phone Number': 8887776666, 'Email': 'sophia.a@example.com', 'Company': 'Innovate Inc', 'Address': '404 Elm Dr', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 8, 'First Name': 'Daniel', 'Last Name': 'Taylor', 'Phone Number': 1239876543, 'Email': 'daniel.t@example.com', 'Company': 'Tech Connect', 'Address': '505 Oakwood Ave', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 9, 'First Name': 'Megan', 'Last Name': 'Carter', 'Phone Number': 9998887777, 'Email': 'megan.c@example.com', 'Company': 'Code Solutions', 'Address': '606 Pine St', 'Confirmed': true, 'Active Order': true  },
            { 'Customer ID': 10, 'First Name': 'Ryan', 'Last Name': 'Evans', 'Phone Number': 4441112222, 'Email': 'ryan.e@example.com', 'Company': 'Innovative Designs', 'Address': '707 Cedar Rd', 'Confirmed': true, 'Active Order': true  },
        ],
        selectedFilters: {
            confirmed: "All",
            activeOrders: "All",
        },
        fields: [
            { label: 'Customer ID', type: 'number' },
            { label: 'First Name', type: 'text' },
            { label: 'Last Name', type: 'text' },
            { label: 'Phone Number', type: 'number' },
            { label: 'Email', type: 'text' },
            { label: 'Company', type: 'text' },
            { label: 'Address', type: 'text' },
            { label: 'Confirmed', type: 'boolean' },
            { label: 'Active Order', type: 'boolean' },
        ],
        filterDisplayNames: {
            confirmed : "Confirmed",
            activeOrder : "Active Order",
        },
        filters: {
            confirmed: [
                { value: "All", display: "All" },
                { value: "true", display: "✔️" },
                { value: "false", display: "❌" },
            ],
            activeOrder: [
                { value: "All", display: "All" },
                { value: "true", display: "✔️" },
                { value: "false", display: "❌" },
            ],
        },
        columns: ['Customer ID', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Company', 'Address', 'Confirmed', 'Active Order'], 
    },
    reducers: {
        addCustomer: (state, action) => {
            return;
        },
        updateFilters: (state, action) => {
        
            const { confirmedFilter, activeOrdersFilter } = action.payload;
        
            state.selectedFilters = {
                confirmed: confirmedFilter,
                activeOrders: activeOrdersFilter,
            };        
        },        
    },
});

export const { addCustomer, updateFilters } = customersSlice.actions;
export default customersSlice.reducer;

export const selectFiltersData = (state) => {
    const { data, selectedFilters } = state.customers;

    const confirmedFilter = Array.isArray(selectedFilters.confirmed) ? selectedFilters.confirmed[0].value : selectedFilters.confirmed;
    const activeOrdersFilter = Array.isArray(selectedFilters.activeOrders) ? selectedFilters.activeOrders[0].value : selectedFilters.activeOrders;

    const filteredData = data.filter((row) => {
        const matchConfirmed = confirmedFilter === "All" || row['Confirmed'].toString() === confirmedFilter;
        const matchActiveOrders = activeOrdersFilter === "All" || row['Active Order'].toString() === activeOrdersFilter;
    
        return matchConfirmed && matchActiveOrders;
    });    

    return filteredData;
}