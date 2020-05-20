import React from 'react';
import { Switch,Form,Input,Button, Col } from 'antd';
import {LoginWrapper} from './style';
import CreateDrawer from '../CreateDrawer';
import { loginMutation } from '../../../../graphql/mutations/login';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useAuth } from "../../../../context/Auth";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";


const Login = () => {

    const [login, { data }] = useMutation(loginMutation);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    //const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthToken, setUser } = useAuth();

    const onFinish = (values) => {
        login({ variables: { email: values.mail, password: values.password } })
        .then(result => {
      if (result.data) {
        setAuthToken(result.data.login.token);
        setUser(result.data.login.user);
        setLoggedIn(true);
      } else {
          console.log("error.message");
        setIsError(true);
      }
    }).catch(e => {
        console.log(e)
      setIsError(true);
    });
    }
    
    if (isLoggedIn) {
        console.log("logged in je true");
        return <Redirect to="/" />;
      }

    return (
        <LoginWrapper>
        <div style={{display:'inline-block', width:'100%', padding:'20px'}}>
        <Switch style={{float:'right'}} checkedChildren="učenik" unCheckedChildren="predavač" defaultChecked />
        </div>
        <Col offset={5} span={14}>
            <div style={{display:'inline-block',width:'100%', marginBottom:'4vh'}}>
                <h1 style={{textAlign:'center',color:'#eaeae6'}}>Enter your world</h1>
            </div>
        <Form  name="login" layout="horizontal"
        onFinish={onFinish}
        >
            
            <Form.Item
                name="mail"
                rules={[{required: true, message:'Molimo vas unesite vaš e-mail'} ]}
                > 
                <Input  placeholder="E-mail" />
            </Form.Item >
            <Form.Item  name="password"
            rules={[{required:true,message:'Molimo vas unesite vašu lozinku'}]} >
                <Input.Password placeholder="Lozinka" />
            </Form.Item>
            <Button block type="primary" size="large" htmlType="submit" >Prijavi se</Button>
        </Form>
        <CreateDrawer/>
        </Col>

        </LoginWrapper>
    );
}
export default Login ;