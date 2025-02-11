import React, { useState } from "react";
import { Table, Input, Card, Button, Modal, Select, Collapse } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Panel } = Collapse;

const columns = [
  {
    title: "ReligiousOrganization",
    dataIndex: "religiousOrganization",
    key: "religiousOrganization",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Rel.OrganizationHead",
    dataIndex: "relOrganizationHead",
    key: "relOrganizationHead",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Organization Coordinator",
    dataindex: "organizationCoordinator",
    key: "organizationCoordinator",
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
  religousOrganization: "Cell Data",
  relOrganizationHead: "Cell Data",
  organizationCoordinator: "Cell Data",
  Actions: "Cell Data",
}));

const SystemOrganization = () => {
  const [activeTab, setActiveTab] = useState("organization");
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
        border: "none",
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
            color: activeTab === "parish" ? "#0D5B10" : "white",
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
            color: activeTab === "role" ? "#0D5B10" : "white",
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
            color: activeTab === "organization" ? "#0D5B10" : "white",
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
        <Button type="primary" style={{ backgroundColor: "#0D5B10", border: "none" }} onClick={() => setIsAddModalOpen(true)}>
          + Add Organization
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

      {/* Add Organization Modal */}
      <OrganizationModal isAddModalOpen={isAddModalOpen} handleAddCancel={handleAddCancel} />
    </Card>
  );
};

const OrganizationModal = ({ isAddModalOpen, handleAddCancel }) => (
  <Modal
    title="Add Organization"
    open={isAddModalOpen}
    onCancel={handleAddCancel}
    footer={null}
    width={900}
  >
    <Collapse defaultActiveKey={["1", "2"]} expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}>
      {/* Organization Information Section */}
      <Panel header={<span style={{ color: "#FFFFFF", fontWeight: "bold" }}>NEW ORGANIZATION</span>} key="1" style={{ backgroundColor: "#0D5B10" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
          <Input placeholder="Religious Organization" />
          <Input placeholder="Rel. Organization Head" />
          <Input placeholder="Organization Coordinator" />
        </div>
      </Panel>
    </Collapse>
    {/* Buttons aligned to bottom-right */}
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
      <Button style={{ borderColor: "#0D5B10", color: "#0D5B10", borderRadius: "20px", padding: "8px 20px" }} onClick={handleAddCancel}>
        Cancel
      </Button>
      <Button type="primary" style={{ background: "#73C041", borderColor: "#73C041", color: "white", borderRadius: "20px", padding: "8px 20px" }}>
        Submit
      </Button>
    </div>
  </Modal>
);

export default SystemOrganization;
