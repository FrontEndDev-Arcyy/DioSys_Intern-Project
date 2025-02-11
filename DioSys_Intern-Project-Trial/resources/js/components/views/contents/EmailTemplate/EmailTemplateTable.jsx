import React, { useState } from "react";
import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import EmailTemplateModal from "./EmailTemplateModal"; // ✅ Import the modal

const EmailTemplateTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({
    subject: "First Template",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  return (
    <div style={{ padding: "20px", background: "#F5F5F5", minHeight: "100vh", borderRadius: "10px" }}>
      {/* Add Email Template Button */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)} 
        style={{
          backgroundColor: "#0D5B10",
          borderColor: "#0D5B10",
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "8px 20px",
          marginBottom: "10px",
        }}
      >
        Add Email Template
      </Button>

      {/* Email Template Container */}
      <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        {/* Header with Edit Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0D5B10", padding: "12px", borderRadius: "5px 5px 0 0" }}>
          <span></span>
          <EditOutlined 
            style={{ fontSize: "18px", color: "white", cursor: "pointer" }} 
            onClick={() => setIsModalOpen(true)} 
          />
        </div>

        {/* Email Template Table */}
        <Table
          pagination={false}
          showHeader={false}
          bordered
          dataSource={[
            { key: "1", label: <strong>SUBJECT</strong>, value: emailTemplate.subject },
            { key: "2", label: <strong>BODY</strong>, value: emailTemplate.body },
          ]}
          columns={[
            {
              title: "",
              dataIndex: "label",
              key: "label",
              width: "20%",
              render: (text) => <div style={{ background: "#EAEAEA", padding: "12px", fontWeight: "bold" }}>{text}</div>,
            },
            {
              title: "",
              dataIndex: "value",
              key: "value",
              render: (text) => <div style={{ padding: "12px" }}>{text}</div>,
            },
          ]}
          style={{ width: "100%" }}
        />
      </div>

      {/* Email Template Modal */}
      <EmailTemplateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default EmailTemplateTable;
