import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import UsersPageModal from "../UsersPage/UsersPageModal";

const { Option } = Select;

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Church Assigned",
    dataIndex: "church",
    key: "church",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => <span>{record.status === "Active" ? "✅" : "⏳"}</span>,
  },
];

const activeData = [
  { key: "1", username: "pastor_john", email: "john.doe@email.com", church: "St. Peter's Church", role: "Senior Pastor", status: "Active" },
  { key: "2", username: "reverend_sam", email: "samuel.smith@email.com", church: "Grace Community Church", role: "Associate Pastor", status: "Active" },
];

const archiveData = [
  { key: "3", username: "father_mike", email: "mike.johnson@email.com", church: "Holy Trinity Cathedral", role: "Parish Priest", status: "Archived" },
  { key: "4", username: "bishop_tom", email: "tom.williams@email.com", church: "St. Mary's Diocese", role: "Bishop", status: "Archived" },
];

const UsersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      {/* Button Arrangement */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
          style={{
            background: "#0D5B10",
            borderColor: "#0D5B10",
            borderRadius: "20px",
            padding: "8px 20px",
          }}
        >
         Add User
        </Button>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={() => setActiveTab("active")}
            style={{ background: activeTab === "active" ? "#73C041" : "white", borderColor: "#73C041", color: activeTab === "active" ? "white" : "#73C041", borderRadius: "20px", padding: "8px 20px" }}
          >
            Active
          </Button>
          <Button
            onClick={() => setActiveTab("archive")}
            style={{ borderColor: "#0D5B10", color: activeTab === "archive" ? "white" : "#0D5B10", background: activeTab === "archive" ? "#0D5B10" : "white", borderRadius: "20px", padding: "8px 20px" }}
          >
            Archive
          </Button>
        </div>
      </div>

      {/* Search Bar & Pagination */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <Input placeholder="Search..." prefix={<SearchOutlined />} style={{ width: "200px", borderRadius: "20px" }} />
        <Select defaultValue="50" style={{ width: 100 }}>
          <Option value="10">10 / Page</Option>
          <Option value="20">20 / Page</Option>
          <Option value="50">50 / Page</Option>
        </Select>
      </div>
      
      {/* Table Switch */}
      {activeTab === "active" ? (
        <Table
          columns={columns}
          dataSource={activeData}
          pagination={{ pageSize: 6, showSizeChanger: false }}
          style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #E0E0E0" }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={archiveData}
          pagination={{ pageSize: 6, showSizeChanger: false }}
          style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #E0E0E0" }}
        />
      )}

      {/* Users Modal */}
      <UsersPageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default UsersTable;
