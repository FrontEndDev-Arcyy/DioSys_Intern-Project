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
    fixed: "left",
    width:150,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Monthly Pay",
    dataIndex: "monthlyPay",
    key: "monthlyPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 120,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Basic (bi-monthly)",
    dataIndex: "basicBiMonthly",
    key: "basicBiMonthly",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 130,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Holiday",
    dataIndex: "holiday",
    key: "holiday",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 100,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Total Gross Pay",
    dataIndex: "totalGrossPay",
    key: "totalGrossPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 130,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Cash Loan",
    dataIndex: "cashLoan",
    key: "cashLoan",  
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 120,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "SSS",
    dataIndex: "sss",
    key: "sss",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 100,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Insurance",
    dataIndex: "insurance",
    key: "insurance",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 120,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "MPL",
    dataIndex: "mpl",
    key: "mpl",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 100,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Others",
    dataIndex: "others",
    key: "others",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 100,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Total Deductions",
    dataIndex: "totalDeductions",
    key: "totalDeductions",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 150,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Net Pay",
    dataIndex: "netPay",
    key: "netPay",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
    width: 120,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
  },
  {
    title: "Actions",
    key: "actions",
    width: 100,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F1F5F9" },
    }),
    render: () => (
      <span style={{ color: "black" }}>⚙️</span> // Placeholder for actions
    ),
  },
];

const data = [
{ key: "1", fullName: "Robert Christian Gwapo", monthlyPay: "₱30,000",
  basicBiMonthly: "₱15,00", holiday: "₱2,000", totalGrossPay: "₱32,000",
  cashLoan: "₱2,500", sss: "₱1,200", insurance: "₱900", mpl: "₱500", others: "₱1,000", totalDeductions: "₱6,900", netPay: "Not paid", actions: "" },
{ key: "2", fullName: "Bossken", monthlyPay: "₱25,000",
  basicBiMonthly: "₱12,500", holiday: "1,500", totalGrossPay: "₱26,500",
  cashLoan: "₱2,000", sss: "₱1,000", insurance: "₱750", mpl: "₱900", others: "₱700", 
  totalDeductions: "₱5,800", netPay: "Paid", actions: "" },
{ key: "3", fullName: "Mckenz", monthlyPay: "₱35,000",
  basicBiMonthly: "₱17,500", holiday: "₱2,500", totalGrossPay: "₱37,500",
  cashLoan: "₱3,000", sss: "1,400", insurance: "₱1,050", mpl: "₱550", others: "₱1,200", 
  totalDeductions: "₱8,100", netPay: "Not paid", actions: "" },
{ key: "4", fullName: "Shamickey", monthlyPay: "₱28,000",
  basicBiMonthly: "₱14,000", holiday: "₱1,800", totalGrossPay: "₱29,800",
  cashLoan: "₱2,200", sss: "₱1,120", insurance: "₱840", mpl: "₱480", others: "₱950", 
  totalDeductions: "₱6,340", netPay: "Not paid", actions: "" },
{ key: "5", fullName: "Charle Puth", monthlyPay: "₱32,000",
  basicBiMonthly: "₱16,000", holiday: "₱2,200", totalGrossPay: "₱34,200",
  cashLoan: "₱2,800", sss: "₱1,280", insurance: "₱960", mpl: "₱1,100", others: "₱850", 
  totalDeductions: "₱7,510", netPay: "Not paid", actions: "" },
{ key: "6", fullName: "Kelra", monthlyPay: "₱40,000",
  basicBiMonthly: "₱20,000", holiday: "₱3,000", totalGrossPay: "₱43,000",
  cashLoan: "₱3,500", sss: "₱1,600", insurance: "₱1,200", mpl: "₱1,500", others: "₱1,000", 
  totalDeductions: "₱9,400", netPay: "Not Paid", actions: "" },
];

const PayrollTable = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", 
boxShadow: "0 2px 10px rgba(0,0,0,0.1)", overflowX:"auto", }}>
      
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
        scroll={{ x: 1200 }}
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
