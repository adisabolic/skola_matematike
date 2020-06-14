import React, { useState } from 'react';
import { Comment, Tooltip, List, Form, Button, Input} from 'antd';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { ErrorIllustration } from '../../../../components/Illustration';
import {
  getHWCommentsByHWQuery,
  getHWCommentsByHWQueryOptions
} from '../../../../graphql/queris/getHWCommentsByHW';
import { useMutation } from '@apollo/react-hooks';
import {
  createHWCommentMutation,
  createHWCommentMutationOptions,
} from '../../../../graphql/mutations/createHWComment';
import { useAuth } from '../../../../context/Auth';

const { TextArea } = Input;




const Datetime = () => {

    
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

const Editor = ({ HWId, onSubmit, text }) => {
  const { user } = useAuth();
  const [createHWComment] = useMutation(
    createHWCommentMutation,
    createHWCommentMutationOptions({ cleanup: () => { form.resetFields(); onSubmit(); }}),
  );
  const [form] = Form.useForm();
  const [commentText, setCommentText] = useState("");
  
  const handleSubmit = (e) => {
    if (e){
      e.preventDefault();
      const value = e.target.value;
      if(value) {
        const input = {author: user._id, homework: HWId, text: value};
        setCommentText("");        
        createHWComment({
          variables: {
            input: input,
          },
        });
      }
      
    }
  }

  const handleChange = (e) => {
    if(e) setCommentText(e.target.value);
  }

  return (
    <div>
      <Form
        form={form}
        name={"CommentForm " + HWId}
      >
        <Form.Item style={{margin:"0"}}>
          <TextArea placeholder="Napiši komentar"
          value={commentText}
          onPressEnter={handleSubmit} 
          style={{borderRadius:"10px"}}
            rows={2}
           onChange={handleChange}
            />
        </Form.Item>
      </Form>
      
      
    </div>
  )
} ;

const HomeworkCommentsList = (HW) => {

  const { data, loading, error, refetch } = useQuery(
    getHWCommentsByHWQuery,
    getHWCommentsByHWQueryOptions(HW.HWId),
  );

  if (error)
    return (
      <ErrorIllustration text={`Error while fetching data: ${error.message}`} />
    );

    const HWComments = data && data.homeworkCommentsByHomework && data.homeworkCommentsByHomework.nodes;

    console.log(HWComments);

    return(
    <div style={{backgroundColor:"#f5f5f5",marginTop:'20px',borderRadius:"10px",padding:"10px"}}>

    {HWComments && HWComments.length>0 && <List
        
        header={` ${HWComments.length} komentara`}
        itemLayout="horizontal"
        style={{padding:"10px"}}
        dataSource={HWComments}
        
        renderItem={item => (
        <li key={item._id}>
            <Comment
            author={item.author.name + " " + item.author.surname}
            avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            content={item.text}
            datetime={<Datetime/>}
            />
        </li>
        )}
    />}
    <Editor
      HWId={HW.HWId}
      onSubmit={refetch}
    />
    </div>
    );
}

export default HomeworkCommentsList;