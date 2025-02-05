import React, { useState } from "react";
import { Button, Modal, Input, Upload } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

const AddRecordModal = () => {
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
          + Add
        </Button>

        <Upload beforeUpload={() => false} showUploadList={false}>
          <Button
            icon={<UploadOutlined />}
            style={{
              backgroundColor: "#0D5B10",
              borderColor: "#0D5B10",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "8px 20px",
            }}
          >
            Upload File Excel
          </Button>
        </Upload>
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
      <Modal title="Add New Record" open={isAddModalOpen} onOk={handleAddOk} onCancel={handleAddCancel}>
        <Input placeholder="Groom Name" style={{ marginBottom: "10px" }} />
        <Input placeholder="Bride Name" style={{ marginBottom: "10px" }} />
        <Input placeholder="Address" style={{ marginBottom: "10px" }} />
        <Input placeholder="Date Married" type="date" style={{ marginBottom: "10px" }} />
        <Input placeholder="Officiating Category" style={{ marginBottom: "10px" }} />
        <Input placeholder="Status" style={{ marginBottom: "10px" }} />
      </Modal>

      {/* Active Modal */}
      <Modal title="Active Records" open={isActiveModalOpen} onOk={handleActiveOk} onCancel={handleActiveCancel}>
        <p>Here you can view all active records.</p>
      </Modal>

      {/* Archive Modal */}
      <Modal title="Archived Records" open={isArchiveModalOpen} onOk={handleArchiveOk} onCancel={handleArchiveCancel}>
        <p>Here you can view all archived records.</p>
      </Modal>
    </>
  );
};

export default AddRecordModal;
