import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Home from './papes/Home';
import About from './papes/About';
import Dashboard from './papes/Dashboard';
import reuters from './config/routers';
import './App.css';

console.log(reuters);
const { Header, Content, Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100%' }}>

      <Router>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            style={{
              height: '32px',
              margin: '16px',
              background: 'rgba(255, 255, 255, 0.3)'
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
            {
              reuters.map((item) => (
                <Menu.Item key={item.path} icon={<UserOutlined />}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              ))
            }
            {/* <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/about" icon={<VideoCameraOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard" icon={<UploadOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              style: {
                padding: '0 24px',
                fontSize: '24px',
                lineHeight: '64px',
                cursor: 'pointer',
                transition: 'color 0.3s'
              },
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              {
                reuters.map((item) => (
                  <Route path={item.path} element={item.component} />
                ))
              }
              {/* <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
          </Content>
        </Layout>
      </Router>

    </Layout>
  );
}

export default App;
