import React from 'react';
import {Tabs} from 'antd';
import LectureList from './LectureList';
import HomeworkList from './HomeworkList';
import TestList from './TestList';
import PaymentDrawer from './PaymentDrawer';

 
const { TabPane } = Tabs;



const Tab = () => {
    return(
       <Tabs style={{margin:'2px 20px',backgroundColor:'white',width:'100%',
       borderRadius:'15px',marginBottom:'20px'}} defaultActiveKey="1"
       tabBarStyle={{paddingLeft:'10px'}}
       tabBarExtraContent={<PaymentDrawer/>}>
           <TabPane tab="Predavanja" key="1"><LectureList/></TabPane>
           <TabPane tab="Zadaće" key="2"><HomeworkList/></TabPane>
           <TabPane tab="Testovi" key="3"><TestList/></TabPane>
       </Tabs> 
    );


};

export default Tab;
