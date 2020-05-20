import React from 'react';
import { Content } from '../../../components/Layout'
import { useAuth } from "../../../context/Auth";
import Tabs from './components/Tabs';




const MentorHomePage = () => {

    const { authToken, user } = useAuth();

    return(<>
    <Content>
        <Tabs/>
    </Content>
        
           
    </>)
};

export default MentorHomePage;

