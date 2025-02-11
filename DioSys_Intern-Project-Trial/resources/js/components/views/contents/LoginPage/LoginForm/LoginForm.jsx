import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
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
      flexDirection: "column",
      position: "relative"
    }}>
      {/* Dark Overlay */}

      {/* DIOSYS LOGO */}
      <div style={{
        position: "absolute",
        top: "10%",
        color: "white",
        textAlign: "center",
        zIndex: 2
      }}>
        <h1 style={{ fontSize: "80px", fontWeight: "bold", margin: "0", lineHeight: "1" }}>DIOSYS</h1>
        <p style={{ fontSize: "22px", marginTop: "10px" }}>Diocesan Integrated Operations System</p>
      </div>

      {/* Login Card */}
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        width: "420px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        position: "relative",
        zIndex: 2
      }}>
        {/* Church Logo */}
        <div style={{
          width: "100px",
          height: "100px",
          background: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden"
        }}>
          <img src="/logo/church-logo.png" alt="Church Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>

        <h2 style={{ color: "#004d00", fontWeight: "bold", marginTop: "40px", marginBottom: "20px", fontSize: "22px" }}>
          ADMIN PANEL
        </h2>

        {/* Login Form */}
        <Form name="login" autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Form.Item name="username" rules={[{ required: true, message: "Please enter your username!" }]}>
            <Input
              placeholder="Username"
              prefix={<UserOutlined />}
              style={{
                padding: "12px",
                borderRadius: "20px",
                fontSize: "16px",
                background: "#ebfca3",
                width: "100%"
              }}
            />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined />}
              style={{
                padding: "12px",
                borderRadius: "20px",
                fontSize: "16px",
                background: "#ebfca3",
                width: "100%"
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{
              width: "100%",
              padding: "10px",
              background: "#0D5B10",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer"
            }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;