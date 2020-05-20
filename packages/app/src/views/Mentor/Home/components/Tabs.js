import React from 'react';
import {Tabs} from 'antd';

const { TabPane } = Tabs;

const Tab = () => {
    return(
       <Tabs defaultActiveKey="1">
           <TabPane tab="Predavanja" key="1"></TabPane>
           <TabPane tab="Zadaće" key="2"></TabPane>
           <TabPane tab="Testovi" key="3"></TabPane>
       </Tabs> 
    );


};

export default Tab;
