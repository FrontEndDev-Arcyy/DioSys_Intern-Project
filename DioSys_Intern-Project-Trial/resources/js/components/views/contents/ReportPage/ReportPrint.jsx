import React from "react";
import { Button } from "antd";
import { PrinterOutlined } from "@ant-design/icons";

const ReportPrint = () => {
  return (
    <Button
      type="primary"
      icon={<PrinterOutlined />}
      style={{
        backgroundColor: "#0D5B10",
        borderColor: "#0D5B10",
        borderRadius: "20px",
        padding: "8px 16px",
        fontSize: "14px",
      }}
    >
      PDF Print
    </Button>
  );
};

export default ReportPrint;
