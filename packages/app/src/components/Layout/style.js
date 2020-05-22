import styled from 'styled-components';
import { space } from 'styled-system';

export const StyledContainer = styled.div(space);

export const Heading = styled.h3(space);

export const Subheading = styled.p(space);

export const LayoutWrapper = styled.div`
  background: #efefef;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  background: #fff;
  min-height: 83vh;
  margin-top: 84px;
  padding: 20px;
`;

export const CenteredContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  float:right;
  
 
`;

export const CenteredRow = styled.div`
  width: 100%;
  text-align: center;
`;

export const RightAlignedRow = styled(StyledContainer)`
  width: 100%;
  text-align: end;
`;

export const CommentInputWrapper = styled.div(space);
