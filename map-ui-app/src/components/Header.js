import React from 'react';
import { Button, Layout } from 'antd';
import './Header.css';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className='Head'>
      <div class="Head">
      <div className="logo">MapApp</div>
      <div className="user-actions">
        <Button class="btn">Login</Button>
        <Button class="btn">Profile</Button>
      </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
