import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    // DesktopOutlined,
    HomeOutlined,
    TeamOutlined,
    CalendarOutlined,
    ProjectOutlined,
    SettingOutlined,
    MailOutlined,
    CreditCardOutlined,
    BellOutlined,
    UserOutlined,
    BookOutlined
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faChurch } from '@fortawesome/free-solid-svg-icons';

import DashboardCard from '../views/contents/DashboardPage/DashboardCards/DashboardCard';
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
  getItem(<Link to="/matrimony" style={{fontWeight: 'normal'}}>Matrimony Records</Link>, '3-1'),
  getItem(<Link to="/baptism" style={{fontWeight: 'normal'}}>Baptism Records</Link>, '3-2'),
  getItem(<Link to="/confirmation" style={{fontWeight: 'normal'}}>Confirmation Records</Link>, '3-3'),
  getItem(<Link to="/memorial" style={{fontWeight: 'normal'}}>Memorial Records</Link>, '3-4'),
  getItem(<Link to="/conversion" style={{fontWeight: 'normal'}}>Conversion Records</Link>, '3-5'),
  getItem(<Link to="/communion" style={{fontWeight: 'normal'}}>Communion Records</Link>, '3-6'),
  getItem(<Link to="/pastoral" style={{fontWeight: 'normal'}}>Pastoral Life</Link>, '3-7'),
];

const accountItems = [
  getItem(<Link to="/receipt" style={{fontWeight: 'normal'}}>Official Receipt</Link>, '11-1'),
  getItem(<Link to="/payroll" style={{fontWeight: 'normal'}}>Payroll</Link>, '11-2'),
];

const servicesItems = [
    getItem(<Link to="/holymass" style={{fontWeight: 'normal'}}>Holy Mass</Link>, '3-1'),
];

const items = [
  getItem(<Link to="/">Dashboard</Link>, '1', <HomeOutlined />),
  getItem(<Link to="/profile">Profile</Link>, '2', <UserOutlined />),
  getItem('Sacrament', '3', <FontAwesomeIcon icon={faCross} />, sacramentItems),
  getItem('Services', '4', <FontAwesomeIcon icon={faChurch} />, servicesItems),
  getItem(<Link to="/employees">Employees</Link>, '5', <TeamOutlined />),
  getItem(<Link to="/calendar">Calendar</Link>, '6', <CalendarOutlined />),
  getItem(<Link to="/reports">Reports</Link>, '7', <ProjectOutlined />),
  getItem(<Link to="/users">Users</Link>, '8', <UserOutlined />),
  getItem(<Link to="/settings">System Settings</Link>, '9', <SettingOutlined />),
  getItem(<Link to="/emails">Email Template</Link>, '10', <MailOutlined />),
  getItem('Accounting', '11', <CreditCardOutlined />, accountItems),
  getItem(<Link to="/venue">Venue</Link>, '12', <BookOutlined />)
];

const PageLanding = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys,setOpenKeys] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleOpenChange =(keys) => {
    setOpenKeys(keys);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ background: '#0D5B10'}} width={220}>
            <div className="logo" style={{ padding: '16px', textAlign: 'center' }}>
                  <img src="https://placehold.co/195x179" alt="logo" style={{ width: '100%' }} />
            </div>
        <Menu theme="light" defaultSelectedKeys={['']} mode="inline" openKeys={(openKeys)} onOpenChange={handleOpenChange} items={items} style={{ background: '#0D5B10'}} className='customMenu'/>
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
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }} className='parent'>
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

export default PageLanding;
