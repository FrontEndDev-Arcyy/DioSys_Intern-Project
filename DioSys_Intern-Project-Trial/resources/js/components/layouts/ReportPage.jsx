import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    DesktopOutlined,
    HomeOutlined,
    TeamOutlined,
    CalendarOutlined,
    ProjectOutlined,
    SettingOutlined,
    MailOutlined,
    CreditCardOutlined,
    BellOutlined,
    UserOutlined
} from '@ant-design/icons';

import ReportTable from '../views/contents/ReportPage/ReportTable'; 
import { Breadcrumb, Layout, Menu, theme, Row, Col, Avatar } from 'antd';


const { Header, Content, Sider } = Layout;

// Helper function to create menu item objects with possible links
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// Define nested menu items using React Router Links
const sacramentItems = [
  getItem(<Link to="/matrimony" style={{fontWeight: 'normal'}}>Matrimony Records</Link>, '2-1'),
  getItem(<Link to="/baptism" style={{fontWeight: 'normal'}}>Baptism Records</Link>, '2-2'),
  getItem(<Link to="/confirmation" style={{fontWeight: 'normal'}}>Confirmation Records</Link>, '2-3'),
  getItem(<Link to="/memorial" style={{fontWeight: 'normal'}}>Memorial Records</Link>, '2-4'),
  getItem(<Link to="/conversion" style={{fontWeight: 'normal'}}>Conversion Records</Link>, '2-5'),
  getItem(<Link to="/communion" style={{fontWeight: 'normal'}}>Communion Records</Link>, '2-6'),
  getItem(<Link to="/pastoral" style={{fontWeight: 'normal'}}>Pastoral Life</Link>, '2-7'),
];

const accountItems = [
  getItem(<Link to="/receipt" style={{fontWeight: 'normal'}}>Official Receipt</Link>, '9-1'),
  getItem(<Link to="/payroll" style={{fontWeight: 'normal'}}>Payroll</Link>, '9-2'),
];

const items = [
  getItem(<Link to="/">Dashboard</Link>, '1', <HomeOutlined />),
  getItem('Sacrament', '2', <DesktopOutlined />, sacramentItems),
  getItem(<Link to="/employees">Employees</Link>, '3', <TeamOutlined />),
  getItem(<Link to="/calendar">Calendar</Link>, '4', <CalendarOutlined />),
  getItem(<Link to="/reports">Reports</Link>, '5', <ProjectOutlined />),
  getItem(<Link to="/users">Users</Link>, '6', <UserOutlined />),
  getItem(<Link to="/settings">System Settings</Link>, '7', <SettingOutlined />),
  getItem(<Link to="/emails">Email Template</Link>, '8', <MailOutlined />),
  getItem('Accounting', '9', <CreditCardOutlined />, accountItems),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ background: '#0D5B10', color: '#0D5B10' }} width={220}>
            <div className="logo" style={{ padding: '16px', textAlign: 'center' }}>
                  <img src="/logo/A letter Logo design.png" alt="logo" style={{ width: '100%' }} />
            </div>
        <Menu theme="light" defaultSelectedKeys={['']} mode="inline" items={items} style={{ background: '#0D5B10'}} className='customMenu'/>
      </Sider>
      <Layout>
      <Header style={{ padding: 0, backgroundColor: 'white', lineHeight: '64px' }}>
          <Row justify="end">
            <Col>
              <span style={{ marginRight: 24 }}>Company Name</span>
              <BellOutlined style={{ marginRight: 24 }} />
              <Avatar style={{ backgroundColor: '#0D5B10', marginRight: 24 }} icon={<UserOutlined />} />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/"><HomeOutlined /></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="">Reports</Link></Breadcrumb.Item>
              
            </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }} >
            <ReportTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
