import React from 'react';
import { List, Avatar, Space,Tag } from 'antd';
import {UserOutlined,CalendarOutlined } from '@ant-design/icons';


const data = [{_id:'1',author:{name:'Admir',surname:'Beširević'},createdAt:'11.10.2019',text:'Današnja tema......'},
    {_id:'2',author:{name:'Adisa',surname:'Bolić'},createdAt:'18.10.2019',text:'Sejo vas je razmazio, ja neću!'},
    {_id:'3',author:{name:'Sead',surname:'Delalić'},createdAt:'25.10.2019',text:'Probajte to kući malo preći...'},
    {_id:'4',author:{name:'Dina',surname:'Kamber'},createdAt:'2.12.2019',text:'Bla bla bla bla bla bla bal bla bla bla bla bla'}];


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const NotificationsList = () => {
    return(
        <List
        itemLayout="vertical"
        size="large"
        split={true}
        style={{margin:'10px'}}
        pagination={null}
        dataSource={data}
        footer={null}
        renderItem={item => (
        <List.Item
            key={item._id}
            actions={[
            <IconText icon={CalendarOutlined} text={item.createdAt} key="list-vertical-date" />
            ]}
            extra={
            null
            }
        >
            <List.Item.Meta
            avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
            title={item.author.name+" "+item.author.surname}
            />
            {item.text}
        </List.Item>
        )}
        />
    );

};

export default NotificationsList;