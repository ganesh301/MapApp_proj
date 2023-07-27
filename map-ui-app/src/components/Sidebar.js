import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, YourIcon } from '@ant-design/icons';

const { Sider } = Layout;

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null} 
      collapsedWidth={80}
      breakpoint="md" 
      onCollapse={toggleSidebar}
      width={200} 
    >
     
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" >
          Menu Item 1
        </Menu.Item>
        <Menu.Item key="2">
          Menu Item 2
        </Menu.Item>
     
      </Menu>
      <Button
        className="collapse-button"
        type="primary"
        onClick={toggleSidebar}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </Sider>
  );
};

export default SidebarComponent;
