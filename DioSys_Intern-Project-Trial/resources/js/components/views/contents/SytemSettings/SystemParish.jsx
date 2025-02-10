import React, { useState } from "react";
import { Table, Input, Card, Button, Modal, Select, Collapse } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Panel } = Collapse;

const columns = [
  {
    title: "Church",
    dataIndex: "Church",
    key: "Church",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
];

const data = Array.from({ length: 6 }, (_, i) => ({
  key: i + 1,
  Church: "Cell Data",
  Actions: "Cell Data",
}));

const SystemParish = () => {
  const [activeTab, setActiveTab] = useState("parish");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddCancel = () => {
    setIsAddModalOpen(false);
  };

  return (
    <Card 
      style={{ 
        borderRadius: "10px", 
        background: "#f8f8f8", 
        padding: "20px", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)", 
        border: "none"
      }}
    >
      {/* Tab Navigation */}
      <div style={{ display: "flex", width: "fit-content", gap: "5px", marginBottom: "20px" }}>
        <div
          onClick={() => setActiveTab("parish")}
          style={{
            width: "181px", 
            textAlign: "center",
            padding: "10px 20px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            backgroundColor: activeTab === "parish" ? "white" : "#69B31E",
            color: activeTab === "parish" ? "#69B31E" : "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            border: activeTab === "parish" ? "none" : "1px solid #69B31E",
          }}
        >
          Parish
        </div>

        <div
          onClick={() => setActiveTab("role")}
          style={{
            width: "181px", 
            textAlign: "center",
            padding: "10px 20px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            backgroundColor: activeTab === "role" ? "white" : "#69B31E",
            color: activeTab === "role" ? "#69B31E" : "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            border: activeTab === "role" ? "none" : "1px solid #69B31E",
          }}
        >
          Role
        </div>
        <div
          onClick={() => setActiveTab("organization")}
          style={{
            width: "181px", 
            textAlign: "center",
            padding: "10px 20px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            backgroundColor: activeTab === "organization" ? "white" : "#69B31E",
            color: activeTab === "organization" ? "#69B31E" : "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            border: activeTab === "organization" ? "none" : "1px solid #69B31E",
          }}
        >
          Organization
        </div>
       </div>

      {/* Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Button type="primary" style={{ backgroundColor:"#0D5B10", border: "none" }} onClick={() => setIsAddModalOpen(true)}>
          + Add Parish
        </Button>
        <Button type="default" style={{ border: "1px solid green", color: "#FFFFFF", backgroundColor: "#69B31E" }}>
          Active
        </Button>
        <Button type="default" style={{ border: "1px solid #888", color: "#888" }}>
          Archive
        </Button>
      </div>

      {/* Search Input */}
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{
          width: "250px",
          marginBottom: "20px",
          borderRadius: "20px",
          border: "1px solid #ddd",
        }}
      />

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 6,
          showSizeChanger: false,
          showTotal: (total, range) => (
            <span>
              <b>Results</b> {range[0]} to {total} records
            </span>
          ),
        }}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E0E0E0",
        }}
      />

      {/* Add Parish Modal */}
      <ParishModal isAddModalOpen={isAddModalOpen} handleAddCancel={handleAddCancel} />
    </Card>
  );
};

const ParishModal = ({ isAddModalOpen, handleAddCancel }) => (
  <Modal
    title="Add Parish"
    open={isAddModalOpen}
    onCancel={handleAddCancel}
    footer={null}
    width={900}
  >
    <Collapse defaultActiveKey={["1", "2"]} expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}>
      {/* Account Information Section */}
      <Panel header="PARISH GENERAL INFORMATION" key="1" style={{ backgroundColor: "#0D5B10", color: "white", fontWeight: "bold" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
          <Input placeholder="Name of Parish" />
          <Input placeholder="Titular Patron" />
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
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
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #E0E0E0", borderRadius: "10px", backgroundColor: "#f8f8f8" }}>
      {/* Data Privacy Act Content */}
      <h4 style={{ color: "red", fontWeight: "bold", marginBottom: "5px" }}>DATA PRIVACY ACT OF 2012</h4>
      <p style={{ fontSize: "12px" }}>
        The processing of personal information shall be subject to compliance with the requirements of the Data Privacy Act of 2012 and other laws allowing disclosure of information and adherence to the principles of transparency, legitimate purpose, and proportionality.
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
);

export default SystemParish;
