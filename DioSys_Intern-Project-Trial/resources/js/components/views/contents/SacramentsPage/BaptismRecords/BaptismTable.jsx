import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "groom",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Baptism Date",
    dataIndex: "baptismDate",
    key: "baptismDate",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Baptismal Place",
    dataIndex: "baptismalPlace",
    key: "baptismalPlace",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Officiating Category",
    dataIndex: "officiateCategory",
    key: "officiateCategory",
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
      <span style={{ color: "black" }}>⚙️</span> // Using an icon like your image
    ),
  },
];

const data = [
  { key: "1", fullName: "Hello", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
  { key: "2", fullName: "Cell Data", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
  { key: "3", fullName: "Cell Data", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
  { key: "4", fullName: "Cell Data", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
  { key: "5", fullName: "Cell Data", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
  { key: "6", fullName: "Cell Data", baptismDate: "Cell Data", baptismalPlace: "Cell Data", officiateCategory: "Cell Data", status: "Cell Data", actions: "Cell Data" },
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
