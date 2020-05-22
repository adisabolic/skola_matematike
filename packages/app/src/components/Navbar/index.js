import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { StyledMenu } from './style';
import Logo from '../Logo';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
      
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
        <StyledMenu
          onSelect={({ key }) => history.push(key)}
          selectedKeys={[location.pathname]}
          theme="dark"
          mode="horizontal"
        >
          <Logo />
          <Menu.Item style={{borderRadius:'5px'}}  key="/">
            <HomeOutlined />
            <span>Home</span>
          </Menu.Item>
        </StyledMenu>
      </Header>
      
  );
};

export default Navbar;
