import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import EmployeesModal from "../Employees/EmployeesModal"; 

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Date of Hire",
    dataIndex: "dateOfHire",
    key: "dateOfHire",
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
  { key: "1", fullName: "John Doe", position: "Manager", department: "Sales", dateOfHire: "2020-01-15", status: "Active" },
  { key: "2", fullName: "Jane Smith", position: "Developer", department: "IT", dateOfHire: "2019-06-23", status: "Active" },
  { key: "3", fullName: "Michael Johnson", position: "Designer", department: "Marketing", dateOfHire: "2021-09-10", status: "On Leave" },
  { key: "4", fullName: "Emily Davis", position: "Accountant", department: "Finance", dateOfHire: "2018-04-30", status: "Active" },
  { key: "5", fullName: "Robert Brown", position: "HR Specialist", department: "Human Resources", dateOfHire: "2017-11-12", status: "Inactive" },
];

const EmployeesTable = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Add Button & Upload File */}
      <EmployeesModal /> {/* ✅ Renders the add record button and modal */}

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

export default EmployeesTable;
