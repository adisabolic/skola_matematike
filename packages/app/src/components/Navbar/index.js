import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { CarOutlined, HomeOutlined } from '@ant-design/icons';
import { StyledMenu } from './style';
import Logo from '../Logo';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
      <div style={{position: 'fixed', width: '100%'}}>
      <Header>
        <StyledMenu
          onSelect={({ key }) => history.push(key)}
          selectedKeys={[location.pathname]}
          theme="dark"
          mode="horizontal"
        >
          <Logo />
          <Menu.Item key="/">
            <HomeOutlined />
            <span>Home</span>
          </Menu.Item>
        </StyledMenu>
      </Header>
      </div>
  );
};

export default Navbar;
