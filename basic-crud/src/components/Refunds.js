import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./DataTable";
import Modal from "./Modal";
import {
  selectFiltersData,
  addRefund,
  updateFilters,
} from "../redux/refundsSlice";

const Refunds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedRecord, setEditedRecord] = useState(null);
  const dispatch = useDispatch();

  const { fields, filters, columns, filterDisplayNames } = useSelector(
    (state) => state.refunds
  );
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
    alert(`Delete action for row with Refund ID.: ${record["Refund ID"]}`);
  };

  const handleSaveChanges = () => {
    dispatch(addRefund());
    closeModal();
  };

  const handleFilterChange = (newFilters) => {
    const { refStatus, partial, reason } = newFilters;
    dispatch(
      updateFilters({
        refStatusFilter: refStatus,
        partialFilter: partial,
        reasonFilter: reason,
      })
    );
  };

  return (
    <div>
      <h1>Refunds</h1>
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

export default Refunds;
