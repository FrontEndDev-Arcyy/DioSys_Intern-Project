import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";


const AddPayrollModal = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);

  // Open/Close Modal Functions
  const showAddModal = () => setIsAddModalOpen(true);
  const handleAddOk = () => setIsAddModalOpen(false);
  const handleAddCancel = () => setIsAddModalOpen(false);

  const showActiveModal = () => setIsActiveModalOpen(true);
  const handleActiveOk = () => setIsActiveModalOpen(false);
  const handleActiveCancel = () => setIsActiveModalOpen(false);

  const showArchiveModal = () => setIsArchiveModalOpen(true);
  const handleArchiveOk = () => setIsArchiveModalOpen(false);
  const handleArchiveCancel = () => setIsArchiveModalOpen(false);

  return (
    <>
      {/* Add & Upload Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddModal}
          style={{
            backgroundColor: "#0D5B10",
            borderColor: "#0D5B10",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 20px",
          }}
        >
          Add Payroll
        </Button>
      </div>

      {/* Active & Archive Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={showActiveModal}
          style={{
            backgroundColor: "#73C041", // Light green color
            borderColor: "#73C041",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 20px",
          }}
        >
          Active
        </Button>

        <Button
          type="default"
          onClick={showArchiveModal}
          style={{
            backgroundColor: "white",
            borderColor: "#0D5B10",
            color: "#0D5B10",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 20px",
          }}
        >
          Archive
        </Button>
      </div>

      {/* Add Modal */}
      <Modal 
        open={isAddModalOpen} 
        onOk={handleAddOk} 
        onCancel={handleAddCancel}
        width={800}
        footer={null} // Removes default "OK" and "Cancel" buttons
      >
        {/* Employee Details */}
        <h3 style={{ backgroundColor: "#0D5B10", color: "#FFFFFF", padding: "5px", marginTop: "10px", marginBottom: "10px", fontWeight:"bold"}}>PAYROLL</h3>
        <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>EMPLOYEE DETAILS</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
          <Input placeholder="Name" />
          <Input placeholder="Monthly Payment" />
          <Input placeholder="Basic (bi-monthly)" />
          <Input placeholder="Holiday" />
          <Input placeholder="Total Gross Payment" />
        </div>
        {/* Deductions */}
          <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>DEDUCTIONS</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
            <Input placeholder="Cash Loan" />
            <Input placeholder="SSS" />
            <select style={{ padding: "8px", borderRadius: "4px", borderColor: "#d9d9d9" }}>
              <option value="option1">Health Insurance</option>
              <option value="option2">Philhealth</option>
            </select>
            <Input placeholder="MPL" />
            <Input placeholder="Others" />
          </div>
          <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>COMPUTATION AND SUMMARY</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
            <Input placeholder="Total Deductions" />
            <Input placeholder="Net Pay" />
          </div>
          {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button style={{ borderColor: "#0D5B10", color: "#0D5B10" }} onClick={handleAddCancel}>Cancel</Button>
          <Button type="primary" style={{ background: "#0D5B10", borderColor: "#0D5B10" }}>Submit</Button>
        </div>
      </Modal>
    </>
  );
};

export default AddPayrollModal;
