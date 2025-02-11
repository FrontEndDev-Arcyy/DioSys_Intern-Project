import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import EmployeesModal from "../Employees/EmployessModal"; // ✅ Import the modal component

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
  { key: "1", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Cell Data" },
  { key: "2", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Cell Data" },
  { key: "3", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Cell Data" },
  { key: "4", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Cell Data" },
  { key: "5", ServiceTitle: "Cell Data", BookingDate: "Cell Data", status: "Cell Data" },
];

const ReportTable = () => {
  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
     
    
      

      /* Table */
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

export default ReportTable;
