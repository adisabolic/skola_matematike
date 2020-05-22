import React from 'react';
import {Layout,Typography,Divider,Row} from 'antd';
import { background } from 'styled-system';
import NotificationsList from './NotificationsList';

const {Title} = Typography;

const {Sider} = Layout;

const SideBar = () => {

    return(
        <Sider style={{
            
            //height: '100vh',
            borderRadius: "15px",
            border:"1px solid whitesmoke",
            backgroundImage:"linear-gradient(#1890ff,#91d5ff)",

          }}
          width="260px" >
            <Row justify="center" style={{padding:'10px'}}>
            <Title level={3} style={{marginTop:'10px'}}>Obavijesti</Title>
            <Divider style={{margin:'10px'}}/>
            </Row>
            <NotificationsList/>
        </Sider>
    );

}

export default SideBar;

