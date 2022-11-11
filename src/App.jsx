import React from "react";
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Header  ,Sider , Content , Footer } = Layout
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
function App() {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Layout id="app">
      <Header className="header">LOGO</Header>
      <Layout>
        <Sider className="sider">
          <Menu
            theme="dark"
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Content>
          <div>
            <Outlet/>
          </div>
        </Content>
      </Layout>
      <Footer className="footer">no-chili</Footer>
    </Layout>
  );
}

export default App;
