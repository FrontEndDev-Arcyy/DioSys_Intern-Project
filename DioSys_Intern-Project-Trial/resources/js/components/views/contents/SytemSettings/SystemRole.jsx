import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Actions",
    dataIndex: "Action",
    key: "Action",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
];

const data = [
  { key: "1", Name: "Cell Data", Date: "Cell Data" },
  { key: "2", Name: "Cell Data", Date: "Cell Data" },
  { key: "3", Name: "Cell Data", Date: "Cell Data" },
  { key: "4", Name: "Cell Data", Date: "Cell Data" },
  { key: "5", Name: "Cell Data", Date: "Cell Data" },
  { key: "6", Name: "Cell Data", Date: "Cell Data" },
];

const SystemRole = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
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
        pagination={{
          pageSize: 6,
          showSizeChanger: false,
          showTotal: (total, range) => <span><b>Results</b> {range[0]} to {range[1]} of {total} records</span>,
        }}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E0E0E0",
        }}
      />
    </div>
  );
};

export default SystemRole;