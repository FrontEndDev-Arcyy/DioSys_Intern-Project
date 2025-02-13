import React, { useState } from "react";
import { Table, Button, Space} from "antd";
import { SettingOutlined, FolderOpenOutlined, EditOutlined} from "@ant-design/icons";


const columns = [
  {
    title: "Date of Booking",
    dataIndex: "dateOfBooking",
    key: "dateOfBooking",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Time Start",
    dataIndex: "timeStart",
    key: "timeStart",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Time End",
    dataIndex: "timeEnd",
    key: "timeEnd",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Number of Participatants",
    dataIndex: "numberOfParticipants",
    key: "numberOfParticipants",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Venue",
    dataIndex: "venue",
    key: "venue",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Requesting Person/Organization",
    dataIndex: "requestingPersonOrganization",
    key: "requestingPersonOrganization",
    render: (text) => <span style={{ color: "black" }}>{text}</span>,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Button 
          icon={<SettingOutlined />} 
          type="link" 
          onClick={() => handleSettings("settings", record)} 
        />
        <Button 
          icon={<FolderOpenOutlined />} 
          type="link" 
          onClick={() => handleSettings("archive", record)} 
        />
        <Button 
          icon={<EditOutlined />} 
          type="link" 
          onClick={() => handleSettings("edit", record)} 
        />
      </Space>
      ),
  },
];

const data = [
  { key: "1", dateOfBooking: "2024-03-10", timeStart: "10:00AM", timeEnd: "12:00PM", numberOfParticipants: "50", venue:"St.Joseph Cathedral", capacity: "100", requestingPersonOrganization: "Robert Christian Madlos (Wedding)", actions: "" },
  { key: "2", dateOfBooking: "2024-03-12", timeStart: "2:00PM", timeEnd: "4:00PM", numberOfParticipants: "30", 
  venue:"Our Lady of Loudres Parish", capacity: "80", requestingPersonOrganization: "Mc Jon Ursos (Baptism)", actions: 
  "" },
  { key: "3", dateOfBooking: "2024-03-15", timeStart: "9:00AM", timeEnd: "11:30AM", numberOfParticipants: "70", 
  venue:"Holy Trinity Church", capacity: "120", requestingPersonOrganization: "Kenneth Beltran(Practice)", actions: 
  "" },
  { key: "4", dateOfBooking: "2024-03-18", timeStart: "1:00PM", timeEnd: "3:30PM", numberOfParticipants: "40", 
  venue:"Sacred Heart Parish", capacity: "90", requestingPersonOrganization: "Charle Puth (Mass)", actions: 
  "" },
  { key: "5", dateOfBooking: "2024-03-20", timeStart: "6:00PM", timeEnd: "8:00PM", numberOfParticipants: "100", 
  venue:"St.Michael Parish", capacity: "150", requestingPersonOrganization: "Chicob Ebarle (Fellowship)", actions: 
  "" },
  { key: "6", dateOfBooking: "2024-03-25", timeStart: "8:00AM", timeEnd: "10:00AM", numberOfParticipants: "60", 
  venue:"St.Peter Chapel", capacity: "90", requestingPersonOrganization: "Angelo Immortal (Funeral Mass)", actions: 
  "" },
];

const VenueTable= () => {
  const [filter, setFilter] = useState(""); // State for dropdown filter

  // Apply filter to table data
  const filteredData = filter
    ? data.filter((item) => item.status.toLowerCase() === filter)
    : data;

  return (
    <div style={{ padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Align Dropdown and Print Button to the Top Left */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "10px", marginBottom: "15px" }}>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 6, showSizeChanger: false, showTotal: (total, range) => <span><b>Results</b> {range[0]} to {total} records</span>, }}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #E0E0E0",
        }}
      />
    </div>
  );
};

export default VenueTable;
