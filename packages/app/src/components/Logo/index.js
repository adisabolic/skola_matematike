import React from 'react';
import LogoImage from './logo.png';
import { LogoWrapper } from './style';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImage} alt="logo" width={180}/>
    </LogoWrapper>
  );
};

export default Logo;
