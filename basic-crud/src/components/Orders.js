import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import { selectFiltersData, addOrder, updateFilters } from "../redux/ordersSlice";

const Orders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);
    const dispatch = useDispatch();

    const { filters, filterDisplayNames, fields, columns } = useSelector((state) => state.orders);
    const filteredData = useSelector(selectFiltersData);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleCreate = () => {
        openModal();
        setEditedRecord(null);
    }

    const handleEdit = (record) => {
        openModal();
        setEditedRecord(record);
    }

    const handleDelete = (record) => {
        alert(`Delete action for row with Order No.: ${record['Order No.']}`);
    }

    const handleSaveChanges = (formValues) => {
        console.log(formValues);
        dispatch(addOrder(formValues));
        closeModal();
    }   

    const handleFilterChange = (newFilters) => {
        const { delStatus, payProtect, refundEligible } = newFilters;
        dispatch(updateFilters({ delStatusFilter: delStatus, payProtectFilter: payProtect, refundEligibleFilter: refundEligible }));
    }    
    
    return (
        <div>
            <h1>Orders</h1>
            <DataTable columns={columns} data={filteredData} handleCreate={handleCreate} handleEdit={handleEdit} 
                handleDelete={handleDelete} filters={filters} filterDisplayNames={filterDisplayNames} handleFilterChange={handleFilterChange}/>
            <Modal isOpen={isModalOpen} closeModal={closeModal} fields={fields} handleSaveChanges={handleSaveChanges} editedRecord={editedRecord} />
        </div>
    )
}

export default Orders;