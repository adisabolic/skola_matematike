import styled from 'styled-components';
import FooterImage from './footer-books.png';

export const FooterWrapper = styled.div`
  padding: 40px 0;
  text-align: center;
  background: whitesmoke;
  background-image: url(${FooterImage});
  overflow: hidden;
  @media (max-width: 990px) {
    padding-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`;
