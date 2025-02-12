import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ReportDropdown = ({ onFilterChange }) => {
  return (
    <Select
      placeholder="Matrimony"
      style={{
        width: 220,
        borderRadius: "10px",
        border: "1px solid #0D5B10",
      }}
      onChange={onFilterChange}
      allowClear
    >
      <Option value="">All Records</Option>
      <Option value="pending">Cell Data</Option>
      <Option value="approved">Cell Data</Option>
      <Option value="rejected">Cell Data</Option>
    </Select>
  );
};

export default ReportDropdown;
