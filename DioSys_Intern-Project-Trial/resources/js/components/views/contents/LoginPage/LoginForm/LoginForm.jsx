import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: "url('/logo/loginpagebg.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        padding: "50px 35px",
        borderRadius: "15px",
        width: "420px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        position: "relative"
        //company name
     }}>
        <div style={{
          position: "absolute",
          top: "-90px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "22px",
          fontWeight: "bold",
          color: "#004d00",
          background: "transparent",
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }}>
          COMPANY NAME
        </div>
        <div style={{
          width: "130px",
          height: "130px",
          background: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-65px",
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden"
        }}>
          <img src="/logo/A letter Logo design.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <h2 style={{ color: "rgb(0, 77, 0)", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", fontSize: "20px" }}>
          ADMIN PANEL
        </h2>
        <Form
          name="login"
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="" prefix={<UserOutlined />} style={{ padding: "14px", borderRadius: "8px", fontSize: "16px", background: "#ebfca3"}} />
          </Form.Item> 
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="" prefix={<LockOutlined />} style={{ padding: "14px", borderRadius: "15px", fontSize: "16px",background: "#ebfca3" }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{
              width: "100%",
              padding: "16px",
              background: "rgb(0, 77, 0)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px"
            }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
