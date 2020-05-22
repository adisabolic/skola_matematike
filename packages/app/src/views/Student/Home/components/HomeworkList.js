import React from 'react';
import { List, Avatar, Space,Tag,Tooltip,Divider } from 'antd';
import {UserOutlined,CalendarOutlined } from '@ant-design/icons';
import HomeworkCommentsList from './HomeworkCommentsList';

const data = [{_id:'1',user:{name:'Admir',surname:'Beširević'},createdAt:'10.9.2019',
dueDate:'11.10.2019',file:'Današnja tema......',comments:[]},
    {_id:'2',user:{name:'Adisa',surname:'Bolić'},createdAt:'10.9.2019',
    dueDate:'18.10.2019',file:'Sejo vas je razmazio, ja neću!',comments:[{_id:1,author:{ime:'Ajdin',prezime:'Muharemović'},
    text:'Odlično!',createdAt:'22.10.2019'},{_id:2,author:{ime:'Ermin',prezime:'Pijuk'},
    text:'Izvinite',createdAt:'22.10.2019'},{_id:3,author:{ime:'Amina',prezime:'Sinanović'},
    text:'Non me interesa',createdAt:'22.10.2019'}]},
    {_id:'3',user:{name:'Sead',surname:'Delalić'},createdAt:'10.9.2019',dueDate:'25.10.2019',file:'Probajte to kući malo preći...',comments:[]},
    {_id:'4',user:{name:'Dina',surname:'Kamber'},createdAt:'10.9.2019',dueDate:'2.12.2019',file:'Bla bla bla bla bla bla bal bla bla bla bla bla',comments:[]}];


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const HomeworkList = () => {
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
            //style={{backgroundColor:'#fafafa'}}
        >
            <List.Item.Meta
            avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
            title={"Zadaća"}
            description={<Space>
                    <IconText icon={UserOutlined} text={item.user.name+" "+item.user.surname} />
                    <IconText icon={CalendarOutlined} text={item.createdAt} />
                    <Tooltip title="Krajnji rok"> <Tag color="red">{item.dueDate}</Tag> </Tooltip>

                </Space>}
            />

            {item.file}
            <HomeworkCommentsList data={item.comments}/>
        </List.Item>
        )}
        />
    );

};

export default HomeworkList;
