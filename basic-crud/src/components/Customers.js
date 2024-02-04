import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import {
  selectFiltersData,
  updateFilters,
} from "../redux/customersSlice";

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedRecord, setEditedRecord] = useState(null);
  const dispatch = useDispatch();

  const {
    fields,
    filterDisplayNames,
    filters,
    columns,
  } = useSelector((state) => state.customers);
  const filteredData = useSelector(selectFiltersData);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreate = () => {
    openModal();
  };

  const handleEdit = (record) => {
    openModal();
    setEditedRecord(record);
  };

  const handleDelete = (record) => {
    alert(`Delete action for row with Customer ID.: ${record["Customer ID"]}`);
  };

  const handleSaveChanges = () => {
    alert("Save Changes action");
    closeModal();
  };

  const handleFilterChange = (newFilters) => {
    const { confirmed, activeOrder } = newFilters;
    dispatch(
      updateFilters({
        confirmedFilter: confirmed,
        activeOrdersFilter: activeOrder,
      })
    );
  };

  return (
    <div>
      <h1>Customers</h1>
      <DataTable
        columns={columns}
        data={filteredData}
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        filters={filters}
        filterDisplayNames={filterDisplayNames}
        handleFilterChange={handleFilterChange}
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        fields={fields}
        handleSaveChanges={handleSaveChanges}
        editedRecord={editedRecord}
      />
    </div>
  );
};

export default Customers;
