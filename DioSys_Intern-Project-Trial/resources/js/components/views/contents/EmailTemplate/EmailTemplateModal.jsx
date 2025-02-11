import React, { useState } from "react";
import { Button, Modal, Input } from "antd";

const EmailTemplateModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <Modal
      title={
        <div style={{ backgroundColor: "#0D5B10", color: "white", padding: "12px", fontWeight: "bold" }}>
          EMAIL TEMPLATE FORM
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      style={{ top: 50 }}
    >
      {/* Form Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Body Field (Text Editor) */}
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows="6"
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          resize: "none",
          fontFamily: "Arial, sans-serif",
          marginBottom: "20px",
        }}
      />

      {/* Footer Buttons */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Button style={{ borderColor: "#0D5B10", color: "#0D5B10", borderRadius: "20px", padding: "8px 20px" }} onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="primary"
          style={{ background: "#73C041", borderColor: "#73C041", color: "white", borderRadius: "20px", padding: "8px 20px" }}
          onClick={() => {
            console.log("Title:", title);
            console.log("Subject:", subject);
            console.log("Body:", body);
            onClose();
          }}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default EmailTemplateModal;
