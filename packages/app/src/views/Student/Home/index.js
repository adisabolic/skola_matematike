import React from 'react';
import { Content } from '../../../components/Layout'
import { useAuth } from "../../../context/Auth";
import Tabs from './components/Tabs';
import SideBar from './components/SideBar';
import {Layout} from 'antd';
import {StudentWrapper,StudentWrapperParent} from './components/StudentWrapper';

const StudentHomePage = () => {
    const { authToken, user } = useAuth();

    return(
        <StudentWrapperParent>
            <StudentWrapper>
                <Layout style={{minHeight:'95vh'}}>
                    <SideBar/>
                    
                        <Tabs/>
                    
                </Layout>
            </StudentWrapper>
        </StudentWrapperParent>
    )
};

export default StudentHomePage;