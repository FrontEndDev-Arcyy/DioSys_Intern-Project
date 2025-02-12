import React, { useState } from "react";
import { Table } from "antd";
import ReportDropdown from "./ReportDropdown";
import ReportPrint from "./ReportPrint";

const columns = [
  {
    title: "Service Title",
    dataIndex: "ServiceTitle",
    key: "ServiceTitle",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Booking Date",
    dataIndex: "BookingDate",
    key: "BookingDate",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
];

const data = [
  { key: "1", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Pending" },
  { key: "2", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Approved" },
  { key: "3", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Pending" },
  { key: "4", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Rejected" },
  { key: "5", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Approved" },
];

const ReportTable = () => {
  const [filter, setFilter] = useState(""); // State for dropdown filter

  // Apply filter to table data
  const filteredData = filter
    ? data.filter((item) => item.status.toLowerCase() === filter)
    : data;

  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Align Dropdown and Print Button to the Top Left */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "10px", marginBottom: "15px" }}>
        <ReportDropdown onFilterChange={setFilter} />
        <ReportPrint />
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={filteredData}
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

export default ReportTable;
