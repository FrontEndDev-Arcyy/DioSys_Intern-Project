import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Row, Col, Avatar } from 'antd';
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



import DashboardCard from '../views/contents/DashboardPage/DashboardCards/DashboardCard';


const { Header, Content, Sider } = Layout;

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
    getItem(<Link to="/matrimony" style={{fontWeight: 'normal'}}>Matrimony Records</Link>, '2-1'),
    getItem(<Link to="/baptism" style={{fontWeight: 'normal'}}>Baptism Records</Link>, '2-2'),
    getItem(<Link to="/confirmation" style={{fontWeight: 'normal'}}>Confirmation Records</Link>, '2-3'),
    getItem(<Link to="/memorial" style={{fontWeight: 'normal'}}>Memorial Records</Link>, '2-4'),
    getItem(<Link to="/conversion" style={{fontWeight: 'normal'}}>Conversion Records</Link>, '2-5'),
    getItem(<Link to="/communion" style={{fontWeight: 'normal'}}>Communion Records</Link>, '2-6'),
    getItem(<Link to="/pastoral" style={{fontWeight: 'normal'}}>Pastoral Life</Link>, '2-7'),
];

const accountItems = [
    getItem(<Link to="/receipt" style={{fontWeight: 'normal'}}>Official Receipt</Link>, '3-1'),
    getItem(<Link to="/payroll" style={{fontWeight: 'normal'}}>Payroll</Link>, '3-2'),
];

const items = [
  getItem(<Link to="/">Dashboard</Link>, '1', <HomeOutlined />),
  getItem('Sacrament', '2', <DesktopOutlined />, sacramentItems),
  getItem(<Link to="/">Employees</Link>, '3', <TeamOutlined />),
  getItem(<Link to="/calendar">Calendar</Link>, '4', <CalendarOutlined />),
  getItem(<Link to="/">Reports</Link>, '5', <ProjectOutlined />),
  getItem(<Link to="/">Users</Link>, '6', <TeamOutlined />),
  getItem(<Link to="/">System Settings</Link>, '7', <SettingOutlined />),
  getItem(<Link to="/">Email Template</Link>, '8', <MailOutlined />),
  getItem(<Link to="/">Accounting</Link>, '9', <CreditCardOutlined />, accountItems)
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
                                <Breadcrumb.Item><Link to="">Dashboard</Link></Breadcrumb.Item>
                            </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }} className="parent">
                    <div class="div1"><DashboardCard /></div>
                    <div class="div2"> </div>
                    <div class="div3"> </div>
                    <div class="div4"> </div>
                </div>
            </Content>
        </Layout>
    </Layout>
);
};

export default App;
