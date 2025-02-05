import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, BellFilled } from '@ant-design/icons';




export default function Header() {
    // Dropdown menu for the avatar
    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="settings">
                <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="logout">
                <Link to="/logout">Logout</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout.Header
            style={{
                backgroundColor: "white",
                color: "#000",
                height: "9vh",
            }}j
        >  
            <ul style={{ display: "flex", justifyContent: "flex-end", gap: 24, alignItems: "center" }}>
                <li>
                    <Link to="/">Arcyy Company</Link>
                </li>
                <li>
                    <BellFilled />
                </li>
                <li>
                    {/* Dropdown Trigger */}
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            <Avatar style={{ backgroundColor: '#0D5B10' }} icon={<UserOutlined />} />
                        </a>
                    </Dropdown>
                </li>
            </ul>
        </Layout.Header>
    );
}
