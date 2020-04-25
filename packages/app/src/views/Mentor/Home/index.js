import React from 'react';
import Header from '../../../components/Header';
//import { Content } from '../../Logo../components/Layout';
import { AuthContext } from "../../../context/Auth";
import { useAuth } from "../../../context/Auth";




const MentorHomePage = () => {

    const { userName, authToken } = useAuth();

    return(<>
        <Header/>
            <p>{userName}</p>
            <p>{authToken}</p>
    </>)
};

export default MentorHomePage;

