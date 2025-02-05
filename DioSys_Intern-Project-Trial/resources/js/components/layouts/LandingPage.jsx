import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined,
  TeamOutlined,
  CalendarOutlined,
  ProjectOutlined,
  SettingOutlined,
  MailOutlined,
  CreditCardOutlined
} from '@ant-design/icons';

import Header from './Header';
import DashboardCard from '../views/contents/DashboardCards/DashboardCard';

const { Content, Sider } = Layout;

// Helper function to create menu item objects
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const sacramentItems = [
    getItem(<Link to="/matrimony">Matrimony Records</Link>, '2-1'),
    getItem(<Link to="/baptism">Baptism Records</Link>, '2-2'),
    getItem(<Link to="/confirmation">Confirmation Records</Link>, '2-3'),
    getItem(<Link to="/memorial">Memorial Records</Link>, '2-4'),
    getItem(<Link to="/conversion">Conversion Records</Link>, '2-5'),
    getItem(<Link to="/communion">Communion Records</Link>, '2-6'),
    getItem(<Link to="/pastoral">Pastoral Life</Link>, '2-7'),
];

const accountItems = [
    getItem(<Link to="/receipt">Official Receipt</Link>, '3-1'),
    getItem(<Link to="/payroll">Payroll</Link>, '3-2'),
];

const items = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Sacrament', '2', <DesktopOutlined />, sacramentItems),
  getItem('Employees', '3', <TeamOutlined />),
  getItem('Calendar', '4', <CalendarOutlined />),
  getItem('Reports', '5', <ProjectOutlined />),
  getItem('Users', '6', <TeamOutlined />),
  getItem('System Settings', '7', <SettingOutlined />),
  getItem('Email Template', '8', <MailOutlined />),
  getItem('Accounting', '9', <CreditCardOutlined />, accountItems)
];

const App = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (['2', '9'].indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider width={220} style={{ background: '#0D5B10', color: '#0D5B10' }}>
            <div className="logo" style={{ padding: '16px', textAlign: 'center' }}>
                    <img src="/logo/A letter Logo design.png" alt="logo" style={{ width: '100%' }} />
            </div>
            <Menu
                mode="inline"
                items={items}
                style={{ background: '#0D5B10' }}
                className='customMenu'
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            />
        </Sider>
        <Layout>
            <div><Header /></div>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className='parent'>
                    <div className='div1'><DashboardCard /></div>
                    <div className='div2'></div>
                    <div className='div3'></div>
                    <div className='div4'></div>
                </div>
            </Content>
        </Layout>
    </Layout>
);
};

export default App;
