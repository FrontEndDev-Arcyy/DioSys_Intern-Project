import React from "react";
import { Calendar, Badge, Button, Layout } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import "./resources/css/app.css"; // Custom CSS for styling

const getListData = (value) => {
  let listData = [];
  switch (value.date()) {
    case 8:
      listData = [{ type: "warning", content: "Meeting with team." }];
      break;
    case 10:
      listData = [
        { type: "success", content: "Project deadline" },
        { type: "error", content: "Client feedback session" },
      ];
      break;
    default:
  }
  return listData || [];
};

const App = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="calendar-container" style={{ minWidth: '75vw', marginLeft: '90px', backgroundColor: 'white'}}>
      {/* Sidebar Filter */}
      <div className="filter-panel" style={{ width: '480px', position: 'relative', right: '100px', top: '45px' }}>
        <h3 style={{ width: '100%' }}>Filter</h3>
        <hr />
      </div>

      {/* Calendar Section */}
      <div className="calendar-section">
        {/* Navigation Buttons */}
        <div className="calendar-header">
          <Button type="text" icon={<LeftOutlined />} />
          <Button type="text" style={{ backgroundColor: 'white', color: 'green', fontWeight: 'bold', fontSize: '20px' }}>Today</Button>
          <Button type="text" icon={<RightOutlined />} />
        </div>

        {/* View Options */}
        <div className="view-options">
          <Button type="text" className="active-view">Calendar</Button>
          <Button type="text">List View</Button>
          <Button type="text">✔ Completed</Button>
        </div>

        {/* Calendar Component */}
        <Calendar dateCellRender={dateCellRender} />
      </div>
    </div>
  );
};

export default App;
