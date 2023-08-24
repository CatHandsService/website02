import { styled } from "styled-components";

const FooterContainer = styled.section`
  width: 100%;
  height: 130px;
  padding-top: 64px;
  background-color: #d9d9d9;
  box-shadow: 0 0 0 100vmax #d9d9d9;
  clip-path: inset(0 -100vmax);

`;

const H2 = styled.h2`
  font-size: 2.5rem;
`;
export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <H2>Luminance</H2>
      <small>© Luminance Co., Ltd. All rights reserved.</small>
    </FooterContainer>
  )
}
