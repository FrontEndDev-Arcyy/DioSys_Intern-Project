import React from "react";
import { Button, Modal, Input, Select, Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Panel } = Collapse;

const UsersPageModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => setIsModalOpen(false);

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={900}
      style={{ borderRadius: "10px", padding: "20px" }}
    >
      <a href="#" style={{ color: "#0D5B10", fontWeight: "bold", display: "block", marginBottom: "10px" }}>← Back to list</a>
      <Collapse
        defaultActiveKey={["1", "2"]}
        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
        style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
      >
        <Panel header={<span style={{ fontWeight: "bold", color: "white" }}>ACCOUNT INFORMATION</span>} key="1" style={{ background: "#0D5B10" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", padding: "10px" }}>
            <Input placeholder="Username" />
            <Input placeholder="E-mail" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Church Assigned" />
            <Input placeholder="Role" />
          </div>
        </Panel>
        <Panel header={<span style={{ fontWeight: "bold", color: "white" }}>PARISHIONER INFORMATION</span>} key="2" style={{ background: "#0D5B10" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", padding: "10px" }}>
            <Input placeholder="First Name" />
            <Input placeholder="Middle Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Name Extension" />
          </div>
        </Panel>
      </Collapse>
      <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #E0E0E0", borderRadius: "10px", background: "#FAFAFA" }}>
        <h4 style={{ color: "red", fontWeight: "bold", marginBottom: "5px" }}>DATA PRIVACY ACT OF 2012</h4>
        <p style={{ fontSize: "12px" }}>
          The processing of personal information shall be allowed, subject to compliance with the requirements of this Act
          and other laws allowing disclosure of information to the public and adherence to the principles of transparency,
          legitimate purpose, and proportionality.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
        <Button style={{ borderColor: "#0D5B10", color: "#0D5B10", borderRadius: "20px", padding: "8px 20px" }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="primary" style={{ background: "#73C041", borderColor: "#73C041", color: "white", borderRadius: "20px", padding: "8px 20px" }}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default UsersPageModal;
