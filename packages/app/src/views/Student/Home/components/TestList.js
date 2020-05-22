import React from 'react';
import { List, Avatar, Space,Tag,Tooltip } from 'antd';
import {UserOutlined,CalendarOutlined } from '@ant-design/icons';


const data = [{_id:'1',mentor:{name:'Admir',surname:'Beširević'},cycle:{year:{name:'2019/2020'},
    ordinalNumber:2},numberOfProblems:5,maxScore:100,date:'11.10.2019',fileProblems:'Današnja tema......'},
    {_id:'2',mentor:{name:'Adisa',surname:'Bolić'},cycle:{year:{name:'2019/2020'},
    ordinalNumber:1},numberOfProblems:7,maxScore:100,date:'18.10.2019',fileProblems:'Sejo vas je razmazio, ja neću!'},
    {_id:'3',mentor:{name:'Sead',surname:'Delalić'},cycle:{year:{name:'2019/2020'},
    ordinalNumber:2},numberOfProblems:10,maxScore:100,date:'25.10.2019',fileProblems:'Probajte to kući malo preći...'},
    {_id:'4',mentor:{name:'Dina',surname:'Kamber'},cycle:{year:{name:'2019/2020'},
    ordinalNumber:2},numberOfProblems:3,maxScore:50,date:'2.12.2019',fileProblems:'Bla bla bla bla bla bla bal bla bla bla bla bla'}];


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const TestList = () => {
    return(
        <List
        itemLayout="vertical"
        size="large"
        split={true}
        style={{margin:'10px'}}
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 3,
        }}
        dataSource={data}
        footer={null}
        renderItem={item => (
        <List.Item
            key={item._id}
            actions={[
            <IconText icon={UserOutlined} text={item.mentor.name+" "+item.mentor.surname} key="list-vertical-mentor" />,
            <IconText icon={CalendarOutlined} text={item.date} key="list-vertical-date" />
            ]}
            extra={
            null
            }
        >
            <List.Item.Meta
            avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
        title={<Space>Test <Tag color="blue">{item.cycle.year.name+" #"+item.cycle.ordinalNumber}</Tag></Space>}
            description={<Space><Tooltip title="Broj zadataka"><Tag>{"#"+item.numberOfProblems}</Tag></Tooltip>
                        <Tooltip title="Maksimalni broj bodova"><Tag color="green">{item.maxScore}</Tag></Tooltip></Space>}
            />
            {item.fileProblems}
        </List.Item>
        )}
        />
    );

};

export default TestList;