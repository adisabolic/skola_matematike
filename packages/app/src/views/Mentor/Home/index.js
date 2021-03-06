import React from 'react';
import { Content } from '../../../components/Layout'
import { useAuth } from "../../../context/Auth";
import Tabs from './components/Tabs';
import SideBar from './components/SideBar';
import {Layout} from 'antd';
import {MentorWrapper,MentorWrapperParent} from './components/MentorWrapper';





const MentorHomePage = () => {

    const { authToken, user } = useAuth();

    return(
        <MentorWrapperParent>
            <MentorWrapper>
                <Layout style={{height:'100%'}}>
                    <SideBar/>
                    
                        <Tabs style={{ marginLeft: '20vw' }} />
                    
                </Layout>
            </MentorWrapper>
        </MentorWrapperParent>
    )
};

export default MentorHomePage;

