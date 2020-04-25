import styled from 'styled-components';
import LoginBg from './login-bg.jpg';

export const LoginWrapper = styled.div`
    box-shadow: 0 0 16px 1px #1327af ;
    height: 60vh;
    width:27vw;
    border-radius : 25px;
    background-image: linear-gradient(rgba(0,0,110,0.9),rgba(0,0,160,0.65)), url(${LoginBg});
    background-size: cover;
    margin: auto ;
`;

