import React from 'react';
import { Comment, Tooltip, List, Form, Button, Input} from 'antd';
import moment from 'moment';

const { TextArea } = Input;




const datetime = () => {
    return(
        
            <Tooltip
              title={moment()
                .subtract(2, 'days')
                .format('YYYY-MM-DD HH:mm:ss')}
            >
              <span>
                {moment()
                  .subtract(2, 'days')
                  .fromNow()}
              </span>
            </Tooltip>
    );
}

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item style={{margin:"0"}}>
        <TextArea placeholder="Napiši komentar"
         //onPressEnter={onSubmit} 
         style={{borderRadius:"10px"}}
          rows={2}
          // onChange={onChange}
           />
      </Form.Item>
      
    </div>
  );

const HomeworkCommentsList = ({data}) => {
    return(
    <div style={{backgroundColor:"#f5f5f5",marginTop:'20px',borderRadius:"10px",padding:"10px"}}>

    {data.length>0 && <List
        
        header={` ${data.length} komentara`}
        itemLayout="horizontal"
        style={{padding:"10px"}}
        dataSource={data}
        renderItem={item => (
        <li key={item._id}>
            <Comment
            author={item.author.ime + " " + item.author.prezime}
            avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            content={item.text}
            datetime={datetime}
            />
        </li>
        )}
    />}
    <Editor/>
    </div>
    );
}

export default HomeworkCommentsList;