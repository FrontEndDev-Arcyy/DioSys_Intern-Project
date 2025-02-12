import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Groom Name",
    dataIndex: "groom",
    key: "groom",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Bride Name",
    dataIndex: "bride",
    key: "bride",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Date Married",
    dataIndex: "dateMarried",
    key: "dateMarried",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Officiating Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <span style={{ color: "black" }}>⚙️</span> // Placeholder for actions
    ),
  },
];

const data = [
  { key: "1", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
  { key: "2", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
  { key: "3", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
  { key: "4", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
  { key: "5", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
  { key: "6", groom: "Cell Data", bride: "Cell Data", address: "Cell Data", dateMarried: "Cell Data", category: "Cell Data", status: "Cell Data" },
];

const TableComponent = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "10px" }}>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ width: "200px", borderRadius: "20px" }}
        />
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6, showSizeChanger: false }}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E0E0E0",
        }}
      />
    </div>
  );
};

export default TableComponent;
