import React from "react";
import { Calendar, Badge, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./resources/css/app.css"; // Custom CSS for styling

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
    <div className="calendar-container">
      {/* Sidebar Filter */}
      <div className="filter-panel">
        <h3>Filter</h3>
        <hr />
      </div>

      {/* Calendar Section */}
      <div className="calendar-section">
        {/* Navigation Buttons */}
        <div className="calendar-header">
          <Button type="text" icon={<LeftOutlined />} />
          <Button type="primary">Today</Button>
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
