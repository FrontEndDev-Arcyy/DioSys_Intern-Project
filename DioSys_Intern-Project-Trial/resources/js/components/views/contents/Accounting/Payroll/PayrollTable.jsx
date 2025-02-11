import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PayrollModal from '../Payroll/PayrollModal'

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Monthly Pay",
    dataIndex: "monthlyPay",
    key: "monthlyPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Basic (bi-monthly)",
    dataIndex: "basicBiMonthly",
    key: "basicBiMonthly",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Holiday",
    dataIndex: "holiday",
    key: "holiday",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Total Gross Pay",
    dataIndex: "totalGrossPay",
    key: "totalGrossPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Cash Loan",
    dataIndex: "cashLoan",
    key: "cashLoan",  
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "SSS",
    dataIndex: "sss",
    key: "sss",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Insurance",
    dataIndex: "insurance",
    key: "insurance",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "MPL",
    dataIndex: "mpl",
    key: "mpl",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Others",
    dataIndex: "others",
    key: "others",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Total Deductions",
    dataIndex: "totalDeductions",
    key: "totalDeductions",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Net Pay",
    dataIndex: "netPay",
    key: "netPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <span style={{ color: "black" }}></span> // Placeholder for actions
    ),
  },
];

const data = [
  { key: "1", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
  { key: "2", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
  { key: "3", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
  { key: "4", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
  { key: "5", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
  { key: "6", fullName: "Cell Data", placeOfConversion: "Cell Data", 
dateOfConversion: "Cell Data", officiatingPriest: "Cell Data", status: 
"Cell Data" },
];

const PayrollTable = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", 
boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Add Button & Upload File */}
      <PayrollModal /> {/* Renders the add record button and modal */}

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "flex-start", 
marginBottom: "10px" }}>
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
        pagination={{ pageSize: 6, showSizeChanger: false,showTotal: (total, range) => 
            <span>
              <b>Results</b> {range[0]} to {total} records
            </span> }}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E0E0E0",
        }}
      />
    </div>
  );
};

export default PayrollTable;
