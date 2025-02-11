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
        title="Payroll" 
        open={isAddModalOpen} 
        onOk={handleAddOk} 
        onCancel={handleAddCancel}
        width={800}
        footer={null} // Removes default "OK" and "Cancel" buttons
      >
        {/* Employee Details */}
        <h3 style={{ backgroundColor: "#0D5B10", color: "white", padding: "5px", marginTop: "10px", marginBottom: "10px" }}>PAYROLL</h3>
        <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>Employee Details</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
          <Input placeholder="Name" />
          <Input placeholder="Monthly Payment" />
          <Input placeholder="Basic (bi-monthly)" />
          <Input placeholder="Holiday" />
          <Input placeholder="Total Gross Payment" />
          <Input placeholder="Birthdate" type="date" />
        </div>
        {/* Deductions */}
        <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>Deductions</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
          <Input placeholder="SSS" />
          <Input placeholder="Insurance" />
          <Input placeholder="MPL" />
          <Input placeholder="Others" />
        </div>
        <h4 style={{ color:"#0D5B10", fontWeight: "bold" }}>Computations and Summary</h4>
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
