import React, { useState } from "react";
import { Button, Modal, Input, Select, Collapse } from "antd";
import { FilterOutlined, DownOutlined } from "@ant-design/icons"; // Import icons

const { Option } = Select;
const { Panel } = Collapse;

const EmployeesModal = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);

  // Open/Close Modal Functions
  const showAddModal = () => setIsAddModalOpen(true);
  const handleAddCancel = () => setIsAddModalOpen(false);

  const showFilterModal = () => setIsFilterModalOpen(true);
  const handleFilterCancel = () => setIsFilterModalOpen(false);

  const showActiveModal = () => setIsActiveModalOpen(true);
  const handleActiveCancel = () => setIsActiveModalOpen(false);

  const showArchiveModal = () => setIsArchiveModalOpen(true);
  const handleArchiveCancel = () => setIsArchiveModalOpen(false);

  return (
    <>
      {/* Button Group */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
        {/* Top Row (Filter + Add Employee) */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="primary"
            icon={<FilterOutlined />} // ✅ Filter icon
            onClick={showFilterModal}
            style={{
              backgroundColor: "#0D5B10",
              borderColor: "#0D5B10",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "8px 20px",
            }}
          >
            Filter
          </Button>

          <Button
            type="primary"
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
            + Add Employee
          </Button>
        </div>

        {/* Bottom Row (Active + Archive) */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="primary"
            onClick={showActiveModal}
            style={{
              backgroundColor: "#73C041",
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
      </div>

      {/* Add Employee Modal */}
      <Modal
        title="Add Employee"
        open={isAddModalOpen}
        onCancel={handleAddCancel}
        footer={null}
        width={900}
      >
        <Collapse defaultActiveKey={["1", "2"]} expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}>
          {/* Account Information Section */}
          <Panel header="ACCOUNT INFORMATION" key="1" style={{ backgroundColor: "#0D5B10", color: "white", fontWeight: "bold" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <Input placeholder="Username" />
              <Input placeholder="E-mail" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Church Assigned" />
              <Input placeholder="Role" />
              <Select placeholder="Position">
                <Option value="Priest">Priest</Option>
                <Option value="Clergy">Clergy</Option>
              </Select>
            </div>
          </Panel>

          {/* Parishioner Information Section */}
          <Panel header="PARISHIONER INFORMATION" key="2" style={{ backgroundColor: "#0D5B10", color: "white", fontWeight: "bold" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <Input placeholder="First Name" />
              <Input placeholder="Middle Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Name Extension" />
              <Input placeholder="Date of Sacerdotal Ordination" type="date" />
              <Input placeholder="No. of Years in the Ministry" type="number" />
              <Input placeholder="Formation" />
              <Input placeholder="Birthdate" type="date" />
              <Input placeholder="Age" type="number" />
              <Select placeholder="Contact No.">
                <Option value="+1">+1</Option>
                <Option value="+44">+44</Option>
              </Select>
              <Input placeholder="Email" />
              <Input placeholder="Job Description" />
            </div>
          </Panel>
        </Collapse>

        {/* Data Privacy Act + Buttons Section */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #E0E0E0", borderRadius: "10px", background: "#FAFAFA" }}>
          {/* Data Privacy Act Content */}
          <h4 style={{ color: "red", fontWeight: "bold", marginBottom: "5px" }}>DATA PRIVACY ACT OF 2012</h4>
          <p style={{ fontSize: "12px" }}>
            The processing of personal information shall be allowed, subject to compliance with the requirements of this Act
            and other laws allowing disclosure of information to the public and adherence to the principles of transparency,
            legitimate purpose, and proportionality.
          </p>
        </div>

        {/* Buttons aligned to bottom-right */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
          <Button style={{ borderColor: "#0D5B10", color: "#0D5B10", borderRadius: "20px", padding: "8px 20px" }} onClick={handleAddCancel}>
            Cancel
          </Button>
          <Button type="primary" style={{ background: "#73C041", borderColor: "#73C041", color: "white", borderRadius: "20px", padding: "8px 20px" }}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EmployeesModal;
