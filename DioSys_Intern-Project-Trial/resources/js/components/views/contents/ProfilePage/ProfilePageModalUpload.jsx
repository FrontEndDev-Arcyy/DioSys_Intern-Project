import React from "react";
import { Modal, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProfilePageUpload = ({ isOpen, onClose }) => {
  const uploadProps = {
    name: "file",
    multiple: false,
    accept: ".xls,.xlsx",
    beforeUpload: (file) => {
      console.log("Uploading:", file);
      return false; // Prevents automatic upload
    },
  };

  return (
    <Modal
      title="UPLOAD FILE EXCEL"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <div style={{ padding: "20px" }}>
        <Upload.Dragger {...uploadProps} style={{
          border: "2px dashed #0D5B10",
          background: "#F9F9F9",
          padding: "30px",
          textAlign: "center",
          borderRadius: "10px"
        }}>
          <UploadOutlined style={{ fontSize: "50px", color: "#4CAF50" }} />
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "#0D5B10" }}>
            Click or drag file to this area to upload
          </p>
          <p style={{ fontSize: "14px", color: "#4CAF50" }}>
            Support for a single upload. Strictly prohibited from uploading banned files or other file types.
          </p>
        </Upload.Dragger>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "15px" }}>
          <Button onClick={onClose} style={{
            background: "white",
            border: "1px solid #0D5B10",
            color: "#0D5B10",
            borderRadius: "20px",
            padding: "8px 20px",
            cursor: "pointer"
          }}>
            Cancel
          </Button>
          <Button style={{
            background: "white",
            border: "1px solid #0D5B10",
            color: "#0D5B10",
            borderRadius: "20px",
            padding: "8px 20px",
            cursor: "pointer"
          }}>
            Clear
          </Button>
          <Button type="primary" style={{
            background: "#0D5B10",
            color: "white",
            borderRadius: "20px",
            padding: "8px 20px",
            cursor: "pointer"
          }}>
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfilePageUpload;
