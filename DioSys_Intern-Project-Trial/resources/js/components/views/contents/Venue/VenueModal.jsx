import React, { useState } from "react";
import { Button, Modal, Input, Upload } from "antd";
import { PlusOutlined, ItalicOutlined } from "@ant-design/icons";

const VenueModal = () => {
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
          Add Booking
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
        width={900}
        footer={null} // Removes default "OK" and "Cancel" buttons
      >
        {/* Employee Details */}
        <div>
          <h3 style={{ backgroundColor: "#0D5B10", color: "#FFFFFF", padding: "5px", marginTop: "10px", marginBottom: "10px", fontWeight:"bold"}}>BOOKING</h3>
          <Input placeholder="Date of Booking" style={{ marginBottom: "10px" }} />
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <Input placeholder="Time Start" style={{ flex: 1 }} />
            <Input placeholder="Time End" style={{ flex: 1 }} />
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <Input placeholder="Number of Participants" style={{ flex: 1 }} />
            <Input placeholder="Venue" style={{ flex: 1 }} />
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <Input placeholder="Capacity" style={{ flex: 1 }} />
            <Input placeholder="Person(s)/Organization(s)" style={{ flex: 1 }} />
          </div>
          <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>We wish to use the venue above.</p>
          <Input placeholder="Name of Requesting Person/Organization" style={{ marginBottom: "10px" }} />
          <Input placeholder="Contact No." type="number" minLength="11" maxLength="11" />
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

export default VenueModal;
