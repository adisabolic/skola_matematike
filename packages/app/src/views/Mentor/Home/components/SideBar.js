import React from 'react';
import {Layout} from 'antd';

const {Sider} = Layout;

const SideBar = () => {

    return(
        <Sider style={{
            
            height: '100vh',
            borderTop:"2px solid"

          }} theme="dark">
            Abc
        </Sider>
    );

}

export default SideBar;

