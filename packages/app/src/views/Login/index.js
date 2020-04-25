import React from 'react';
import Header from '../../components/Header';
import { Content } from '../../components/Layout';
import Login from './components/Login';
import {ContentWrapper} from './components/ContentWrapper'

const LoginPage = () => {
  return (
    <>
      
      
        <ContentWrapper>
        <Login style={{justifyContent:'center'}} />
        </ContentWrapper>
      
    </>
  );
};

export default LoginPage;
