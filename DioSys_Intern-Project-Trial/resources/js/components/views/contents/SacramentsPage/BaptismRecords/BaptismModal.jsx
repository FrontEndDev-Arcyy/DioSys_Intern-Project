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
           Add Baptism
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
      <Modal 
  title="Form" 
  open={isAddModalOpen} 
  onOk={handleAddOk} 
  onCancel={handleAddCancel}
  width={800}
  footer={null} //  Removes default "OK" and "Cancel" buttons
>
  <p>Parishioner's Name</p>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
  <Input placeholder="" />
  <Button type="primary" style={{ background: "#73C041", borderColor: "#73C041", width: '150px', borderRadius: '20px' }}>Add Profile</Button>
  </div>
  {/* Parishioner Information */}
  <h3 style={{ backgroundColor: "#0D5B10", color: "white", padding: "5px", marginTop: "10px", marginBottom: "10px" }}>PARISHIONER INFORMATION</h3>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
    <Input placeholder="First Name" />
    <Input placeholder="Middle Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Date of Birth" type="date" />
    <Input placeholder="Age" />
    <Input placeholder="Place of Birth" />
    <Input placeholder="Gender" />
    <Input placeholder="Citizenship" />
    <Input placeholder="Religion" />
    <Input placeholder="Civil Status" />
    <Input placeholder="Country" />
    <Input placeholder="State/Province" />
    <Input placeholder="City/Municipality" />
    <Input placeholder="Zipcode" />
    <Input placeholder="Barangay" />
    <Input placeholder="Complete Address" />
  </div>

  {/* Parents Information */}
  <h3 style={{ backgroundColor: "#0D5B10", color: "white", padding: "5px", marginTop: "10px", marginBottom: "10px" }}>PARENTS INFORMATION</h3>
  <p style={{ color:"#0D5B10", fontWeight: "bold" }}>Father's Information</p>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
    <Input placeholder="First Name" />
    <Input placeholder="Middle Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Residence" />
    <Input placeholder="Email" />
    <Input placeholder="Gender" />
    <Input placeholder="Birthdate" type="date" />
    <Input placeholder="Age" />
    <Input placeholder="Residence" />
  </div>
  <p style={{ color:"#0D5B10", fontWeight: "bold" }}>Mother's Information</p>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
    <Input placeholder="First Name" />
    <Input placeholder="Middle Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Residence" />
    <Input placeholder="Email" />
    <Input placeholder="Gender" />
    <Input placeholder="Birthdate" type="date" />
    <Input placeholder="Age" />
    <Input placeholder="Residence" />
  </div>

  {/* Baptismal Information */}
  <h3 style={{ backgroundColor: "#0D5B10", color: "white", padding: "5px", marginTop: "10px", marginBottom: "10px" }}>BAPTISMAL INFORMATION</h3>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
    <Input placeholder="Date of Baptism" type="date" />
    <Input placeholder="Place of Baptism" />
    <Input placeholder="Officiating Priest" />
    <Input placeholder="Remarks" />
  </div>

  {/* Godparents Information */}
  <h3 style={{ backgroundColor: "#0D5B10", color: "white", padding: "5px", marginTop: "10px", marginBottom: "10px" }}>GODPARENTS INFORMATION</h3>
  <p style={{ color:"#0D5B10", fontWeight: "bold" }}>Godparent 1</p>
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
    <Input placeholder="First Name" />
    <Input placeholder="Middle Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Residence" />
    <Input placeholder="Email" />
    <Input placeholder="Gender" />
    <Input placeholder="Birthdate" type="date" />
    <Input placeholder="Age" />
    <Input placeholder="Residence" />
  </div>

  <Button type="primary" style={{ background: "#0D5B10", borderColor: "#0D5B10", display:"flex", justifySelf:"end" }}>Add another godparent</Button>

  {/* Data Privacy */}
  <div style={{ background: "#FAFAFA", border: "1px solid #E0E0E0", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginTop: "10px" }}>
    <h4 style={{ color: "red", fontWeight: "bold" }}>DATA PRIVACY ACT OF 2012</h4>
    <p style={{ fontSize: "12px" }}>
      The processing of personal information shall be allowed, subject to compliance with the requirements of this Act
      and other laws allowing disclosure of information to the public and adherence to the principles of transparency,
      legitimate purpose, and proportionality.
    </p>
  </div>

  {/* Action Buttons */}
  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
    <Button style={{ borderColor: "#0D5B10", color: "#0D5B10" }}>Cancel</Button>
    <Button type="primary" style={{ background: "#0D5B10", borderColor: "#0D5B10" }}>Save</Button>
  </div>
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
