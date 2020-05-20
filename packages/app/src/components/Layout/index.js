import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { LayoutWrapper, CenteredContainer, ContentWrapper } from './style';


const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export const Content = ({ children }) => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <CenteredContainer>
        <ContentWrapper>{children}</ContentWrapper>
      </CenteredContainer>
    </Content>
  );
};

export * from './style';
export default Layout;
