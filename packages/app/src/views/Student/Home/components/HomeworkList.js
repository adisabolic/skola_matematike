import React from 'react';
import { List, Avatar, Space,Tag,Tooltip,Divider } from 'antd';
import {UserOutlined,CalendarOutlined } from '@ant-design/icons';
import HomeworkCommentsList from './HomeworkCommentsList';
import { useQuery } from '@apollo/react-hooks';
import { ErrorIllustration } from '../../../../components/Illustration';
import {
  getHomeworksByCourseQuery,
  getHomeworksByCourseQueryOptions
} from '../../../../graphql/queris/getHomeworksByCourse';
import { useAuth } from '../../../../context/Auth';

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

    const { user } = useAuth();
    const { data, loading, error, refetch } = useQuery(
        getHomeworksByCourseQuery,
        getHomeworksByCourseQueryOptions(user && user.course && user.course._id),
      );
    
      if (error)
        return (
          <ErrorIllustration text={`Error while fetching data: ${error.message}`} />
        );
            
      
      let homeworksByCourse = data && data.homeworksByCourse && data.homeworksByCourse.nodes;

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
        dataSource={homeworksByCourse}
        footer={null}
        renderItem={item => (
        <List.Item
            key={item && item._id}
            //style={{backgroundColor:'#fafafa'}}
        >
            <List.Item.Meta
            avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
            title={"Zadaća"}
            description={<Space>
                    <IconText icon={UserOutlined} text={item && item.user && item.user.name+ " "+ item.user.surname} />
                    <IconText icon={CalendarOutlined} text={item && item.createdAt} />
                    <Tooltip title="Krajnji rok"> <Tag color="red">{item && item.dueDate}</Tag> </Tooltip>

                </Space>}
            />

            {item && item.file}
            <HomeworkCommentsList HWId={item && item._id}/>
        </List.Item>
        )}
        />
    );

};

export default HomeworkList;
