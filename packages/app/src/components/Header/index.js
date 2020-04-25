import React from 'react';
import { PageHeader } from 'antd';

import { HeaderWrapper } from './style';
import { CenteredContainer } from '../Layout';

const Header = ({ title = 'Neki naslov', subtitle = 'Neki podnaslov' }) => {
  return (
    <HeaderWrapper>
      <CenteredContainer>
        <PageHeader
          style={{ padding: '16px 0' }}
          title={title}
          subTitle={subtitle}
        />
      </CenteredContainer>
    </HeaderWrapper>
  );
};

export default Header;
